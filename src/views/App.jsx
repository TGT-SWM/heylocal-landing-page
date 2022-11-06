import styled from 'styled-components';

import GNB from './sections/GNB';
import Header from './sections/Header';
import Features from './sections/Features';
import Team from './sections/Team';
import Footer from './sections/Footer';
import Divider from './components/Divider';

function App() {
  return (
    <>
      <GNB />
      <Body>
        <Header />
        <Features />
        <Team />
      </Body>
      <Divider />
      <Footer />
    </>
  );
}

const Body = styled.div`
  padding-top: 50px;
`;

export default App;
