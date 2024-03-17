
const config = {
  clearMocks: true,
  coverageProvider: "v8",
  testMatch: [
    "**/unit_test/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};

export default config;
