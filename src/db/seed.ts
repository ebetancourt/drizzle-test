import { getConnection } from "./index";
import { users, NewUser, posts, NewPost } from "./models";
import { faker } from "@faker-js/faker";

const main = async () => {
    const db = await getConnection();
    const data: NewUser[] = [];

    for (let i = 0; i < 20; i++) {
        data.push({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            role: i === 0 ? "admin" : "customer",
        });
    }

    console.log("Seed start");
    console.log("Seeding users...");
    const newUsers = await db.insert(users).values(data).returning({ insertedId: users.id });
    console.log("Done seeding users.");
    console.log("Seeding posts...");
    const postData: NewPost[] = [];
    newUsers.forEach((user) => {
        const postCount = faker.number.int({ min: 1, max: 5 });
        for (let i = 0; i < postCount; i++) {
            postData.push({
                title: faker.lorem.sentence(),
                body: faker.lorem.paragraph(),
                authorId: user.insertedId,
            });
        }
    });
    const newPosts = await db.insert(posts).values(postData).returning({ insertedId: posts.id });
    console.log(`Created ${newPosts.length} posts.`);
    console.log("Done seeding posts.");

};

main();
