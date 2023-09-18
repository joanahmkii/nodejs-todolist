import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["workout", "eat lunch", "sleep"];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    listTitle: "Todo List✨",
    newListItems: items,
  });
});

app.post("/", (req, res) => {
  try {
    const item = req.body.newItem;
    items.push(item);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
