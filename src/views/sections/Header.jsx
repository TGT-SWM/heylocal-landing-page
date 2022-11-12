import { Section, SectionTitle, SectionDesc, SectionImage } from '../components/Section';

import screenshot from '../../assets/images/screenshot-header.png';
import qrcode from '../../assets/images/qrcode.jpg';

function Header() {
  return (
    <Section className="Header" color="#faf7f2" paddingTop="100px" align="center">
      <div>
        <SectionTitle>
          내 손 안의
          <br />
          여행 길잡이,
          <br />
          현지야
        </SectionTitle>
        <SectionDesc>
          나에게 딱 맞는 여행지 정보, 편리한 여행 계획표
          <br />
          당신의 여행에 현지야가 함께합니다.
        </SectionDesc>
        <img src={qrcode} alt="qrcode" width="160" style={{ paddingTop: 50, paddingBottom: 30 }} />
      </div>
      <SectionImage src={screenshot} alt="screenshot" />
    </Section>
  );
}

export default Header;
