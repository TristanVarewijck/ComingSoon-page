import CTA from "../Button";
import styled from "styled-components";
import { colors } from "../../../compenent-styling";

const Wrapper = styled.div`
  border: 1px solid ${colors.white};
  border-radius: 50px;
  padding: 10px 17px;
  width: 50%;

  @media only screen and (max-width: 1280px) {
    width: 50%;
  }

  @media only screen and (max-width: 1050px) {
    padding: 8px 15px;
  }

  @media only screen and (max-width: 995px) {
    width: 500px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  box-shadow: none;
  color: ${colors.white};
  font-size: 16px;
  padding-left: 3em;
  width: 70%;
  background: none;

  @media only screen and (max-width: 1280px) {
    font-size: 14px;
  }
`;

const emailForm = () => {
  return (
    <div>
      <Wrapper>
        <StyledForm className="emailForm" action="post">
          <StyledInput type="email" placeholder="Enter your e-mail adress" />
          <CTA type="submit" label="Notify Me"></CTA>
        </StyledForm>
      </Wrapper>
    </div>
  );
};

export default emailForm;
