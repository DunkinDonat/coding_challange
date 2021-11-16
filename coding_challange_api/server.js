// server.js
const express = require("express");
const app = express();

function camelize(str) {
  const result = str.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}


app.get('/helloworld', function(req, res) {
  const name = req.query.name;
  if (name) {
    res.send('Hello ' + camelize(name));
  } else {
      res.send('Hello Stranger');
  }
});

app.get("/versionz", (req, res) => {
  res.json({
    project_name: `coding_challange`,
    git_hash: `kubernetes node.js docker api`
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});