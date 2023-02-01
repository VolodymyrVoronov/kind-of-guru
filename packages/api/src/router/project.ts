import * as trpc from "@trpc/server";
import { z } from "zod";

import type { Context } from "../context";

const Project = z.object({
  projectName: z.string(),
  client: z.string(),
  information: z.string().max(250),
  priority: z.string(),
  packageType: z.string(),
  start: z.string(),
  end: z.string(),
});

const ProjectWithId = Project.extend({
  id: z.number(),
});

export const projectRouter = trpc
  .router<Context>()
  .query("getProjects", {
    async resolve({ ctx }) {
      return await ctx.prisma.project.findMany();
    },
  })
  .query("getProject", {
    input: z.object({
      id: z.number(),
    }),

    async resolve({ input, ctx }) {
      return await ctx.prisma.project.findUnique({
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation("createProject", {
    input: Project,
    async resolve({ input, ctx }) {
      return await ctx.prisma.project.create({
        data: {
          projectName: input.projectName,
          client: input.client,
          information: input.information,
          priority: input.priority,
          packageType: input.packageType,
          start: input.start,
          end: input.end,
        },
      });
    },
  })
  .mutation("updateProject", {
    input: ProjectWithId,
    async resolve({ input, ctx }) {
      return await ctx.prisma.project.update({
        where: {
          id: input.id,
        },
        data: {
          projectName: input.projectName,
          client: input.client,
          information: input.information,
          priority: input.priority,
          packageType: input.packageType,
          start: input.start,
          end: input.end,
        },
      });
    },
  })
  .mutation("deleteProject", {
    input: z.object({
      id: z.number(),
    }),

    async resolve({ input, ctx }) {
      return await ctx.prisma.project.delete({
        where: {
          id: input.id,
        },
      });
    },
  });
