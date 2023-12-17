module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "off", // You can customize other rules based on your needs
        "max-params": ["error", 3], // Maximum number of parameters for a function
        "max-lines": ["error", {
            "max": 15,
            "skipBlankLines": true,
            "skipComments": true
        }], // Maximum number of lines for a function
        "max-lines-per-function": ["error", {
            "max": 15,
            "skipBlankLines": true,
            "skipComments": true
        }], // Maximum number of lines for the entire file
    }
};
