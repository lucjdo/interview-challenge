import useInboxStore from '../store'

export default function Inbox() {
  const chats = useInboxStore((state) => state.chats)
  console.log(chats)

  return <div>Inbox</div>
}
