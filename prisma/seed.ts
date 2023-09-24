import prisma from "../lib/db";
import employees from "./employees.json";
async function main() {
  console.log("Running seeder");
  // await prisma.employee.createMany({
  //   data: employees,
  // });
}

main()
  .catch((err: Error) =>
    console.log(
      "An error has occured while migrating database: >> ",
      err.message
    )
  )
  .finally(() => {
    prisma.$disconnect();
  });
