import styledComponents from 'styled-components';

const Grid: React.FunctionComponent = styledComponents.div`
  height: calc(100vh - 8px);
  width: 100vw;
  display: grid;
  grid-template-columns: 20% 20% 20% 1fr 10% 10%;
  grid-template-rows: 31% 31% 38%;
  grid-template-areas:
    "waterfall waterfall waterfall umbrella leaning leaning"
    "waterfall waterfall waterfall umbrella calendar calendar"
    "laughing hugging hugging tree tree tree";
  grid-gap: 4px;

  @media (orientation: landscape) and (max-width: 1420px) {
    grid-template-columns: 20% 20% 15% 1fr 10% 15%;
  }

  @media (orientation: landscape) and (max-width: 1420px) {
    grid-template-columns: 25% 15% 15% 1fr 10% 15%;
  }

  @media (orientation: landscape) and (max-width: 1220px) {
    grid-template-columns: 24% 13% 13% 1fr 10% 20%;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    width: calc(100vw - 16px);
    grid-template-columns: 20% 20% 10% 20% 30%;
    grid-template-rows: 50% 40% 90% 90%;
    grid-template-areas:
      "waterfall waterfall waterfall umbrella calendar"
      "waterfall waterfall waterfall umbrella calendar"
      "leaning leaning leaning laughing laughing"
      "tree tree tree hugging hugging";
  }

  @media (orientation: portrait) {
    width: calc(100vw - 16px);
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: 50% repeat(3, 40%);
    grid-template-areas:
      "waterfall waterfall waterfall waterfall waterfall"
      "leaning leaning leaning calendar calendar"
      "umbrella umbrella tree tree tree"
      "laughing laughing laughing hugging hugging";
  }

  @media (orientation: portrait) and (max-width: 500px) {
    grid-template-rows: 40% 20% 30% 25%;
    grid-template-areas:
      "waterfall waterfall waterfall waterfall waterfall"
      "calendar calendar calendar leaning leaning"
      "umbrella umbrella tree tree tree"
      "laughing laughing laughing hugging hugging";
  }

  @media (orientation: portrait) and (max-width: 320px) {
    grid-template-rows: 40% 25% 30% 25%;
  }
`;
export { Grid };
