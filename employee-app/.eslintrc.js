module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	"indent": "off",
	"no-trailing-spaces": "off",
	"no-tabs": "off",
	"no-mixed-spaces-and-tabs": "off",
	"eol-last": "off",
	"semi": "off",
	"no-new": "off",
	"no-multiple-empty-lines": "off",
	"object-curly-spacing": "off",
	"key-spacing": "off"
  }
}
