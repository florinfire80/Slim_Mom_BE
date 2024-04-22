const fs = require("fs");
const swaggerJSDoc = require("swagger-jsdoc");
const options = {
  definition: {
    openapi: "3.0.0", // Specificația OpenAPI
    info: {
      title: "Slim_Mom", // Titlul aplicației
      version: "0.1.0", // Versiunea
      description: "API documentation for Slim_Mom application",
      contact: {
        email: "florinfire80@yahoo.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000/api-docs",
      },
    ],
  },
  apis: ["../routes/api/*.js"], // calea către fișierele de rute
};

const swaggerSpec = swaggerJSDoc(options);

// Scrie specificația într-un fișier JSON
fs.writeFile(
  "./swagger-output.json",
  JSON.stringify(swaggerSpec, null, 2),
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Successfully generated swagger-output.json");
  }
);
