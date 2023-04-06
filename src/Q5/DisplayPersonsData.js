import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function DisplayPersonsData() {
  const [personsData, setPersonsData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    try {
      setIsloading(true);
      const response = await fakeFetch("https://example.com/api/users");
      if (response.status === 200) {
        setIsloading(false);
        setPersonsData(response.data);
      }
    } catch (error) {
      setIsloading(false);
      setIsError(true);
    }
  };
  return (
    <>
      <h1>Question 5</h1>
      <h3>User Feed</h3>
      {isLoading && <p>isLoading...</p>}
      {isError && <p>Sorry, Error Occured</p>}
      {personsData.map(({ name, image, likes, comments }) => (
        <div>
          <h4>{name}</h4>
          <img height="200px" width="200px" src={image} />
          <p>Likes: {likes}</p>
          <p>Comments: {comments}</p>
        </div>
      ))}
    </>
  );
}
