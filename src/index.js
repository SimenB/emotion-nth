import React from "react";
import ReactDOM from "react-dom";
import styled from "react-emotion";

const Grid = styled("div")`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr auto;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;

  > :nth-child(1) {
    -ms-grid-column: 1;
  }
  > :nth-child(2) {
    -ms-grid-column: 2;
  }
`;

function App() {
  return (
    <Grid className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </Grid>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
