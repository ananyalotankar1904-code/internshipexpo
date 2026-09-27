const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const students = await prisma.student.findMany({ include: { applications: true } });
  
  const noApps = students.filter(s => s.status === 'SUBMITTED' && s.applications.length === 0);
  console.log("NO APPS:");
  console.log(noApps.map(s => s.id + ' | ' + s.email).join('\n'));

  const withApps = students.filter(s => s.status === 'SUBMITTED' && s.applications.length > 0);
  console.log("WITH APPS:");
  console.log(withApps.map(s => s.id + ' | ' + s.email).join('\n'));
}

main().finally(() => prisma.$disconnect());
