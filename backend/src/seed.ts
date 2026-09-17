import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const c1 = await prisma.company.create({
    data: {
      name: 'Google Cloud India',
      description: 'Global search and cloud computing',
      logoUrl: 'https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png',
      positions: {
        create: [
          {
            title: 'Cloud Solutions & SRE Intern',
            domain: 'Cloud & DevOps',
            eligibleYears: '3,4',
            isPaid: true,
            duration: '3 Months'
          }
        ]
      }
    }
  });

  const c2 = await prisma.company.create({
    data: {
      name: 'Morgan Stanley',
      description: 'Investment Banking and Financial Services',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Morgan_Stanley_Logo_1.png',
      positions: {
        create: [
          {
            title: 'Quantitative Tech & DevOps Intern',
            domain: 'Fintech & High-Freq',
            eligibleYears: '2,3,4',
            isPaid: true,
            duration: '6 Months'
          }
        ]
      }
    }
  });
  
  console.log('Seeded database with companies', c1.name, c2.name);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
