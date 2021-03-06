module.exports = {

    "parser": "babel-eslint",
    "env": {

        "node": true,
        "es6": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {

        "fetch": false
    },
    "parserOptions": {

        "ecmaFeatures": {

            "experimentalObjectRestSpread": true,
            "modules": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [

        "react",
        "react-native"
    ],
    "rules": {

        "comma-dangle": [

            "error",
            "always-multiline"
        ],
        "eqeqeq": 2,
        "indent": [

            "error",
            2
        ],
        "quotes": [

            "error",
            "single"
        ],
        "semi": [

            "error",
            "always"
        ],
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2
    }
};