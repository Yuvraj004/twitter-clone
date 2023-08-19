// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();
// async function main() {
//   const currentUserId = "cllgvukj00000v2msle4e0aft";
//   const allUsers = await prisma.tweet.findMany({
//     select: {
//       id: true,
//       content: true,
//       createdAt: true,
//       _count: { select: { likes: true } },
//       likes:
//         currentUserId == null ? false : { where: { userId: currentUserId } },
//       user: {
//         select: { name: true, id: true, image: true },
//       },
//     },
//   });
//   console.log(allUsers);
//   return allUsers;
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
