import { defineTable, column, defineDb } from 'astro:db';

const Comment = defineTable({
  columns: {
    body: column.text(),
  }
});

export default defineDb({
  tables: { Comment },
})