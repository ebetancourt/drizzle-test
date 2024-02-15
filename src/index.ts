import { DBConnection, getConnection, posts, users } from './db';
import { eq } from 'drizzle-orm';
export async function testSql(db: DBConnection) {
    const userWithPosts = await db
        .select({
            userId: users.id,
            userName: users.name,
            userEmail: users.email,
            postId: posts.id,
            postTitle: posts.title,
            postBody: posts.body,
        })
        .from(users)
        .innerJoin(posts, eq(posts.authorId, users.id))
        .where(eq(users.id, 11));

    console.table(userWithPosts);
}

export async function testOrm(db: DBConnection) {
    const userWithPosts = await db.query.users.findFirst({
        where: eq(users.id, 11),
        with: {
            posts: true,
        },
    });
    console.log(userWithPosts);
}

export async function main() {
    const db = await getConnection();

    console.log("\n\n");
    console.log('Query with SQL...');
    console.log('-------------------');
    await testSql(db);

    console.log("\n\n");
    console.log('Query with ORM...');
    console.log('-------------------');
    await testOrm(db);
    process.exit(0);
}

main();
