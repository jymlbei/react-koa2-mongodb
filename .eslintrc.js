module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser": "babel-eslint", // 装饰器
    "plugins": [
        "react"
    ],
    "rules": {
        "no-func-assign": 2,
        "no-redeclare": 2,
        "no-unreachable": 2,
        "id-match": 2,
        "semi": [
            2,
            "always"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-unused-expressions": 0
    }
};