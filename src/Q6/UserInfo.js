import { Chats } from "./Chats";

export function UserInfo({ name, messages }) {
  return (
    <li>
      <h4>{name}'s chat</h4>
      <ol>
        {messages.map(({ from, message }) => (
          <Chats from={from} message={message} />
        ))}
      </ol>
    </li>
  );
}
