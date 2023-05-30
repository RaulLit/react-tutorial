import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return fetch("https://catfact.ninja/fact").then((res) => res.json());
  });

  if (isError) {
    return <h1>An error occurred...</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>This is home page</h1>
      <p>{data?.fact}</p>
      <button onClick={refetch}>Update data</button>
    </div>
  );
};
