import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function DisplayUsers() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/users/status");
      if (response.status === 200) {
        const userDetails = response.data.users;
        setUsers(userDetails);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Question 1</h1>
      {users.map(({ name, status }) => (
        <h4 style={{ color: status === "Online" ? "green" : "red" }}>
          {name} - {status}
        </h4>
      ))}
    </>
  );
}
