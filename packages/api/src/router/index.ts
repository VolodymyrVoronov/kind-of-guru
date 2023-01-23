import * as trpc from "@trpc/server";
import { z } from "zod";

import type { Context } from "../context";

export const appRouter = trpc
  .router<Context>()
  .query("getUsers", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  })
  .mutation("createUser", {
    input: z.object({
      firstName: z.string().min(2).max(245),
      familyName: z.string().min(2).max(245),
      information: z.string().max(500),
      joinedCompany: z.string(),
      home: z.boolean().default(true),
      office: z.boolean().default(false),
      intern: z.boolean().default(true),
      extern: z.boolean().default(false),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.user.create({
        data: {
          firstName: input.firstName,
          familyName: input.familyName,
          information: input.information,
          joinedCompany: input.joinedCompany,
          home: input.home,
          office: input.office,
          intern: input.intern,
          extern: input.extern,
        },
      });
    },
  });

export type AppRouter = typeof appRouter;
