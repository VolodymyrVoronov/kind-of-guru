import * as trpc from "@trpc/server";
import { z } from "zod";

import type { Context } from "../context";

const User = z.object({
  firstName: z.string().min(2).max(245),
  familyName: z.string().min(2).max(245),
  information: z.string().max(500),
  joinedCompany: z.string(),
  home: z.boolean().default(true),
  office: z.boolean().default(false),
  intern: z.boolean().default(true),
  extern: z.boolean().default(false),
  roles: z.string(),
});

const UserWithId = User.extend({
  id: z.number(),
});

export const appRouter = trpc
  .router<Context>()
  .query("getUsers", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  })
  .query("getUser", {
    input: z.object({
      id: z.number(),
    }),

    async resolve({ input, ctx }) {
      return await ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation("createUser", {
    input: User,
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
          roles: input.roles,
        },
      });
    },
  })
  .mutation("updateUser", {
    input: UserWithId,
    async resolve({ input, ctx }) {
      return await ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          firstName: input.firstName,
          familyName: input.familyName,
          information: input.information,
          joinedCompany: input.joinedCompany,
          home: input.home,
          office: input.office,
          intern: input.intern,
          extern: input.extern,
          roles: input.roles,
        },
      });
    },
  })
  .mutation("deleteUser", {
    input: z.object({
      id: z.number(),
    }),

    async resolve({ input, ctx }) {
      return await ctx.prisma.user.delete({
        where: {
          id: input.id,
        },
      });
    },
  });

export type AppRouter = typeof appRouter;
