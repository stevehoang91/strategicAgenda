import { apiKey } from "./utils";
import { useState } from "react";
import AutoCorrect from "./AutoCorrect";

const App = () => {
  const [input, setInput] = useState("");
  const [correction, setCorrection] = useState(undefined);
  var myHeaders = new Headers();
  myHeaders.append("apikey", apiKey);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const onInput = async (e) => {
    setInput(e.target.value);
    console.log(input, input.length);
    if (input.length > 3) {
      fetchText(e.target.value);
    }
  };

  async function fetchText(input) {
    let response = await fetch(
      `https://api.apilayer.com/spell/spellchecker?q=${input}`,
      requestOptions
    );
    let data = await response.json();
    setCorrection(data);
  }

  return (
    <>
      <div className="container">
        <h1>Auto-Correct</h1>
        <input
          value={input}
          type="text"
          name="textInput"
          id="text"
          placeholder="Write your message here"
          onInput={(e) => {
            onInput(e);
          }}
        ></input>
      </div>
      <AutoCorrect
        correction={correction}
        setInput={setInput}
        input={input}
        fetchText={fetchText}
      />
    </>
  );
};

export default App;
