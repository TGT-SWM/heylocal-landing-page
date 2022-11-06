import styled from 'styled-components';

import TravelOn from './TravelOn';
import Opinion from './Opinion';
import MyPlan from './MyPlan';

function Features() {
  return (
    <div className="Features">
      <StyledTitle>
        <h1>Features</h1>
        <p>현지야 주요 기능 소개</p>
      </StyledTitle>
      <TravelOn />
      <Opinion />
      <MyPlan />
    </div>
  );
}

const StyledTitle = styled.div`
  text-align: center;
  h1 {
    font-family: 'SBAggroB';
    font-size: 40px;
  }
  p {
    font-family: 'Noto Sans KR';
    font-size: 22px;
    color: #797775;
  }
`;

export default Features;
