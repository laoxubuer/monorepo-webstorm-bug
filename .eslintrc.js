// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/MONOREPO.md
module.exports = {
  root: true,
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './packages/*/tsconfig.json', './apps/*/tsconfig.json'],
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  /**
   * 自定义lint规则
   */
  rules: {},
  /**
   * 针对特定目录或项目覆盖规则
   * @example [{files: ['packages/utils/**'], rules: {'no-restricted-globals': 'off'}}]
   */
  overrides: [],
};
