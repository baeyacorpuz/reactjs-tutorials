import "./App.css";
import styled, { css } from "styled-components";

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  color: white;
  border: 2px solid white;
  text-align: center;
  text-decoration: none
    ${(props) =>
      props.primary &&
      css`
        background: white;
        color: black;
      `};
`;

function App() {
  const handleButton = () => {
    console.log("button");
  };

  return (
    <div className="App-header">
      <Button target="_blank" onClick={handleButton}>
        Increment
      </Button>
    </div>
  );
}

export default App;
