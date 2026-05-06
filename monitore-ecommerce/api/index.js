// importar dotenv y el servidor
import express from "express";
import dotenv from "dotenv"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000
// Middleware para parear JSON
app.use(express.json());
// endpoint para saber si esta vivo el servidor
app.get("/health", (req, res)=>{
    res.send("ok");
});
// endpoint para recibir datos actuales
app.post("/snapshots", (req, res)=>{
    console.log('data recibida', req.body);
    res.json({
        status: "ok",
        message: "datos recibidos"
    })
})


// servidor
app.listen(PORT,()=>{
    console.log(`API corriendo en el puerto ${PORT}`)
})
