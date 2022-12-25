## Install nextjs with typescript

```bash
npx create-next-app@latest --typescript myproject
```

## Install eslint

```bash
npx eslint --init
npm install --save-dev @next/eslint-plugin-next
```
create file .eslintrc.json
```
{
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "plugin:jest-dom/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@next/next/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "no-var": 2,
    "no-undef": 2,
    "no-param-reassign": 2,
    "@typescript-eslint/no-unused-vars": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

## Install prettier

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```
create file .prettierrc
```
{
  "printWidth": 80,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

## Install tailwindcss


```bash
npm install -D tailwindcss postcss autoprefixer cssnano
npx tailwindcss init -p
```
create file tailwind.config.js
```
create file tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
};
```
create file postcss.config.js
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
};
```

## Install jest

```bash
npm i jest @testing-library/react @types/jest babel-jest @testing-library/jest-dom @testing-library/user-event @testing-library/dom eslint-plugin-jest-dom -D
```
create file jest.config.ts
```
import nextJest from 'next/jest';
// Sync object
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
};

module.exports = createJestConfig(customJestConfig);
```
## Running with bun.sh
Install bun
```bash
curl https://bun.sh/install | bash
```
Run development server with 
```bash
bun run dev
```
