import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const c1 = await prisma.company.create({
    data: {
      name: 'Google Cloud India',
      websiteUrl: 'https://cloud.google.com/',
      logoUrl: 'https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png',
      tags: ['Cloud Computing', 'Enterprise Tech', '100,000+ Employees', 'HQ: Mountain View'],
      highlights: ['Global Scale', 'AI & ML', 'Open Source'],
      positions: {
        create: [
          {
            title: 'Cloud Solutions & SRE Intern',
            domain: 'Cloud & DevOps',
            eligibleYears: '3,4',
            isPaid: true,
            stipend: '₹75,000 / mo',
            duration: '3 Months',
            description: 'Work alongside site reliability engineers on global infrastructure, reducing latency and deploying microservices on GCP.',
            jobDescriptionPdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
          }
        ]
      }
    }
  });

  const c2 = await prisma.company.create({
    data: {
      name: 'Morgan Stanley',
      websiteUrl: 'https://www.morganstanley.com/',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Morgan_Stanley_Logo_1.png',
      tags: ['Investment Banking', 'Financial Services', 'HQ: New York'],
      highlights: ['Fintech', 'Global Markets', 'Pre-Placement Offers'],
      positions: {
        create: [
          {
            title: 'Quantitative Tech & DevOps Intern',
            domain: 'Fintech & High-Freq',
            eligibleYears: '2,3,4',
            isPaid: true,
            stipend: '₹80,000 / mo',
            duration: '6 Months',
            description: 'Build algorithmic trading pipelines and scalable transaction processing systems handling high-frequency market data.',
            jobDescriptionPdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
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
