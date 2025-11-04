import { useEffect } from 'react'
import { createConnection } from '../utils/fakeChatConnection.js'

export default function ChatStatus({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId)
    connection.connect()

    // Cleanup ensures idempotency across dev strict mode mounts and room changes
    return () => {
      connection.disconnect()
    }
  }, [roomId])

  return <p>Connected to: <strong>{roomId}</strong></p>
}