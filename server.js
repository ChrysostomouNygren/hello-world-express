const express = require("express");
const PORT = process.env.PORT || 4000;
const GREETING = process.env.DUM_TEXT

const app = express();

app.get("/", (req, res) => {
  res.send(GREETING);
});

app.listen(PORT, () => {
  console.log(`haha yes, the server is running on port ${PORT}`);
});
