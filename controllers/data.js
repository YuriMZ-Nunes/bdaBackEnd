const { dados } = require("../config/db");

// Função para buscar todos os dados
async function getAllData() {
    try {
        if (!dados()) {
            throw new Error("Banco de dados não inicializado");
        }
        return await dados().find().toArray();
    } catch (err) {
        console.error("❌ Erro ao obter dados:", err);
        throw err;
    }
}

module.exports = { getAllData };
