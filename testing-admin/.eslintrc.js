module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    quotes: [1, 'single'], //引号类型 `` "" ''
    semi: [2, 'never'], // 语句不要分号结尾
  },
}
