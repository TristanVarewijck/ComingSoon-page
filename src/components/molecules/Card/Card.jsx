import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { colors } from "../../../compenent-styling";
import Prei from "../../../assets/images/prei.svg";
import "./card.scss";

const BidButton = styled.button`
  font-size: 10px;
  border: 1px solid ${colors.black};
  border-radius: 50px;
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 3px 11px;
  font-weight: 500;
`;

const NFTCard = () => {
  return (
    <Card className="card">
      <div className="image-container">
        <img variant="top" src={Prei} alt="NFT-ART" />
      </div>
      <Card.Body>
        <div className="left-side">
          <Card.Title className="card-title">KitcheNFT</Card.Title>
          <Card.Text className="card-text">Kitchen Veggie #1318</Card.Text>
        </div>

        <div className="right-side">
          <Card.Title className="card-title">3.4</Card.Title>
          <BidButton>Bid</BidButton>
        </div>
      </Card.Body>
    </Card>

    // <StyledNFTContainer className="nft-wrapper">
    //   <StyledLabel className="label">
    //     <StyledLeftSide className="left-side">
    //       <small>KitcheNFT</small>
    //       <h4>Kitchen Veggie #1318</h4>
    //     </StyledLeftSide>

    //     <StyledRightSide className="right-side">
    //       <small>2.24</small>
    //       <button>Bid</button>
    //     </StyledRightSide>
    //   </StyledLabel>
    // </StyledNFTContainer>
  );
};

export default NFTCard;
