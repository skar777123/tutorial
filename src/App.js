import { useDispatch, useSelector } from "react-redux";
import { fetcher } from "./redux/slice/fetch";
import { useState } from "react";

function App() {
  const [thoughts, setThoughts] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const click = () => {
    dispatch(fetcher());
    setThoughts(data.data);
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.data?.insult ? (
        <h3>{thoughts?.insult}</h3>
      ) : (
        <h3>No lines fetched</h3>
      )}
      <button onClick={click}>Fetch Lines</button>
    </div>
  );
}

export default App;
