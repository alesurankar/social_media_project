const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const path = require("path");

const config = getDefaultConfig(__dirname);

config.watchFolders = [
  path.resolve(__dirname, "../../packages"),
];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(__dirname, "../../node_modules"),
];
config.resolver.sourceExts.push("ts", "tsx");
 
module.exports = withNativeWind(config, { input: './app/global.css' })