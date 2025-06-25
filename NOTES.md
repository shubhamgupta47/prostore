## Steps to Run Prisma in This Project

1. Install Prisma & Prisma Client:
   Ensure Prisma CLI is installed in your project. Run the following command:

   ```
   npm install prisma --save-dev
   ```

   ```
   npm install @prisma/client --save-dev
   ```

2. Initialize Prisma:
   Initialize Prisma in your project by running:

   ```
   npx prisma init
   ```

   This will create a `prisma` directory with a `schema.prisma` file.

3. Configure Database:
   Update the `datasource` block in the `schema.prisma` file to match your database connection settings.

4. Define Models:
   Add your data models in the `schema.prisma` file. Each model represents a table in your database.

5. Generate Prisma Client:
   Run the following command to generate the Prisma Client:

   ```
   npx prisma generate
   ```

   This will create a client that you can use to interact with your database. No need to run it multiple times.

6. Run Migrations:
   To apply your schema changes to the database, run:

   ```
   npx prisma migrate dev --name <migration_name>
   ```

   Replace `<migration_name>` with a descriptive name for your migration.

7. Use Prisma Client:
   Import and use the Prisma Client in your application to perform database operations:
   In this project we have seed.ts file where we are interacting with Prisma Client.

   ```javascript
   const { PrismaClient } = require('@prisma/client');
   const prisma = new PrismaClient();
   ```

   ```
    npx tsx ./db/seed
   ```

8. Check Documentation:
   Refer to the official Prisma documentation for advanced usage and troubleshooting: https://www.prisma.io/docs
   /
