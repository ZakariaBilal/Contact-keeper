const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({
    msg: "welcome to the contactKeeper API..."
  })
);
const PORT = process.env.port || 5000;

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
