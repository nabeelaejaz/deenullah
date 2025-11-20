import { db, Comment, Author } from 'astro:db';

export default async function() {

  await db.insert(Comment).values([
    { body: 'Hope you like Astro DB!' },
    { body: 'Enjoy!!!' },
    { body: 'Enjoy2' },
  ]);
}