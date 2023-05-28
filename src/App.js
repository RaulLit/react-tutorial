import "./App.css";

function App() {
  return (
    <div className="App">
      <Job salary={10} position="Pocha" company="lastbenchscholar" />
      <Job salary={20} position="Senior Pocha" company="lastbenchscholar" />
      <Job salary={30} position="Pocha Head" company="lastbenchscholar" />
    </div>
  );
}

function Job(props) {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h4>{props.company}</h4>
    </div>
  );
}
// normal javascript function
// function getName() {
//   return "Aditya";
// }

// A react component always return jsx(html)
// first letter must be capital
// function GetNameComponent() {
//   return <h1>Aditya</h1>;
// }

export default App;
