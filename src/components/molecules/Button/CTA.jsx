import styled from "styled-components";
import { colors } from "../../../compenent-styling";

const StyledButton = styled.button(
  ({ primary, large, small }) => `
    background: ${colors.black};
    border-radius: 50px;
    border:none;
    color: ${colors.white};
    font-size: ${large ? "16px" : small ? "12px" : "14px"};
    padding: ${large ? "18px 34px" : small ? "14px 28px" : "16px 32px"};;
    cursor: pointer;

    @media only screen and (max-width: 1280px){
      padding: ${large ? "14px 30px" : small ? "10px 24px" : "12px 28px"};;
    }
  `
);

const CTA = ({ label }) => {
  return (
    <div>
      <StyledButton>{label}</StyledButton>
    </div>
  );
};

export default CTA;
