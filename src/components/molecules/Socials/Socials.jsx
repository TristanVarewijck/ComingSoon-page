import Icon from "../../atoms/Icons";
import styled from "styled-components";

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Socials = () => {
  return (
    <SocialLinks>
      <Icon social={true} iconName="medium" />
      <Icon social={true} iconName="telegram" />
      <Icon social={true} iconName="twitter" />
    </SocialLinks>
  );
};

export default Socials;
