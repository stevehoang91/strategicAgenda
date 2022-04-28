import { apiKey } from "./utils";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState();
  var myHeaders = new Headers();
  myHeaders.append("apikey", apiKey);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  let autoCorrect;

  const onInput = async (e) => {
    setInput(e.target.value);
    console.log(input, input.length);
    if (input.length > 3) {
      let result = await fetch(
        `https://api.apilayer.com/spell/spellchecker?q=${input}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      autoCorrect = result;
    }
  };

  console.log(autoCorrect);

  return (
    <>
      <h1>Write your text here</h1>
      <input
        type="text"
        name="textInput"
        placeholder="Write your message her"
        onInput={(e) => {
          onInput(e);
        }}
      ></input>
      {/* <div>
        <p>{autoCorrect.corrections.best_candidate}</p>
      </div> */}
    </>
  );
};

export default App;
