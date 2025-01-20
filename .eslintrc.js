module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
      requireConfigFile: false, // Если у вас нет отдельного конфигурационного файла Babel
      ecmaVersion: 2020,
      sourceType: 'module',
  },
  env: {
      browser: true,
      es2021: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',   
  ],
  plugins: [
      'react',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off'
    }
};