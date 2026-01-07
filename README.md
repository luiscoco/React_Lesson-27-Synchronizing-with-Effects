# React 19.2 - Lesson 27 - Synchronizing with Effects

This project demonstrates synchronization patterns with `useEffect`:

- DOM sync (focus input)
- External system sync (chat connection)
- Side-effects after render (document.title)
- Async effects with cancellation (search with AbortController)
- Event vs. effect distinction
- Cleanup on unmount and before re-run

## Run locally

```bash
# 1) Extract the ZIP
unzip react-useeffect-practice.zip
cd react-useeffect-practice

# 2) Install deps
npm install

# 3) Start dev server
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```
