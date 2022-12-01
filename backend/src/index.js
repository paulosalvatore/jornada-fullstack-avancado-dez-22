// Imports
const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./db/database.helper");

// Imports dos Routers
const itemRouter = require("./item/item.router");

// Porta do servidor
const port = process.env.PORT || 3000;

async function main() {
  await connectToDatabase();

  // Cria o servidor `express`
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(express.json());

  // Rota principal
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // Inicialização dos `Routers`
  app.use("/item", itemRouter);
  // Exercício: criar o Router de Category, com os endpoints ReadAll e Create
  // Category -> terá apenas name

  // Inicia o servidor
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

main().catch((err) => console.error("Um erro inesperado ocorreu.\n", err));
