module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': 0, // 允许尾随逗号
    semi: 0, // 分号可选
    quotes: ['error', 'single'], // 强制使用单引号
    'space-before-function-paren': ['error', 'never'], // 禁止函数名和括号之间的空格
  }
}
