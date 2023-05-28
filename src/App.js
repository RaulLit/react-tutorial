import { User } from "./User";

function App() {
  const names = ["Aditya", "Omkar", "Supriya", "Kashinath"];
  const users = [
    { name: "Aditya", age: 20 },
    { name: "Omkar", age: 21 },
  ];

  return (
    <div className="App">
      {names.map((value, key) => {
        return <div key={key}> {value} </div>;
      })}

      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default App;
