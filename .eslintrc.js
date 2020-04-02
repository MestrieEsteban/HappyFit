module.exports = {
    parser: 'babel-eslint',
    extends: ["eslint:recommended", "plugin:react/recommended"],
    plugins: ["react", "react-native", "prettier"],
    rules: {
        'prettier/prettier': ['error', require('./prettier.config')],
        "react/no-did-mount-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/jsx-uses-vars": 2,
        "no-undef": 2,
        "react/prop-types": 2,
        "react/jsx-no-bind": 2,
        "react/jsx-no-duplicate-props": 2,
    }
  }
  