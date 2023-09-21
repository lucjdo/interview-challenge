import { Route } from 'wouter'
import './App.css'
import UsersFeed from './components/UsersFeed'
import Profile from './components/Profile'
import { useUsers } from './hooks/useUsers'
import Inbox from './components/Inbox'

function App() {
  const { users } = useUsers()
  return (
    <>
      <Route>
        <UsersFeed users={users} />
      </Route>
      <Route path='/profile/:id'>
        <Profile />
      </Route>
      <Route path='/inbox'>
        <Inbox />
      </Route>
    </>
  )
}

export default App
