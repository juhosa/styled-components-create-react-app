import styled, { keyframes } from "styled-components";

const StyledApp = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledA = styled.a`
  color: #61dafb;
`;

const StyledP = styled.p``;

const logoRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    & {
      animation: ${logoRotate} infinite 20s linear;
    }
  }
`;

export { StyledApp, StyledHeader, StyledA, StyledP, StyledLogo };
