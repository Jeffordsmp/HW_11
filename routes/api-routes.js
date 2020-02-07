var fs = require("fs");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
      }
      else {
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  });

  app.post("/api/notes", function(req, res) {
   if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.delete("/api/notes/:id", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};