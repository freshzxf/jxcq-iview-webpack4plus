// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here 0:close, 1:warning, 2: error
  rules: {
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 大括号内是否允许空格的校验
    'object-curly-spacing': 0,
    // 一行结束后不要有空格的校验
    'no-trailing-spaces': 0,
    // 函数定义时括号前面要不要有空格的校验
    "space-before-function-paren": [0, "always"],
    // 缩进风格
    "indent": [0, 2],
    // 文件以单一的换行符结束new line at the end of line的校验
    "eol-last": 0,
    //
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
  }
}
