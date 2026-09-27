const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Fetching the most recently created student...");
  
  const mostRecentStudent = await prisma.student.findFirst({
    orderBy: { createdAt: 'desc' }
  });

  if (!mostRecentStudent) {
    console.log("No students found in the database.");
    return;
  }

  console.log("\n--- STUDENT DETAILS ---");
  console.log("student.id:", mostRecentStudent.id);
  console.log("student.email:", mostRecentStudent.email);
  console.log("student.fullName:", mostRecentStudent.fullName);
  console.log("student.status:", mostRecentStudent.status);
  console.log("student.lastStepCompleted:", mostRecentStudent.lastStepCompleted);
  console.log("student.createdAt:", mostRecentStudent.createdAt);
  console.log("student.updatedAt:", mostRecentStudent.updatedAt);

  console.log("\nFetching student's applications with relations...");
  const studentWithApps = await prisma.student.findUnique({
    where: { id: mostRecentStudent.id },
    include: {
      applications: {
        include: {
          position: {
            include: {
              company: true
            }
          }
        }
      }
    }
  });

  if (!studentWithApps) {
    console.log("Student not found during relational fetch.");
    return;
  }

  const applications = studentWithApps.applications;
  console.log("\nApplication count =", applications.length);

  applications.forEach((app, index) => {
    console.log(`\n--- APPLICATION ${index + 1} ---`);
    console.log("application.id:", app.id);
    console.log("application.studentId:", app.studentId);
    console.log("application.positionId:", app.positionId);
    console.log("application.priority:", app.priority);
    console.log("application.taskLink:", app.taskLink);
    console.log("application.appliedAt:", app.appliedAt);
    console.log("position.title:", app.position?.title);
    console.log("position.company.id:", app.position?.company?.id);
    console.log("position.company.name:", app.position?.company?.name);
  });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
