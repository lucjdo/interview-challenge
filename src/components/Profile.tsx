import { useRoute } from 'wouter'
import Paper from '@mui/material/Paper'
import { getUserById } from '../services/getUserById'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chat from './Chat'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { Link } from 'wouter'
import ChatIcon from '@mui/icons-material/Chat'

export default function Profile() {
  const [chatStarted, setChatStarted] = useState(false)
  const [, params] = useRoute('/profile/:id')
  const user = getUserById(params?.id || '')!

  return (
    <Stack>
      <Box sx={{ textAlign: 'left' }}>
        <Link href='/'>Go Back</Link>
      </Box>
      <Paper
        elevation={3}
        sx={{ display: 'flex', p: 3, gap: 5, alignItems: 'flex-start' }}
      >
        <Box sx={{ borderRadius: '4px' }}>
          <img src={user?.picture.large} alt={user?.name.first} />
        </Box>
        <Stack>
          <Typography variant='h4'>
            {user.name.first} {user.name.last}
          </Typography>
          <Typography>Position: {user.current_job.job}</Typography>
          <Typography>Company: {user.current_job.company}</Typography>
          <Stack mt={2}>
            <Typography variant='h6'>Job History</Typography>
            <List sx={{ mt: 0, pt: 0 }}>
              {user.job_history.map((job) => {
                return (
                  <ListItem key={job.company}>
                    <Stack>
                      <Typography>
                        {job.job} at {job.company}
                      </Typography>
                      <Typography>
                        {job.from} - {job.to}
                      </Typography>
                    </Stack>
                  </ListItem>
                )
              })}
            </List>
          </Stack>
        </Stack>
        {chatStarted ? (
          <Chat receiver={user} />
        ) : (
          <Button onClick={() => setChatStarted(true)}>
            <ChatIcon fontSize='small' sx={{ mr: 1 }} /> Chat
          </Button>
        )}
      </Paper>
    </Stack>
  )
}
