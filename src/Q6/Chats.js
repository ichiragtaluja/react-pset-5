export function Chats({ from, message }) {
  return (
    <li>
      <b>{from}</b>: {message}
    </li>
  );
}
