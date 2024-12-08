import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const eventsRouter = createTRPCRouter({
  getEvents: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.events.findMany({
      columns: {
        id: true,
        name: true,
        location: true,
        date: true,
      },
      where: (events, { gte }) => gte(events.date, new Date()),
      orderBy: (meetings, { asc }) => asc(meetings.date),
      limit: 4,
    });
  }),

  getEvent: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.query.events.findFirst({
        where: (event, { eq }) => eq(event.id, input.id),
      });
    }),
});