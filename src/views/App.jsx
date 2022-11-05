import GNB from './sections/GNB';
import Header from './sections/Header';
import TravelOn from './sections/TravelOn';
import MyPlan from './sections/MyPlan';
import Team from './sections/Team';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <GNB />
      <Header />
      <div className="Features">
        <TravelOn />
        <MyPlan />
      </div>
      <Team />
      <Footer />
    </div>
  );
}

export default App;
