
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const PORT = process.env.PORT || 8000;

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SECRET_KEY) {
  throw new Error("Missing Supabase credentials in Backend/.env");
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "bolts-fixitall-api" });
});

app.post("/api/visitors/visit", async (req, res) => {
  try {
    const { data, error } = await supabase.rpc(
      "increment_bolts_visits"
    );

    if (error) throw error;

    res.json({ totalVisits: Number(data) });
  } catch (error) {
    console.error("Supabase error:", error.message);
    res.status(500).json({ error: "Visitor counter unavailable" });
  }
});

app.listen(PORT, () => {
  console.log(`Bolt's Fix-It-All API running on port ${PORT}`);
});

