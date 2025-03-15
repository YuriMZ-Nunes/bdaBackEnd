const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const apiRoutes = require("./routes/api");

const app = express();
const port = 5000;

// Configuração do CORS
app.use(cors({ origin: "*" }));

// Middleware para processar JSON
app.use(express.json());

// Importa e usa as rotas da API
app.use("/api", apiRoutes);

// Iniciar o servidor após conectar ao banco
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Backend rodando na porta ${port}`);
    });
});
