import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ 
        username: z.string().min(3),
        email: z.string(),
        password: z.string().min(8)
    }))
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(input);

      const res = await ctx.db.user.create({
        data: {
            username: input.username,
            email: input.email,
            password: input.password
        },
      });
      console.log(res);
      return res;
    }),
});
