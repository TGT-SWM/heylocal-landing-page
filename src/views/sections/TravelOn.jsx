import { Section, SectionTitle, SectionDesc } from '../components/Section';
import { FeatureItem, FeatureList } from '../components/FeatureList';

import screenshot from '../../assets/images/screenshot-travelon.png';
import suitcaseIcon from '../../assets/images/icon-suitcase.png';
import carIcon from '../../assets/images/icon-car.png';
import peopleIcon from '../../assets/images/icon-people.png';

function TravelOn() {
  return (
    <Section className="TravelOn">
      <div>
        <SectionTitle>여행 On</SectionTitle>
        <SectionDesc>
          어떤 여행을 가고 싶은지 포스팅하고, 장소를 추천받으세요!
          <br />
          전국 방방곡곡의 현지인들이 답변해드려요.
        </SectionDesc>
        <FeatureList>
          <FeatureItem icon={suitcaseIcon}>여행 취향</FeatureItem>
          <FeatureItem icon={carIcon}>교통 수단</FeatureItem>
          <FeatureItem icon={peopleIcon}>동행자</FeatureItem>
        </FeatureList>
      </div>
      <div>
        <img src={screenshot} alt="screenshot" />
      </div>
    </Section>
  );
}

export default TravelOn;
