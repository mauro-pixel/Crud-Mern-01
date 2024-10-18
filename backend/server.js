import express from "express";

const app = express();

app.listen(8000, () => {
  console.log(`Servidor iniciado en http://localhost:8000`);
});