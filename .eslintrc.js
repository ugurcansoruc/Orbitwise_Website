require('eslint-config-molindo/setupPlugins');

module.exports = {
  root: true,
  extends: [
    'molindo/typescript',
    'molindo/react',
    'plugin:@next/next/recommended'
  ],
  overrides: [
    {
      files: ['*.spec.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ],
  rules : {
    'prettier/prettier':0,
    'react/jsx-sort-props': [
      2,
      {
          'callbacksLast': true,
          'shorthandFirst': false,
          'shorthandLast': true,
          'ignoreCase': true,
          'noSortAlphabetically': true
      }
  ],
  '@typescript-eslint/no-extra-semi': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  'react/jsx-sort-props': 'off',
  'sort-destructure-keys/sort-destructure-keys': 'off',
  'react/button-has-type': 'off',
  'jsx-a11y/click-events-have-key-events': 'off',
  'no-console':'off',
  'react/self-closing-comp':'off',
  'react-hooks/exhaustive-deps':'off',
  'jsx-a11y/no-static-element-interactions':'off',
  'jsx-a11y/anchor-is-valid':'off'
  },
};
