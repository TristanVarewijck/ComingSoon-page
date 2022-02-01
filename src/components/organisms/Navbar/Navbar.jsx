import logo from "../../../assets/icons/kitchenft-logo.svg";
import external from "../../../assets/icons/external.svg";
import styled from "styled-components";

const StyledNav = styled.nav`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 60px;
`;

const StyledList = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  align-items: center;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <StyledList>
        <li>
          <a href="/">
            <img src={logo} alt="kitchenft-logo" />
          </a>
        </li>
        <li className="wagyuswap-link">
          <StyledLink href="wagyuswap.app">
            <p>WagyuSwap</p>
            <img
              style={{ marginLeft: "10px" }}
              src={external}
              alt="external-link-icon"
            />{" "}
          </StyledLink>
        </li>
      </StyledList>
    </StyledNav>
  );
};

export default Navbar;
