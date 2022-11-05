import GNB from './sections/GNB';
import Header from './sections/Header';
import TravelOn from './sections/TravelOn';
import MyPlan from './sections/MyPlan';
import Team from './sections/Team';
import Footer from './sections/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
