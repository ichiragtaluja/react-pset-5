import logo from "./logo.svg";
import "./App.css";
import { getDefaultNormalizer } from "@testing-library/react";
import { DisplayUsers } from "./Q1/DisplayUsers";
import { DisplayStationaryProducts } from "./Q2,3/DisplayStationaryProducts";
import { DisplayUserInformation } from "./Q4/DisplayUserInformation";
import { useEffect, useState } from "react";

// You can use your own images if you wish

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/user") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              name: "Saroj",
              image:
                "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
              likes: 500,
              comments: 10,
            },
            {
              name: "Meeta",
              image:
                "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
              likes: 200,
              comments: 1,
            },
            {
              name: "Alia",
              image:
                "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
              likes: 100,
              comments: 5,
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "users data not found.",
        });
      }
    }, 2000);
  });
};

function DisplayPersonsData() {
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
      setIsloading(false)
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

function App() {
  return (
    <div className="App">
      <DisplayUsers />
      <DisplayStationaryProducts />
      <DisplayUserInformation />
      <DisplayPersonsData />
    </div>
  );
}

export default App;
