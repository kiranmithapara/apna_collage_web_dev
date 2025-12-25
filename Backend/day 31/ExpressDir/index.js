const express = require("express"); // express framwork ne require kariyu

const app = express(); // app e ek object che ane tema express name nu function nakhyu

let port = 3000; //Browser jya connect thase

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//   // console.log(req);

//   console.log("Request received");
//   //   res.send("this is a basics response  ");
//   //   res.send({
//   //     name: "apple",
//   //     color: "red",
//   //   });// express object ne jeson ma convert kari de
//   let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li></ul>";
//   res.send(code);
// });

app.get("/", (req, res) => {
  res.send(" home page");
});
app.get("/home", (req, res) => {
  res.send(" home page");
});
app.get("/help", (req, res) => {
  res.send(" help page");
});

// app.get("/search", (req, res) => {
//   console.log(req.query);
//   res.send("no results");
// });

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    return res.send("nothing searched");
  }
  res.send(`Search result for query : ${q}`);
});
app.use((req, res) => {
  res.send("Page not found");
});

// app.get("/user/:id", (req, res) => {
//   console.log(req.params);
//   res.send("ok");
// });
app.get("/user/:id", (req, res) => {
  let { id } = req.params;
  res.send(`User id is : ${id}`);
});

// app.get() specific route के लिए होता है,
// app.use() सभी requests के लिए।
// Query parameters Express me req.query se access hote hain
// aur invalid routes ke liye app.use() se 404 handle kiya jata hai.
// Nodemon ek development tool hai jo file changes detect karke Node.js server ko automatically restart karta hai.
// Route params Express me dynamic URLs handle karne ke liye use hote hain aur unhe req.params se access kiya jata hai.
