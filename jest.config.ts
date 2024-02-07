export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  rootDir: "src",
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.ts",
    "^@app/(.*)$": "<rootDir>/$1",
  },

  testPathIgnorePatterns: ["<rootDir>/__tests__/__mocks__/"],
};
