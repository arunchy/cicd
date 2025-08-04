// backend/index.js

const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());
// hello world

// Basic API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the Express API!" });
});

app.get("/",(req,res)=>{
  console.log(req.body);
  res.json({message:"Get request resolve from backend.."})
})

// Port must match Nginx proxy_pass
const PORT = 5000;

app.listen(PORT,'0.0.0.0', () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
