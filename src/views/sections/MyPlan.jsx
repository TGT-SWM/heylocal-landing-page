import { Section, SectionTitle, SectionDesc } from '../components/Section';

import screenshot from '../../assets/images/screenshot-myplan.png';

function MyPlan() {
  return (
    <Section className="MyPlan">
      <div>
        <SectionTitle>마이 플랜</SectionTitle>
        <SectionDesc>
          여행지 추천을 받았다면, 이제 일정을 짤 차례
          <br />
          여행 일정을 편리하고, 똑똑하게 관리해보세요!
        </SectionDesc>
      </div>
      <div>
        <img src={screenshot} alt="screenshot" />
      </div>
    </Section>
  );
}

export default MyPlan;
