const express = require("express");
const router = express.Router();
const { getAllData } = require("../controllers/data");

// Definir a rota para buscar dados do MongoDB
router.get("/results", async (req, res) => {
    try {
        const jsonData = await getAllData();
        const result = jsonData.map(item => ({
            resumo: item.resumo,
            url: item.url
        }));
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Erro ao obter dados" });
    }
});

module.exports = router;
