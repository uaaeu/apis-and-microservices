//Timestamp Microservice
let resObj = {};

app.get("/api/timestamp/:input", (req, res) => {
  let input = req.params.input;

  if (input.includes("-")) {
    resObj["unix"] = new Date(input).getTime();
    resObj["utc"] = new Date(input).toUTCString();
  } else {
    input = parseInt(input);

    resObj["unix"] = new Date(input).getTime();
    resObj["utc"] = new Date(input).toUTCString();
  }
  if (!resObj["unix"] || !resObj["utc"]) {
    res.json({ error: "Invalid Date" });
  }

  res.json(resObj);
});

app.get("/api/timestamp/", (req, res) => {
  resObj["unix"] = new Date().getTime();
  resObj["utc"] = new Date().toUTCString();
  res.json(resObj);
});
