module.exports = wallaby => {
  return {
    files: [
      {
        pattern: "node_modules/react/dist/react-with-addons.js",
        instrument: false,
      },
      {
        pattern: "node_modules/immutable/dist/immutable.js",
        instrument: false,
      },
      "src/**/*.js",
    ],

    tests: [ "test/**/*.test.js" ],

    delays: {
      run: 500,
    },

    compilers: {
      "**/*.js": wallaby.compilers.babel(),
    },

    setup: function (wallaby) {
      require("babel-polyfill");
    },

    testFramework: "ava",

    reportConsoleErrorAsError: true,

    env: {
      type: "node",
      params: {
        env: "NODE_PATH=./src",
      },
    },
  };
};
