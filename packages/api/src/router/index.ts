import * as trpc from "@trpc/server";

import type { Context } from "../context";

import { userRouter } from "./user";
import { projectRouter } from "./project";

export const appRouter = trpc
  .router<Context>()
  .merge(userRouter)
  .merge(projectRouter);
export type AppRouter = typeof appRouter;
