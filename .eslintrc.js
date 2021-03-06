module.exports = {
    "parser-options": {
        "ecmaVersion": 6,
        "sourceType": "script"
    },
    "env": {
        "node": true,
        "es6": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-cond-assign": ["error"],
        "no-console": ["error"],
        "no-constant-condition": ["error"],
        "no-control-regex": ["error"],
        "no-debugger": ["error"],
        "no-dupe-args": ["error"],
        "no-dupe-keys": ["error"],
        "no-duplicate-case": ["error"],
        "no-empty-character-class": ["error"],
        "no-empty": ["error", {"allowEmptyCatch": true}],
        "no-ex-assign": ["error"],
        "no-extra-boolean-cast": ["error"],
        "no-extra-parens": ["off"],
        "no-extra-semi": ["error"],
        "no-func-assign": ["error"],
        "no-inner-declarations": ["error"],
        "no-invalid-regexp": ["error"],
        "no-irregular-whitespace": ["error", {"skipComments": true, "skipRegExps": true, "skipTemplates": true}],
        "no-obj-calls": ["error"],
        "no-prototype-builtins": ["off"],
        "no-regex-spaces": ["error"],
        "no-sparse-arrays": ["error"],
        "no-template-curly-in-string": ["warn"],
        "no-unexpected-multiline": ["error"],
        "no-unreachable": ["error"],
        "no-unsafe-finally": ["error"],
        "no-unsafe-negation": ["off"],
        "use-isnan": ["error"],
        "valid-jsdoc": ["error", {"requireReturn": false, "requireReturnType": true, "requireParamDescription": false, "requireReturnDescription": false}],
        "valid-typeof": ["error"],

        "accessor-pairs": ["error"],
        "array-callback-return": ["error"],
        "block-scoped-var": ["error"],
        "class-methods-use-this": ["warn"],
        "complexity": ["off"],
        "consistent-return": ["off"],
        "curly": ["error", "multi-line", "consistent"],
        "default-case": ["warn"],
        "dot-location": ["error", "property"],
        "dot-notation": ["error"],
        "eqeqeq": ["error", "always"],
        "guard-for-in": ["error"],
        "no-alert": ["error"],
        "no-caller": ["warn"],
        "no-case-declarations": ["off"],
        "no-div-regex": ["error"],
        "no-else-return": ["error"],
        "no-empty-function": ["warn"],
        "no-empty-pattern": ["error"],
        "no-eq-null": ["error"],
        "no-eval": ["error"],
        "no-extend-native": ["error"],
        "no-extra-bind": ["warn"],
        "no-extra-label": ["off"],
        "no-fallthrough": ["error"],
        "no-floating-decimal": ["error"],
        "no-global-assign": ["error"],
        "no-implicit-coercion": ["error"],
        "no-implicit-globals": ["error"],
        "no-implied-eval": ["error"],
        "no-invalid-this": ["error"],
        "no-iterator": ["error"],
        "no-labels": ["error"],
        "no-lone-blocks": ["error"],
        "no-loop-func": ["warn"],
        "no-magic-numbers": ["off"], // Maybe we should re-enable this ??
        "no-multi-spaces": ["error"],
        "no-multi-str": ["off"],
        "no-new-func": ["error"],
        "no-new-wrappers": ["error"],
        "no-new": ["warn"],
        "no-octal-escape": ["off"],
        "no-octal": ["error"],
        "no-param-reassign": ["warn"],
        "no-proto": ["error"],
        "no-redeclare": ["error"],
        "no-return-assign": ["error", "except-parens"],
        "no-script-url": ["error"],
        "no-self-assign": ["error"],
        "no-self-compare": ["error"],
        "no-sequences": ["error"],
        "no-throw-literal": ["error"],
        "no-unmodified-loop-condition": ["warn"],
        "no-unused-expressions": ["error", {"allowShortCircuit": false, "allowTernary": false}],
        "no-unused-labels": ["error"],
        "no-useless-call": ["error"],
        "no-useless-concat": ["error"],
        "no-useless-escape": ["error"],
        "no-void": ["error"],
        "no-warning-comments": ["warn"],
        "no-with": ["error"],
        "radix": ["error"],
        "vars-on-top": ["off"],
        "wrap-iife": ["error"],
        "yoda": ["error", "never"],

        "strict": ["error", "global"],

        "init-declarations": ["off"],
        "no-catch-shadow": ["off"],
        "no-delete-var": ["off"],
        "no-label-var": ["error"],
        "no-restricted-globals": ["off"],
        "no-shadow-restricted-names": ["error"],
        "no-shadow": ["error", {"builtinGlobals": true, "hoist": "never"}],
        "no-undef-init": ["error"],
        "no-undef": ["error"],
        "no-undefined": ["error"],
        "no-unused-vars": ["error", {"vars": "all", "args": "none"}],
        "no-use-before-define": ["off"],

        "callback-return": ["error"],
        "global-require": ["error"],
        "handle-callback-err": ["warn"],
        "no-mixed-requires": ["error"],
        "no-new-require": ["error"],
        "no-path-concat": ["error"],
        "no-process-env": ["error"],
        "no-process-exit": ["warn"],
        "no-restricted-modules": ["off"],
        "no-sync": ["warn"],

        "array-bracket-spacing": ["off"],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
        "camelcase": ["error", {"properties": "always"}],
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", {"before": false, "after": true}],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "consistent-this": ["error"],
        "eol-last": ["error", "unix"],
        "func-call-spacing": ["error", "never"],
        "func-names": ["off"],
        "func-style": ["error", "expression", {"allowArrowFunctions": true}],
        "id-blacklist": ["off"],
        "id-length": ["off"],
        "id-match": ["off"],
        "indent": ["error", 4],
        "jsx-quotes": ["error", "prefer-single"],
        "key-spacing": ["error", {"beforeColon": false, "afterColon": true, "mode": "minimum"}],
        "keyword-spacing": ["error", {"before": true, "after": true}],
        "linebreak-style": ["error", "unix"],
        "lines-around-comment": ["off"],
        "max-depth": ["error", 4],
        "max-len": ["off"],
        "max-lines": ["off"],
        "max-nested-callbacks": ["error", {"max": 10}],
        "max-params": ["off"],
        "max-statements-per-line": ["off"],
        "max-statements": ["off"],
        "multiline-ternary": ["error", "never"],
        "new-cap": ["error", {"newIsCap": true, "capIsNew": false, "properties": true}],
        "new-parens": ["error"],
        "newline-after-var": ["off"],
        "newline-before-return": ["off"],
        "newline-per-chained-call": ["off"],
        "no-array-constructor": ["off"],
        "no-bitwise": ["off"],
        "no-continue": ["error"],
        "no-inline-comments": ["off"],
        "no-lonely-if": ["off"],
        "no-mixed-operators": ["error"],
        "no-mixed-spaces-and-tabs": ["error"],
        "no-multiple-empty-lines": ["error", {"max": 3, "maxEOF": 1}],
        "no-negated-condition": ["off"],
        "no-nested-ternary": ["error"],
        "no-new-object": ["off"],
        "no-plusplus": ["off"],
        "no-restricted-syntax": ["off"],
        "no-tabs": ["error"],
        "no-ternary": ["off"],
        "no-trailing-spaces": ["error"],
        "no-underscore-dangle": ["off"],
        "no-unneeded-ternary": ["error"],
        "no-whitespace-before-property": ["error"],
        "object-curly-newline": ["off"],
        "object-curly-spacing": ["error", "always", {"objectsInObjects": false, "arraysInObjects": false}],
        "object-property-newline": ["off"],
        "one-var-declaration-per-line": ["error", "always"],
        "one-var": ["error", "never"],
        "operator-assignment": ["off"],
        "operator-linebreak": ["error", "after"],
        "padded-blocks": ["off"],
        "quote-props": ["error", "as-needed"],
        "quotes": ["error", "single"],
        "require-jsdoc": ["error"],
        "semi-spacing": ["error", {"before": false, "after": true}],
        "semi": ["error", "never"],
        "sort-keys": ["off"],
        "sort-vars": ["off"],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "space-in-parens": ["off"],
        "space-infix-ops": ["off"],
        "space-unary-ops": ["off"],
        "spaced-comment": ["off"],
        "unicode-bom": ["error", "never"],
        "wrap-regex": ["off"],

        "arrow-body-style": ["error", "always"],
        "arrow-parens": ["error", "always"],
        "arrow-spacing": ["error", {"before": true, "after": true}],
        "constructor-super": ["error"],
        "generator-star-spacing": ["error", {"before": true, "after": false}],
        "no-class-assign": ["error"],
        "no-confusing-arrow": ["error"],
        "no-const-assign": ["error"],
        "no-dupe-class-members": ["error"],
        "no-duplicate-imports": ["error"],
        "no-new-symbol": ["off"],
        "no-restricted-imports": ["off"],
        "no-this-before-super": ["error"],
        "no-useless-computed-key": ["error"],
        "no-useless-constructor": ["error"],
        "no-useless-rename": ["error"],
        "no-var": ["error"],
        "object-shorthand": ["off"],
        "prefer-arrow-callback": ["error"],
        "prefer-const": ["error"],
        "prefer-reflect": ["off"],
        "prefer-rest-params": ["error"],
        "prefer-spread": ["error"],
        "prefer-template": ["error"],
        "require-yield": ["error"],
        "rest-spread-spacing": ["off"],
        "sort-imports": ["off"],
        "symbol-description": ["off"],
        "template-curly-spacing": ["error", "never"],
        "yield-star-spacing": ["error", "after"]
    }
};
