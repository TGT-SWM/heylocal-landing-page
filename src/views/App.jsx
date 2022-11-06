import styled from 'styled-components';

import GNB from './sections/GNB';
import Header from './sections/Header';
import Features from './sections/Features';
import Team from './sections/Team';
import Footer from './sections/Footer';

function App() {
  return (
    <Body className="App">
      <GNB />
      <Header />
      <Features />
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
`;

export default App;
