import GNB from './sections/GNB';
import Header from './sections/Header';
import TravelOn from './sections/TravelOn';
import MyPlan from './sections/MyPlan';
import Team from './sections/Team';
import Footer from './sections/Footer';
import styled from 'styled-components';

function App() {
  return (
    <Body className="App">
      <GNB />
      <Header />
      <div className="Features">
        <div className="features-title">
          <h1>Features</h1>
          <p>현지야 주요 기능 소개</p>
        </div>
        <TravelOn />
        <MyPlan />
      </div>
      <Team />
      <Footer />
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1000px;
  margin: 0 auto;

  .features-title {
    h1 {
      font-family: 'SBAggroB';
      font-size: 40px;
    }
    p {
      font-family: 'Noto Sans KR';
      font-size: 22px;
      color: #797775;
    }
  }
`;

export default App;
