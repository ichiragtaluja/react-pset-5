import { useEffect, useState } from "react";
import { UserInfo } from "./UserInfo";
import { fakeFetch } from "./fakeFetch";

export function DisplayChat() {
  const [userChats, setUserChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUserChats = async () => {
    try {
      setIsLoading(true);
      const response = await fakeFetch("https://example.com/api/userchat");
      if (response.status === 200) {
        setIsLoading(false);
        setUserChats(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUserChats();
  }, []);

  return (
    <>
      <h1>Question 6</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {userChats.map(({ name, messages }) => (
          <UserInfo name={name} messages={messages} />
        ))}
      </ul>
    </>
  );
}
