import { Section, SectionTitle, SectionDesc } from '../components/Section';

import screenshot from '../../assets/images/screenshot-opinion.png';

function Opinion() {
  return (
    <Section className="Opinion">
      <div>
        <img src={screenshot} alt="screenshot" />
      </div>
      <div>
        <SectionTitle>여행 장소 공유</SectionTitle>
        <SectionDesc>
          현지인만 아는 숨겨진 공간이 있다면, 마음에 드는 여행지를 발견했다면 다른 유저들과
          공유해보세요.
        </SectionDesc>
      </div>
    </Section>
  );
}

export default Opinion;
