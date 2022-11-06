import { Section } from '../components/Section';

import logo from '../../assets/images/footer-logo.png';
import appStoreLogo from '../../assets/images/appstore.png';
import googlePlayLogo from '../../assets/images/googleplay.png';
import styled from 'styled-components';

function Footer() {
  return (
    <StyledFooter className="Footer">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Section>
        <div>
          <StyledText style={{ color: '#757679' }}>
            Software Maestro, Team TGT
            <br />
            주소 : 서울 강남구 테헤란로 311 아남타워빌딩 7층, SW마에스트로
            <br />
            문의 : tgt.heylocal@gmail.com
          </StyledText>
        </div>
        <div>
          <StyledText>현지야 앱 다운로드</StyledText>
          <span>
            <img src={appStoreLogo} alt="appStoreLogo" />
            <img src={googlePlayLogo} alt="googlePlayLogo" />
          </span>
        </div>
      </Section>
      <span>
        <StyledLink href="#">제휴·광고 문의</StyledLink>
        <StyledLink style={{ color: '#ff9900' }} href="#">
          개인정보 처리방침
        </StyledLink>
      </span>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  max-width: 1000px;
  margin: 0 auto;
`;

const StyledText = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  color: #111111;
`;

const StyledLink = styled.a`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  color: #111111;
  text-decoration: none;
`;

export default Footer;
