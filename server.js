const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); 

app.use(express.static(__dirname));

// Proxy for Shopgram API
app.use(
  "/api",
  proxy("www.mangodesign.ir", {
    https: true,
    proxyReqPathResolver: function (req) {
      console.log("Original URL:", req.url); // Add logging to debug
      const newPath = "/site/api/v1" + req.url.replace("/api", "");
      console.log("New Path:", newPath); // Add logging to debug
      return newPath;
    },
    proxyReqOptDecorator: function (proxyReqOpts) {
      proxyReqOpts.headers["Content-Type"] = "application/json";
      return proxyReqOpts;
    },
  })
);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
