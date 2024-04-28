import { useState } from "react";
import Header from "./Header";
import Form from "./Form.jsx";
import ListContact from "./ListContact";
import Valid from "./Valid.jsx";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Valid />
      <ListContact />
    </div>
  );
}

export default App;
