import { useFetch } from "../hooks/useFetch";

export const Cat = () => {
  const { data, refetch } = useFetch("https://catfact.ninja/fact", "cat");
  return (
    <div>
      <button onClick={refetch}>Refetch</button>
      <h3>{data?.fact}</h3>
    </div>
  );
};
