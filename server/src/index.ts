import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log("SkyBridge backend running on port " + PORT);
});
