const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const students = await prisma.student.findMany({ include: { applications: true } });
  
  const submitted = students.filter(s => s.status === 'SUBMITTED');
  
  const submittedNoApps = submitted.filter(s => s.applications.length === 0);
  const submittedWithApps = submitted.filter(s => s.applications.length > 0);
  
  console.log('Sample without apps:', submittedNoApps.slice(0,2).map(s => s.updatedAt));
  console.log('Sample with apps:', submittedWithApps.slice(0,2).map(s => s.updatedAt));
}

main().finally(() => prisma.$disconnect());
