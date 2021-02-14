module.exports = {
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testMatch: [
        "**/*.(test|spec).(ts|tsx)"
    ],
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/.next/',
        '<rootDir>/node_modules/'
    ],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.jest.json"
        }
    }
};
