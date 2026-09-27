const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const students = await prisma.student.findMany({ include: { applications: true } });
  console.log('Total students:', students.length);
  const submitted = students.filter(s => s.status === 'SUBMITTED');
  console.log('Submitted:', submitted.length);
  const submittedNoApps = submitted.filter(s => s.applications.length === 0);
  console.log('Submitted with 0 applications:', submittedNoApps.length);
}

main().finally(() => prisma.$disconnect());
