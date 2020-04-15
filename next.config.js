const withFonts = require("next-fonts");
const path = require("path");

module.exports = {
  target: "serverless",
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
};

module.exports = withFonts({
  webpack(config, options) {
    return config;
  },
});
