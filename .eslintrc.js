module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended', // Integrates Prettier
    ],
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'jsx-a11y',
        'import',
        'vite',
    ],
    rules: {
        // Custom rules can be added here
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'react/react-in-jsx-scope': 'off', // Not necessary with React 17+
    },
};
