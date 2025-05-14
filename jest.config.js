/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    testMatch: ["**/*.test.ts", "**/*.test.tsx"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
