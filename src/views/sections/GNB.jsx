import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

function GNB() {
  return (
    <GNBContainer>
      <StyledNav className="GNB">
        <img src={logo} alt="logo" height="40" />
        <StyledUl>
          <li>
            <StyledLink>Home</StyledLink>
          </li>
          <li>
            <StyledLink>Features</StyledLink>
          </li>
          <li>
            <StyledLink>About Us</StyledLink>
          </li>
        </StyledUl>
      </StyledNav>
    </GNBContainer>
  );
}

const GNBContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid #d9d9d9;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: 1000px;
  height: 50px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: medium;
  color: #797775;
  margin-left: 20px;
`;

export default GNB;
