import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { User } from '../types'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import useInboxStore from '../store'

type Message = {
  message: string
  sender: string
}

export default function Chat({ receiver }: { receiver: User }) {
  const [chatHistory, setChatHistory] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const addChat = useInboxStore((state) => state.addChat)

  const handleOnSend = () => {
    const newMsg = {
      message: newMessage,
      sender: 'me'
    }
    const fakeResponse = {
      message: 'This is a fake response',
      sender: receiver.name.first
    }
    setChatHistory([...chatHistory, newMsg, fakeResponse])
    setNewMessage('')
    addChat({ receiver, messages: [newMsg, fakeResponse] })
  }

  return (
    <Stack
      sx={{
        gap: 1,
        background: '#646cffaa',
        borderRadius: 2,
        p: 2,
        width: 300
      }}
    >
      <Typography>Chat</Typography>

      <List sx={{ maxHeight: 400, overflowY: 'scroll' }}>
        {chatHistory.map((message) => (
          <ListItem key={message.message}>
            <strong>{message.sender}: </strong> {message.message}
          </ListItem>
        ))}
      </List>

      <TextField
        sx={{ p: 0 }}
        id='outlined-basic'
        variant='standard'
        size='small'
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />

      <Button
        onClick={handleOnSend}
        size='small'
        sx={{ color: 'black' }}
        disabled={!newMessage}
      >
        Send
      </Button>
    </Stack>
  )
}
