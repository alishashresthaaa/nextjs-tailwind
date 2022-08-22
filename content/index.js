const express = require("express");
const path = require("path");
const serveIndex = require("serve-index");
// Developers
const developers = require("./developers/developers.json");
const expertise = require("./developers/expertise.json");
const reasons = require("./developers/reasons.json");
const strengths = require("./developers/strengths.json");

const services = require("./services/services.json");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(
  "/assets",
  express.static("public/assets"),
  serveIndex("public/assets", { icons: true })
);

app.get("/", (req, res) => {
  return res.send("<h1>Welcome to the content server</h1>");
});

// Developers
app.get("/developers", (req, res) => {
  return res.json(developers);
});
app.get("/developers/:id", (req, res) => {
  const id = req.params.id;
  return res.json(developers.find((res) => res.id === parseInt(id)));
});
app.get("/expertise", (req, res) => {
  return res.json(expertise);
});
app.get("/reasons", (req, res) => {
  return res.json(reasons);
});
app.get("/strengths", (req, res) => {
  return res.json(strengths);
});

app.get("/services", (req, res) => {
  return res.json(services);
});

app.get("/services/:id", (req, res) => {
  const id = req.params.id;
  return res.json(services.list.find((res) => res.id === parseInt(id)));
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
