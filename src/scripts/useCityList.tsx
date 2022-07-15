import { useState, useEffect } from "react";

const useCityList = () => {
  const endpoint = "http://localhost:4000/graphql";

  const [cityList, setCityList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: /* GraphQL */ `
        query {
          cities {
            rank
            city
            state
            population
          }
        }
      `,
    }),
  };

  useEffect(() => {
    fetch(endpoint, request)
      .then((d) => d.json())
      .then((d) => setCityList(d.data.cities))
      .catch((error) => {
        console.table("--", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { cityList, loading, error };
};

export default useCityList;
