import "./autoCorrect.css";

const AutoCorrect = (props) => {
  console.log(props);

  let text = document.getElementById("text");

  console.log(text);

  const applyAutoCorrect = () => {
    let correction = props.correction.corrections[0].best_candidate;
    let typo = props.correction.corrections[0].text;
    let replacement = props.input.replace(typo, correction);
    props.setInput(replacement);
    props.fetchText(props.input);
  };

  return (
    <>
      <div className="autoCorrect">
        {props.correction != undefined &&
          props.correction.corrections.length > 0 && (
            <p
              onClick={() => {
                applyAutoCorrect();
              }}
            >
              Did you mean "{props.correction.corrections[0].best_candidate}"
            </p>
          )}
      </div>
    </>
  );
};

export default AutoCorrect;
