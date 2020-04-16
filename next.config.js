const withFonts = require("next-fonts");
const path = require("path");

module.exports = withFonts({
  target: "serverless",
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
});
