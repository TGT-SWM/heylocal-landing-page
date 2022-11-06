import { Section, SectionTitle, SectionDesc } from '../components/Section';

import screenshot from '../../assets/images/screenshot-header.png';

function Header() {
  return (
    <Section className="Header">
      <div>
        <SectionTitle>
          내 손 안의
          <br />
          길잡이,
          <br />
          현지야
        </SectionTitle>
        <SectionDesc>
          나에게 딱 맞는 여행지 정보, 편리한 여행 계획표
          <br />
          당신의 여행에 현지야가 함께합니다.
        </SectionDesc>
      </div>
      <div>
        <img src={screenshot} alt="screenshot" />
      </div>
    </Section>
  );
}

export default Header;
