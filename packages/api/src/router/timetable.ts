import * as trpc from "@trpc/server";
import { z } from "zod";

import type { Context } from "../context";

const Timetable = z.object({
  timetableDate: z.string(),
  users: z.string(),
});

const TimetableWithId = Timetable.extend({
  id: z.number(),
});

export const timetableRouter = trpc
  .router<Context>()
  .query("getTimetable", {
    input: z.object({
      timetableDate: z.string(),
    }),

    async resolve({ input, ctx }) {
      return await ctx.prisma.timetable.findFirst({
        where: {
          timetableDate: input.timetableDate,
        },
      });
    },
  })
  .mutation("createTimetable", {
    input: Timetable,
    async resolve({ input, ctx }) {
      return await ctx.prisma.timetable.create({
        data: {
          timetableDate: input.timetableDate,
          users: input.users,
        },
      });
    },
  })
  .mutation("updateTimetable", {
    input: TimetableWithId,
    async resolve({ input, ctx }) {
      return await ctx.prisma.timetable.update({
        where: {
          id: input.id,
        },
        data: {
          timetableDate: input.timetableDate,
          users: input.users,
        },
      });
    },
  });
