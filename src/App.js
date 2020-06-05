import React from "react";
import logo from "./logo.svg";
import {
  StyledApp,
  StyledA,
  StyledHeader,
  StyledLogo,
  StyledP,
} from "./CustomComponents";

function App() {
  return (
    <StyledApp>
      <StyledHeader>
        <StyledLogo src={logo} alt="logo" />
        <StyledP>
          Edit <code>src/App.js</code> and save to reload.
        </StyledP>
        <StyledA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </StyledA>
        <StyledP>
          Made with{" "}
          <StyledA
            href="https://styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            styled-components
          </StyledA>
        </StyledP>
      </StyledHeader>
    </StyledApp>
  );
}

export default App;
