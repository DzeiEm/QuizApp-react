import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  globalIgnores(['dist']),
  {
    root: true,
    env: { browser: true, es2021: true },

    files: ['**/*.{js,jsx}'],
    extends: [
     "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
    },
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["react-refresh"],
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": "warn",
      "react/prop-types": "off",
    },
  },
])
