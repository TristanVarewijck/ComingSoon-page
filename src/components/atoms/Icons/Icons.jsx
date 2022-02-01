import "./icons.scss";
import styled from "styled-components";
import { colors } from "../../../compenent-styling";

const StyledIconWrapper = styled.button(
  ({ isSocial }) => `
      border-radius: ${isSocial === true ? "50%" : "none"};
      border: ${isSocial === true ? `1px solid ${colors.white}` : "none"};
      display: flex;
      width: 52px;
      height: 52px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 10px;
      background-color: rgba(00, 00, 00, 0);

      &:hover {
        background-color: ${colors.black};
        border: 1px solid ${colors.black};
        }
    `
);

const Icons = ({ iconName, social }) => {
  return (
    <StyledIconWrapper isSocial={social} className="icon-wrapper">
      <div className={`icon-social-${iconName}`}></div>
    </StyledIconWrapper>
  );
};

export default Icons;
