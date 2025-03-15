const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://yurimznunes:7971@testecluster.okpz6.mongodb.net/?retryWrites=true&w=majority&appName=testeCluster";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let database;
let dados;

// Função para conectar ao MongoDB
async function connectDB() {
    try {
        await client.connect();
        database = client.db('primeiro');
        dados = database.collection('dados');
        console.log("✅ Conectado ao MongoDB!");
    } catch (error) {
        console.error("❌ Erro ao conectar ao MongoDB:", error);
    }
}

module.exports = { connectDB, database: () => database, dados: () => dados };
