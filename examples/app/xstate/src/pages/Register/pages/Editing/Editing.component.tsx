import Form from "../../compnents/Form";

export function Editing() {
  return <Form onSubmit={(values) => console.log("submit", values)} />;
}
