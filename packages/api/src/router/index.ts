import * as trpc from "@trpc/server";

import type { Context } from "../context";

import { userRouter } from "./user";
import { projectRouter } from "./project";
import { timetableRouter } from "./timetable";

export const appRouter = trpc
  .router<Context>()
  .merge(userRouter)
  .merge(projectRouter)
  .merge(timetableRouter);
export type AppRouter = typeof appRouter;
