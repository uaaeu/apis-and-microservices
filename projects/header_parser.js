//Request Header Parser
app.get("/api/whoami", (req, res) => {
  const ip = req.headers["x-forwarded-for"].split(",")[0];
  const lang = req.headers["accept-language"];
  const soft = req.headers["user-agent"];
  res.json({ ipaddress: ip, language: lang, software: soft });
});
