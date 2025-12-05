//OpenAPI documentation
//1.Download swagger for express and 
npm install swagger-ui-express swagger-jsdoc
npm install --save-dev @types/swagger-ui-express @types/swagger-jsdoc

//2.add to index.ts , have port above the code
//http://localhost:3000/api-docs is where we will have the doc
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Dev platforms API",
      version: "1.0.0",
      description: "A simple API for managing users and posts",
    },
    servers: [{ url: `http://localhost:${PORT}` }],
  },
  apis: ["./src/routes/*.ts"], //Which files to scan, all ts
};

const swaggerSpec = swaggerJSDoc(swaggerOptions); //combines configs and route comment to generate API doc
//Have const app = express(); in between
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); //creates endpoint that serves as Swagger ui interface

//3.describe each endpoint (Actually how it looks like)
//USE AI

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/", async (req, res) => {
  // code
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User details
 *       400:
 *         description: Invalid user ID
 *       404:
 *         description: User not found
 */
router.get("/:id", validateUserId, async (req, res) => {
  // code
});