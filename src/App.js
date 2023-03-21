import "./styles.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return state + 1;
    }
    case "double": {
      return state + 2;
    }
    default: {
      return state;
    }
  }
};
export default function App() {
  const [counter, dispatch] = useReducer(reducer, 0);

  const fire = () => {
    ["increment", "double", "reset", "increment"].forEach((type) =>
      dispatch({ type })
    );
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={fire}>{counter}</button>
    </div>
  );
}
