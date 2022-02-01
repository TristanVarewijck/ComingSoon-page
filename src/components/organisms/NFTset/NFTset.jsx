import Card from "../../molecules/Card";
import styled from "styled-components";

const Cardset = styled.div`
  display: inline-block;
  position: fixed;
  right: 0%;
  top: 35%;
  width: fit-content;

  div {
    position: relative;
  }

  @media only screen and (max-width: 1280px) {
    right: -5%;
  }

  @media only screen and (max-width: 1200px) {
    right: -5%;
    transform: scale(0.8);
  }

  @media only screen and (max-width: 1130px) {
    right: -10%;
    transform: scale(0.8);
  }

  @media only screen and (max-width: 1005px) {
    display: inline-block;
    position: relative;
    transform: scale(1);
    width: 100%;
    margin: 3em 60px 0 60px;
  }
  .card:nth-child(2) {
    z-index: 1;
    box-shadow: 0px 6.42667px 28.92px rgba(70, 70, 70, 0.2);
  }

  .card:nth-child(1) {
    transform: translate(5em, 1em) scale(0.75);
  }

  .card:nth-child(3) {
    transform: translate(-5em, 1em) scale(0.75);
  }
`;

const NFTset = () => {
  return (
    <Cardset>
      <div className="set-content">
        <Card />
        <Card />
        <Card />
      </div>
    </Cardset>
  );
};

export default NFTset;
