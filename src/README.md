# Profiles App (Lab 1 – Complete Parts 1–6)

## Dev Container
- **Node.js Dev Container** (image: `mcr.microsoft.com/devcontainers/javascript-node:20`)
- `corepack enable` to use npm/yarn/pnpm reliably.
- Provides isolated Node 20 environment for Vite + React development.

---

## Getting Started
```bash
npm install
npm run dev
# open the shown URL (e.g., http://localhost:5173)
```

---

## Build
```bash
npm run build
```

---

## Deploy (GitHub Pages via Actions)
- Ensure in `vite.config.js`:
  ```js
  base: '/profiles-app/'
  ```
- Push to `main`; the GitHub Actions workflow builds and deploys automatically.
- **Settings → Pages → Source:** GitHub Actions

**Live URL:** [https://ting-gao-1.github.io/profiles-app/](https://ting-gao-1.github.io/profiles-app/)

---

## 🧩 Part 1 — Initialize Vite + React + React-Bootstrap
- Initialized a Vite + React project in the Dev Container.
- Installed React-Bootstrap and imported Bootstrap CSS in `main.jsx`.
- Displayed “Hello React” using a Bootstrap Alert component.

---

## 🌐 Part 2 — Deploy to GitHub Pages
- Added `vite.config.js` with `base: '/profiles-app/'`.
- Added `.github/workflows/deploy.yml` for CI deployment.
- Verified site live on GitHub Pages.

---

## 💡 Part 3 — Components + Props + .map()
- Created `ProfileCard` component with `name` and `likes` props.
- Used `.map()` to render multiple cards from `profiles.js`.
- Responsive layout using Bootstrap `Row` and `Col`.
- [View commit diff introducing components and .map()](https://github.com/ting-gao-1/profiles-app/commit/746e851fc0bbf98e93096d2eee7c68768b81ee88)

---

## ❤️ Part 4 — Stateful UI + Like Button
- Introduced `useState` in `App.jsx`.
- Each card has a Like button that increments likes immutably.
- Updates render immediately without refresh.

---

## 🧾 Part 5 — Controlled Form with Validation
- Added `AddProfileForm` component with controlled input.
- Validation rules:
  - Name required (non-empty, trimmed)
  - Name must be unique (case-insensitive)
- On submit, adds `{ id, name, likes: 0 }` to state.
- Shows inline Bootstrap feedback when invalid.
- Input clears after successful add.

---

## 🧰 Part 6 — Editing, Deletion, Table View, Dark Mode, Persistence
- Integrated **MUI DataGrid** for sorting, filtering, and editing.
- Added delete action per row.
- Managed state with `useReducer` (`SET`, `ADD`, `UPDATE`, `DELETE`).
- Persisted profiles and theme to `localStorage`.
- Added **dark/light mode** toggle with MUI ThemeProvider.
- Maintained card view with Like functionality.

**Dependencies**
```bash
npm i @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/icons-material
```

---

## 🧠 Advanced Ideas (DOK Level 3 / 4)
- **Friend Request system** — maintain graph edges between profiles.
- **Undo / Redo** — extend reducer with a history stack.
- **Sync to cloud** — store data in a remote backend or GitHub Gist.

---

## Notes
- Uses React + Vite + React-Bootstrap + MUI.
- Demonstrates components, props, state, controlled forms, validation, and reducers.
- Includes dark mode and localStorage persistence for better UX.
- Full CI/CD deployment with GitHub Actions.

---

✅ **Project Complete:** Profiles App implements Parts 1–6 with modern React patterns and automatic GitHub Pages deployment.
