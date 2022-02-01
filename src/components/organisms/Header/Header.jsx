import EmailForm from "../../molecules/Input";
import styled from "styled-components";
import { colors } from "../../../compenent-styling";

const StyledHeader = styled.header`
  margin-top: 5em;
  padding-left: 60px;
  padding-right: 60px;

  h1 {
    margin-top: 0.5em;
    margin-bottom: 1em;
    font-size: 2em;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 120%;

    @media only screen and (max-width: 1130px) {
      font-size: 52px;
    }
  }

  p {
    font-size: 12px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 120%;
    letter-spacing: 0.5px;
  }

  input::placeholder {
    color: ${colors.white};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <p>Coming soon</p>
      <h1>
        Platform is under <br></br>Construction
      </h1>
      <EmailForm></EmailForm>
    </StyledHeader>
  );
};

export default Header;
