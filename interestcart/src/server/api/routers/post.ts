import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";
import { z } from "zod";
import { SendEmail } from "~/actions/mailer";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      username: z.string().min(3),
      email: z.string(),
      password: z.string().min(8)
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        const existingUser = await ctx.db.user.findUnique({
          where: {
            email: input.email,
          }
        })
        if (existingUser) {
          throw new Error("User with this email already exists");
        }
        const user = await ctx.db.user.create({
          data: {
            username: input.username,
            email: input.email,
            password: input.password
          },
        });
        //send verification email
        await SendEmail({
          email : input.email,
          userId : user.id,
        })
        return {message : "Sign up Completed. Please Verify yourself"};
      } catch (error: any) {
        if (error.message = "User with this email already exists") {
          return { message: "User already exists" };
        }
        console.error("Error creating user:", error);
        return { message: "An error occurred. Please try again later." };
      }
      
    }),
  verifyEmail : publicProcedure
    .input(z.object({
      verificationToken : z.string().max(6).min(6),
    }))
    .mutation(async ({ctx, input}) => {
      try {
        const session = cookies().get("session")?.value;
        if(!session) throw new Error("No Session");
        const user = await ctx.db.user.findFirst({
          where : {
            sessionToken : session,
          },
        })
        if(!user) throw new Error("Invalid Session Token");
        else if (!user.verifyToken && !user.verifyTokenExpiry) 
          throw new Error("No Verification Token Present")
        else if (user.verifyToken && user.verifyToken !== input.verificationToken)
          throw new Error("Verification Token Invalid");
        else if (user.verifyTokenExpiry && user.verifyTokenExpiry < Date.now())
          throw new Error("Verification Token Expired");
        await ctx.db.user.update({
          where : {
            id : user.id,
          },
           data : {
            verified : true,
            verifyToken : undefined,
            verifyTokenExpiry : undefined,
           }
        })
        return {
          message : "Email Verified",
        }
    } catch (error : any) {
        console.log(error);
        return { message : error}
      }
    })
});
