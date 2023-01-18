import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "@monorepo/api";

const trpc = createReactQueryHooks<AppRouter>();

export default trpc;
