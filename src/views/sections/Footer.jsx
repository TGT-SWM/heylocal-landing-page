import styled from 'styled-components';

import { Section } from '../components/Section';

import logo from '../../assets/images/footer-logo.png';
import appStoreLogo from '../../assets/images/appstore.png';
import googlePlayLogo from '../../assets/images/googleplay.png';

function Footer() {
  return (
    <StyledFooter className="Footer">
      <Section>
        <div>
          <img src={logo} alt="logo" />
          <StyledText style={{ color: '#757679' }}>
            Software Maestro, Team TGT
            <br />
            주소 : 서울 강남구 테헤란로 311 아남타워빌딩 7층, SW마에스트로
            <br />
            문의 : tgt.heylocal@gmail.com
          </StyledText>
          <span>
            <StyledLink href="#">제휴·광고 문의</StyledLink>
            <StyledLink style={{ color: '#ff9900' }} href="#">
              개인정보 처리방침
            </StyledLink>
          </span>
        </div>
        <div>
          <StyledText style={{ fontWeight: '500' }}>현지야 앱 다운로드</StyledText>
          <span>
            <StyledLink>
              <img src={appStoreLogo} alt="appStoreLogo" />
            </StyledLink>
            <StyledLink>
              <img src={googlePlayLogo} alt="googlePlayLogo" />
            </StyledLink>
          </span>
        </div>
      </Section>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0 100px;
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
  margin-right: 10px;
`;

export default Footer;
