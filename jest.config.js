module.exports = {
    "modulePaths": [ 
        "src", 
        "test" 
    ],
    "moduleNameMapper": {
        "^.+\\.(css|less|scss)$": "babel-jest"
    },
    "collectCoverageFrom": [
        "src/**/*.{js,jsx}",
        "!**/node_modules/**"
    ],
    "coverageDirectory": "test/__coverage__",
    "coverageThreshold": {
        "global": {
            "branches": 100,
            "functions": 100,
            "lines": 100,
            "statements": 100
        }
    },
    "coverageReporters": [ 
        "json", 
        "lcov", 
        "text", 
        "text-summary" 
    ]
}