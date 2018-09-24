module.exports = {
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "plugins": [
        "react",
    ],
    extends: [
        'eslint:recommended',
        "plugin:react/recommended",
    ]
};
