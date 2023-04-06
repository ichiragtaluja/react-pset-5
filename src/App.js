import logo from "./logo.svg";
import "./App.css";
import { getDefaultNormalizer } from "@testing-library/react";
import { DisplayUsers } from "./Q1/DisplayUsers";
import { DisplayStationaryProducts } from "./Q2,3/DisplayStationaryProducts";
import { DisplayUserInformation } from "./Q4/DisplayUserInformation";
import { DisplayPersonsData } from "./Q5/DisplayPersonsData";
import { useEffect, useState } from "react";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/userchat") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              name: "Alia",
              messages: [
                {
                  from: "Alia",
                  message: "Good Morning",
                },
                {
                  from: "Ranvir",
                  message: "Good Morning, How are you?",
                },
              ],
            },
            {
              name: "Jeena",
              messages: [
                {
                  from: "Jeena",
                  message: "When is the meeting scheduled?",
                },
                {
                  from: "Seema",
                  message: "It is at 10AM tomorrow.",
                },
              ],
            },
            {
              name: "Abhay",
              messages: [
                {
                  from: "Abhay",
                  message: "Have you found a house yet?",
                },
                {
                  from: "John",
                  message: "No luck yet, still searching.",
                },
                {
                  from: "Abhay",
                  message:
                    "Hey, an apartment just got vacant in my bulding. Do you wanna have a look?",
                },
              ],
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "users chat not found.",
        });
      }
    }, 2000);
  });
};
function DisplayChat() {
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
      {userChats.map(({ name, messages }) => (
        <h3>{name}</h3>
        <
      ))}
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
    </div>
  );
}

export default App;
