export function createConnection(roomId) {
  let connected = false

  return {
    connect() {
      if (!connected) {
        connected = true
        console.log(`✅ Connected to chat room: ${roomId}`)
      }
    },
    disconnect() {
      if (connected) {
        connected = false
        console.log(`❌ Disconnected from chat room: ${roomId}`)
      }
    },
  }
}