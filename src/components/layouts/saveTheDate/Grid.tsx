import styledComponents from 'styled-components';

const Grid: React.FunctionComponent = styledComponents.div`
  height: calc(100vh - 8px);
  display: grid;
  grid-template-columns: 20fr 20fr 20fr 20fr 10fr 10fr;
  grid-template-rows: 31% 31% 38%;
  grid-template-areas:
    "waterfall waterfall waterfall umbrella leaning leaning"
    "waterfall waterfall waterfall umbrella calendar calendar"
    "laughing hugging hugging tree tree tree";
  grid-gap: 4px;

  @media (orientation: landscape) and (max-width: 1420px) {
    grid-template-columns: 20fr 20fr 15fr 20fr 10fr 15fr;
  }

  @media (orientation: landscape) and (max-width: 1420px) {
    grid-template-columns: 25fr 15fr 15fr 20fr 10fr 15fr;
  }

  @media (orientation: landscape) and (max-width: 1220px) {
    grid-template-columns: 24fr 13fr 13fr 20fr 10fr 20fr;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    grid-template-columns: 20fr 20fr 10fr 20fr 30fr;
    grid-template-rows: 50% 40% 90% 90%;
    grid-template-areas:
      "waterfall waterfall waterfall umbrella calendar"
      "waterfall waterfall waterfall umbrella calendar"
      "leaning leaning leaning laughing laughing"
      "tree tree tree hugging hugging";
  }

  @media (orientation: portrait) {
    grid-template-columns: repeat(5, 20fr);
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
