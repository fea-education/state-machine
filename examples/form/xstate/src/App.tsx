import RegistrationForm from "./register/Form";

function App() {
  return <RegistrationForm onSubmit={(values) => console.log("submit", values)} />;
}

export default App;
