import { sign } from "jsonwebtoken";
import { parseCookies } from "nookies";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
const jwtSecret = process.env.JWT_TOKEN;

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
          where : {
            email: input.email,
          }
        })
        if (existingUser) {
          // User already exists, return custom error message
          throw new Error("User with this email already exists");
        }
        const newUser = await ctx.db.user.create({
          data: {
            username: input.username,
            email: input.email,
            password: input.password
          },
        });
        console.log(newUser);
        return { accessToken: "Signup completed. Please verify yourself." };
      } catch (error : any) {
        if (error.message = "User with this email already exists") {
          return { accessToken: "User already exists" };
        }
        console.error("Error creating user:", error);
        return { accessToken: "An error occurred. Please try again later." };


      }
      const token = sign({ username: input.username }, jwtSecret || "");
      const cookies = parseCookies(ctx);
      console.log(token);

      // if(cookies) {
      //   ctx.res.setHeader(
      //     "Set-Cookie",
      //     cookies.serialize("token",token, {
      //       httpOnly : true,
      //       maxAge: 30* 24 *60*60,
      //       path: "/",
      //       sameSite: "lax",
      //       secure: process.env.NODE_ENV === "production"
      //     })
      //   );
      // } else {
      //   console.error("Error : Failed to parse cookies");
      // }
    }),
});
