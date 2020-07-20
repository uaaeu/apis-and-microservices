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


//Another solution
app.get("/api/timestamp/", (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});

app.get("/api/timestamp/:input", (req, res) => {
  let input = req.params.input;

  if (/\d{5,}/.test(input)) {
    let dateInt = parseInt(input);
    res.json({ unix: input, utc: new Date(input).toUTCString() });
  }

  let dateObj = new Date(input);

  if (dateObj.toString() === "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({ unix: dateObj.valueOf(), utc: dateObj.toUTCString() });
  }
});
