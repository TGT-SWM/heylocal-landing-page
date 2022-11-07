import { Section, SectionTitle, SectionDesc, SectionImage } from '../components/Section';
import { FeatureItem, FeatureList } from '../components/FeatureList';

import screenshot from '../../assets/images/screenshot-myplan.png';
import addplaceIcon from '../../assets/images/icon-addplace.png';
import refreshIcon from '../../assets/images/icon-refresh.png';
import heartIcon from '../../assets/images/icon-heart.png';

function MyPlan() {
  return (
    <Section className="MyPlan" color="#ff9900" align="center">
      <div>
        <SectionTitle color="#ffffff">마이 플랜</SectionTitle>
        <SectionDesc color="#ffffff">
          여행지 추천을 받았다면, 이제 일정을 짤 차례
          <br />
          여행 일정을 편리하고, 똑똑하게 관리해보세요!
        </SectionDesc>
        <FeatureList>
          <FeatureItem icon={addplaceIcon} color="#ffffff">
            장소 추가
          </FeatureItem>
          <FeatureItem icon={refreshIcon} color="#ffffff">
            최적 루트 정렬
          </FeatureItem>
          <FeatureItem icon={heartIcon} color="#ffffff">
            장소 추천
          </FeatureItem>
        </FeatureList>
      </div>
      <div>
        <SectionImage src={screenshot} alt="screenshot" />
      </div>
    </Section>
  );
}

export default MyPlan;
