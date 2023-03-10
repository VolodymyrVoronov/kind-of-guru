import * as trpc from "@trpc/server";
import { z } from "zod";

import type { Context } from "../context";

const User = z.object({
  firstName: z.string().min(2).max(25),
  familyName: z.string().min(2).max(25),
  information: z.string().max(250),
  joinedCompany: z.string(),
  home: z.boolean().default(true),
  office: z.boolean().default(false),
  intern: z.boolean().default(true),
  extern: z.boolean().default(false),
  roles: z.string(),
  level: z.string(),
});

const UserWithId = User.extend({
  id: z.number(),
});

export const userRouter = trpc
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
          level: input.level,
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
          level: input.level,
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
