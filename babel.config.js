module.exports = function babelConfig(api) {
  api.cache(true);
  const presets = ["@babel/preset-env"];
  const plugins = [
    "@babel/plugin-proposal-class-properties", // class属性的提案级特性
    "@babel/plugin-syntax-dynamic-import", // 动态import
    "@babel/plugin-transform-runtime",
  ];
  return {
    presets,
    plugins,
  };
};
