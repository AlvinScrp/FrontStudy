module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'standard'],
  globals: {
    process: true,
    require: true,
    NGJsBridge: true,
    wx: true,
    sa: true,
    OSS: true,
    module: true,
    WeixinJSBridge: true,
    define: true,
    mbUploadify: true,
  },
  rules: {
    camelcase: 'off',
    eqeqeq: 'off',
    'no-extend-native': 'off',
    'no-useless-escape': 'warn',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['error', 4],
    'vue/html-indent': ['error', 4],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/no-v-html': 'off',
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true,
      },
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'fetch',
          'asyncData',
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          'head',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'prettier/prettier': [
      // eslint校验不成功后，error或2则报错，warn或1则警告，off或0则无提示
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
