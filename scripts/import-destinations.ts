import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
    const filePath = path.join(process.cwd(), 'Destinations.json'); const data = await fs.readFile(filePath, 'utf-8');
    const destinations = JSON.parse(data);

    for (const dest of destinations) {
        await prisma.destination.upsert({
            where: { id: dest.slug }, // id is slug
            update: {
                name: dest.country,     // name is country
                code: dest.code,        // code is code
            },
            create: {
                id: dest.slug,
                name: dest.country,
                code: dest.code,
            },
        });
        console.log(`Upserted: ${dest.country}`);
    }
}

main()
    .then(() => {
        console.log('Import complete!');
        return prisma.$disconnect();
    })
    .catch((e) => {
        console.error(e);
        return prisma.$disconnect();
    });