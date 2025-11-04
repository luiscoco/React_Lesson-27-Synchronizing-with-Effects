import { useState } from 'react'
import Counter from './components/Counter.jsx'
import FocusInput from './components/FocusInput.jsx'
import ChatStatus from './components/ChatStatus.jsx'
import SearchBox from './components/SearchBox.jsx'
import ResizeLogger from './components/ResizeLogger.jsx'

export default function App() {
  const [shouldFocus, setShouldFocus] = useState(false)
  const [roomId, setRoomId] = useState('room-1')

  return (
    <div className="app">
      <h1>React useEffect Practice Dashboard</h1>
      <p className="muted">
        Practice synchronizing with effects: external systems, DOM, async work, cleanup, and dependency control.
      </p>

      <section>
        <h2>1️⃣ Counter (Effect for Side Effects)</h2>
        <Counter />
        <small className="muted">Event updates count immediately; effect syncs document.title after render.</small>
      </section>

      <section>
        <h2>2️⃣ Focus Input (DOM Synchronization)</h2>
        <button onClick={() => setShouldFocus((p) => !p)} style={{ marginRight: 8 }}>
          {shouldFocus ? 'Blur Input' : 'Focus Input'}
        </button>
        <FocusInput shouldFocus={shouldFocus} />
      </section>

      <section>
        <h2>3️⃣ Chat Connection (Effect + Cleanup)</h2>
        <label>
          Room ID:
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            style={{ marginLeft: 8 }}
          />
        </label>
        <ChatStatus roomId={roomId} />
        <small className="muted">Open the console to see connect/disconnect logs when room changes or component unmounts.</small>
      </section>

      <section>
        <h2>4️⃣ Async Search (Effect + AbortController)</h2>
        <SearchBox />
        <small className="muted">Type to search. Changing input cancels in-flight requests to avoid stale updates.</small>
      </section>

      <section>
        <h2>5️⃣ Resize Listener (Cleanup)</h2>
        <ResizeLogger />
        <small className="muted">Resize the window and check the console; cleanup removes the listener on unmount.</small>
      </section>
    </div>
  )
}