const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect database
connectDB();

//Init middlewate
app.use(
  express.json({
    extended: false
  })
);

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
