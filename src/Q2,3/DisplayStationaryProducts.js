import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function DisplayStationaryProducts() {
  const [stationaryProducts, setStationaryProducts] = useState([]);
  const [displayData, setDisplayData] = useState([stationaryProducts]);
  const [isQuantityFiltered, setIsQuantityFiltered] = useState(false);
  const [isPriceFiltered, setIsPriceFiltered] = useState(false);

  const displayByPriceHandler = () => {
    setIsPriceFiltered(!isPriceFiltered);

    !isPriceFiltered
      ? setDisplayData(
          stationaryProducts.filter(({ name, price, quantity }) => price < 100)
        )
      : setDisplayData(stationaryProducts);
  };

  const quantityHandler = () => {
    console.log(isQuantityFiltered);
    setIsQuantityFiltered(!isQuantityFiltered);
    console.log(isQuantityFiltered);
    if (!isQuantityFiltered) {
      const newArr = stationaryProducts.filter(
        ({ name, price, quantity }) => quantity > 20
      );
      setDisplayData(newArr);
    } else {
      setDisplayData(stationaryProducts);
    }
  };

  const getStationaryData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/products");
      if (response.status === 200) {
        const stationaryData = response.data.products;
        setStationaryProducts(() => stationaryData);
        setDisplayData(() => stationaryData);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getStationaryData();
  }, []);

  return (
    <>
      <h1>Question 2</h1>
      <button onClick={quantityHandler}>
        Show products with quantity more than 20
      </button>
      <button onClick={displayByPriceHandler}>
        Show products with price less than 100
      </button>
      {displayData.map(({ name, price, quantity }) => (
        <h4>
          {name} - Price {price} - Quantity - {quantity}
        </h4>
      ))}
    </>
  );
}
