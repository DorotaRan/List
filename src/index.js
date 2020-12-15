import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    const people = ["Biden", "Trump", "Obama", "Bush", "Clinton", "Bush"];
    const peopleLis = people.map((person, i) => (
      <li key={"person_" + i}>{person}</li>
    ));

    return <ul> {peopleLis} </ul>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
