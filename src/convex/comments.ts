import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("comments").order("desc").take(50);
  },
});

export const create = mutation({
  args: {
    authorName: v.string(),
    authorEmail: v.optional(v.string()),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("comments", {
      authorName: args.authorName,
      authorEmail: args.authorEmail,
      content: args.content,
    });
  },
});

export const remove = mutation({
  args: { id: v.id("comments") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
