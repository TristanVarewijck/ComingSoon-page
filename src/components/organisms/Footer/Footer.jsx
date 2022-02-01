import Socials from "../../molecules/Socials";
import styled from "styled-components";
import knifes from "../../../assets/images/twoKnifes.svg";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: none;
  height: 85px;
  position: fixed;
  bottom: 0;
  display: flex;
`;

const StyledDiv = styled.div`
  background-color: none;
  display: flex;
  align-items: center;

  img {
    margin-left: 10px;
  }
`;

const StyledContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 60px;
  height: 85px;
  width: 100%;

  p {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContentDiv className="footer-content">
        <StyledDiv>
          <Socials />
          <img src={knifes} alt="Wagyu-knifes" />
        </StyledDiv>
        <div>
          <p>Website by WagyuSwap. All Rights Reserved</p>
        </div>
      </StyledContentDiv>
    </StyledFooter>
  );
};

export default Footer;
