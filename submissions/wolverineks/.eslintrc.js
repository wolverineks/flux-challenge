module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "jest": true,
      "node": true
    },
    "parser": "babel-eslint",
    "extends": [
      "eslint:recommended",
      "plugin:flowtype/recommended",
      "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "flowtype"
    ],
    "rules": {
      "react/jsx-no-duplicate-props": ["error", { "ignoreCase": true }],
      "react/jsx-indent-props": ["error", 'space'|2],
      "react/self-closing-comp": ["error", {"component": true}],
      "react/no-typos": "error",
      "react/no-array-index-key": "error",
      "react/jsx-curly-spacing": ["error", {
        "when": "never",
        "attributes": {"allowMultiline": false},
        "children": true
      }],
      "arrow-parens": ["error", "always"],
      "operator-linebreak": ["error", "before"],
      "arrow-body-style": ["error", "as-needed"],
      "block-spacing": ["error", "always"],
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "jsx-quotes": ["error", "prefer-single"],
      "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
      "no-plusplus": "error",
      "object-curly-spacing": ["error", "never", { "objectsInObjects": true }],
      "operator-assignment": ["error", "never"],
      "keyword-spacing": ["error", {
        "before": true,
        "after": true
      }],
      "arrow-spacing": ["error", {
        "before": true,
        "after": true
      }],
      "space-before-blocks": ["error", {
        "functions": "always",
        "keywords": "always",
        "classes": "always"
      }],
      "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
      }],
      "space-in-parens": ["error", "never"],
      "space-before-function-paren": 2,
      "no-duplicate-imports": 2,
      "array-callback-return": 2,
      "no-floating-decimal": 2,
      "no-var": 2,
      "no-trailing-spaces": 2,
      "no-console": 0,
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "never"]
    }
};
