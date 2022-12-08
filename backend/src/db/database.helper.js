const mongoose = require("mongoose");

// const databaseUrl =
//   "mongodb+srv://admin:V90K7ehx2krw7OlM@cluster0.gbnr4oi.mongodb.net/jornada-fullstack-avancado";
const databaseUrl = "mongodb://127.0.0.1:27017/jornada-fullstack-avancado";

const connectToDatabase = () => {
  return mongoose
    .connect(databaseUrl)
    .then(() => console.log("Banco de dados conectado com sucesso!"))
    .catch((error) =>
      console.log("Erro na conexão com o banco de dados.\n", error)
    );
};

const isObjectIdValid = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

module.exports = {
  connectToDatabase,
  isObjectIdValid,
};
