import "./App.css";
import { Cat } from "./components/Cat";
import { useToggle } from "./hooks/useToggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [isVisible, toggle] = useToggle();
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h2>Hidden Text</h2>}
      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>
    </div>
  );
}

export default App;
