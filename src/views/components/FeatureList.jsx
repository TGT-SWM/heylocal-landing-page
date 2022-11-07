import styled from 'styled-components';

export const FeatureList = styled.ul`
  list-style: none;
  padding-left: 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export function FeatureItem({ icon, color, children }) {
  return (
    <StyledDiv className="FeatureItem" color={color}>
      <img src={icon} alt="icon" />
      <p>{children}</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100px;
  border: 1px solid ${(props) => props.color ?? '#797775'};
  border-radius: 10px;
  margin-right: 16px;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: medium;
    color: ${(props) => props.color ?? '#464749'};
    margin: 10px 0 0;
    text-align: center;
  }

  @media (max-width: 320px) {
    width: 100%;
    margin: 10px 0;
  }
`;
