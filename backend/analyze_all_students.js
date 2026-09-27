const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const students = await prisma.student.findMany({
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

  const stats = {
    total: students.length,
    submittedWithApps: 0,
    submittedNoApps: 0,
    draft: 0,
    other: 0
  };

  const submittedWithAppsDetails = [];
  const submittedNoAppsDetails = [];
  const draftDetails = [];

  students.forEach(s => {
    const isSubmitted = s.status === 'SUBMITTED';
    const appCount = s.applications.length;
    
    if (isSubmitted && appCount > 0) {
      stats.submittedWithApps++;
      submittedWithAppsDetails.push(s);
    } else if (isSubmitted && appCount === 0) {
      stats.submittedNoApps++;
      submittedNoAppsDetails.push(s);
    } else if (s.status === 'DRAFT') {
      stats.draft++;
      draftDetails.push(s);
    } else {
      stats.other++;
    }
  });

  console.log('--- DATABASE STATE ---');
  console.log(`Total Students: ${stats.total}`);
  console.log(`SUBMITTED with apps: ${stats.submittedWithApps}`);
  console.log(`SUBMITTED without apps: ${stats.submittedNoApps}`);
  console.log(`DRAFT: ${stats.draft}`);
  console.log(`OTHER STATUS: ${stats.other}`);

  console.log('\n--- SUBMITTED WITH APPS ---');
  submittedWithAppsDetails.forEach(s => {
    console.log(`ID: ${s.id} | Email: ${s.email} | Apps: ${s.applications.length} | CreatedAt: ${s.createdAt} | UpdatedAt: ${s.updatedAt}`);
  });

  console.log('\n--- SUBMITTED WITHOUT APPS ---');
  submittedNoAppsDetails.forEach(s => {
    console.log(`ID: ${s.id} | Email: ${s.email} | Step: ${s.lastStepCompleted} | CreatedAt: ${s.createdAt} | UpdatedAt: ${s.updatedAt}`);
  });
}

main().finally(() => prisma.$disconnect());
