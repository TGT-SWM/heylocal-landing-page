import { Section, SectionTitle, SectionDesc } from '../components/Section';
import screenshot from '../../assets/images/screenshot-travelon.png';

function TravelOn() {
  return (
    <Section className="TravelOn">
      <div className="first">
        <SectionTitle className="title">여행 On</SectionTitle>
        <SectionDesc className="subtitle">
          어떤 여행을 가고 싶은지 포스팅하고, 장소를 추천받으세요!
          <br />
          전국 방방곡곡의 현지인들이 답변해드려요.
        </SectionDesc>
      </div>
      <div className="second">
        <img src={screenshot} alt="screenshot" />
      </div>
    </Section>
  );
}

export default TravelOn;
