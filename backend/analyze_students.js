const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const students = await prisma.student.findMany({
    where: { status: 'SUBMITTED' },
    include: {
      applications: {
        include: {
          position: {
            include: { company: true }
          }
        }
      }
    },
    orderBy: [
      { createdAt: 'asc' }
    ]
  });

  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;
  let threeCount = 0;

  console.log('--- ALL SUBMITTED STUDENTS ---');
  students.forEach(s => {
    let appCount = s.applications.length;
    if (appCount === 0) zeroCount++;
    if (appCount === 1) oneCount++;
    if (appCount === 2) twoCount++;
    if (appCount === 3) threeCount++;
    
    console.log(`\nID: ${s.id}`);
    console.log(`Email: ${s.email}`);
    console.log(`Name: ${s.fullName}`);
    console.log(`Status: ${s.status}, Step: ${s.lastStepCompleted}`);
    console.log(`CreatedAt: ${s.createdAt}`);
    console.log(`UpdatedAt: ${s.updatedAt}`);
    console.log(`Application Count: ${appCount}`);
    
    s.applications.forEach((a, i) => {
      console.log(`  App ${i+1}: ID=${a.id}, PositionID=${a.positionId}, Title="${a.position?.title}", Company="${a.position?.company?.name}", AppliedAt=${a.appliedAt}`);
    });
  });

  console.log('\n--- TOTALS ---');
  console.log(`Total SUBMITTED: ${students.length}`);
  console.log(`SUBMITTED + 0 applications: ${zeroCount}`);
  console.log(`SUBMITTED + 1 application: ${oneCount}`);
  console.log(`SUBMITTED + 2 applications: ${twoCount}`);
  console.log(`SUBMITTED + 3 applications: ${threeCount}`);
}

main().finally(() => prisma.$disconnect());
