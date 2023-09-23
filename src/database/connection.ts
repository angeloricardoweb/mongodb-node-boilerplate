const mongoose = require("mongoose");

// Função para conectar ao MongoDB
async function mongoConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com o MongoDB estabelecida com sucesso");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
}

module.exports = mongoConnection;
