import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function DisplayUserInformation() {
  const [userDetails, setUserDetails] = useState({});

  const getUserData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/user");
      if (response.status === 200) {
        const userInformation = response.data;
        setUserDetails(userInformation);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUserData();
  }, []);

  function UserCard({ heading, width, height }) {
    return (
      <>
        <h3>{heading}</h3>
        <img
          height={height}
          width={width}
          src={userDetails.image}
          alt="a random image"
        />
        <p>Name: {userDetails.name}</p>
        <p>Likes: {userDetails.likes}</p>
        <p>Comments: {userDetails.comments}</p>
      </>
    );
  }
  return (
    <>
      <h1>Question 4</h1>

      <UserCard heading="User Profile" width="200px" height="200px" />
    </>
  );
}
