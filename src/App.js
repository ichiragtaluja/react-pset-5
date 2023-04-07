import logo from "./logo.svg";
import "./App.css";
import { getDefaultNormalizer } from "@testing-library/react";
import { DisplayUsers } from "./Q1/DisplayUsers";
import { DisplayStationaryProducts } from "./Q2,3/DisplayStationaryProducts";
import { DisplayUserInformation } from "./Q4/DisplayUserInformation";
import { DisplayPersonsData } from "./Q5/DisplayPersonsData";
import { DisplayChat } from "./Q6/DisplayChat";
import { useEffect, useState } from "react";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/comments") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            comments: [
              {
                name: "Raju",
                text: "Hello how are you long time no see!!!",
              },
              { name: "Pankaj", text: "Party when??" },
              { name: "Sakshi", text: "Where are you currently staying" },
              { name: "Kishore", text: "Hello Buddy!!" },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No comments Found",
        });
      }
    }, 2000);
  });
};

function Comments() {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);

  const clickHandler = (index) => {
    const filteredData = filteredComments.filter((comment, i) => i !== index);
    setFilteredComments(filteredData);
  };

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/comments");
      if (response.status === 200) {
        setComments(response.data.comments);
        setFilteredComments(response.data.comments);
      }
    } catch (error) {}
  };
  return (
    <>
      <h1>Question 7</h1>
      <div>
        {filteredComments.map(({ name, text }, index) => (
          <>
            <p>
              <b>{name}</b>
            </p>
            <p>{text}</p>
            <button onClick={() => clickHandler(index)}>Delete</button>
          </>
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>React Pset 5</h1>
      <DisplayUsers />
      <DisplayStationaryProducts />
      <DisplayUserInformation />
      <DisplayPersonsData />
      <DisplayChat />
      <Comments />
    </div>
  );
}

export default App;
