✅ **React + Vite**
✅ **Prettier + ESLint**
✅ **Husky + Lint-staged**
✅ **Git initialised setup**

---

# ⚛️ React + Vite Setup with Prettier, ESLint, Husky, and Lint-Staged

A modern frontend setup for building fast and clean React applications using **Vite**. This includes automatic code formatting and linting with **Prettier**, **ESLint**, **Husky**, and **Lint-staged** to ensure clean and consistent code.

---

## 🚀 Project Setup

### 1. Create a New Vite React Project (`ESLint` is automatically set up)

```bash
npm create vite@latest react-app
```

- **Select Framework**: `React`
- **Select Variant**: `JavaScript`

Then:

```bash
cd react-app
npm install
npm run dev
```

---

### 2. Initialise Git (Optional but Recommended)

```bash
git init
```

---

## 🧹 Prettier Setup

### 1. Install Prettier & ESLint Plugins

```bash
npm install --save-dev prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier
```

### 2. Create Configuration Files

**`.prettierrc`**

```json
{
    "printWidth": 90,
    "useTabs": true,
    "singleQuote": false
}
```

**`.prettierignore`**

```
node_modules
dist
build
```

### 3. Add Scripts in `package.json`

```json
"scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
}
```

### 4. Format Code

```bash
npm run format
```

---

## 🐶 Husky + 🧷 Lint-staged Setup

### 1. Install Husky & Lint-staged

```bash
npm install --save-dev husky
npx husky init
npm install --save-dev lint-staged
```

### 2. Update `.husky/pre-commit`

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

### 3. Add `lint-staged` in `package.json`

```json
"lint-staged": {
  "**/*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "**/*.{json,md,css,html}": [
    "prettier --write"
  ]
}
```

---

## ✅ Test Pre-commit Hook

```bash
git add .
git commit -m "test husky-lint-staged"
```

If everything is set up correctly, Prettier and ESLint will automatically format staged files before commit.

```bash
✔ Backed up original state in git stash (eb5da79)
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...
[master e2ac104] test husku-lint-staged
 1 file changed, 9 insertions(+)
```

---

## 📁 Project Structure (Minimal)

```
react-app/
├── .husky/
│   └── pre-commit
├── src/
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── vite.config.js
└── README.md
```

---

## 💬 Summary

- ✅ Fast React setup using Vite
- 🧼 Auto-formatting with Prettier
- 🔍 Linting with ESLint
- 🔐 Git hook enforcement with Husky
- 🎯 Pre-commit file checks with Lint-staged

---
