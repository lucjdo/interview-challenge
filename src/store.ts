import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useInboxStore = create(
  persist(
    (set) => ({
      chats: [],
      addChat: (chat) =>
        set((state) => {
          const newChats = state.chats.reduce((acc, current) => {
            if (current.receiver.id.value === chat.receiver.id.value) {
              current.messages.push(chat.messages)
              return [...acc, current]
            }
            return [...acc, current]
          }, [])

          return { chats: newChats }
        })
    }),
    {
      name: 'chat-storage' // name of the item in the storage (must be unique)
    }
  )
)

export default useInboxStore
