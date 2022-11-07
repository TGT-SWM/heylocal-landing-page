import styled from 'styled-components';

import { Section, SectionImage } from '../components/Section';

import teamImg1 from '../../assets/images/team-1.png';
import teamImg2 from '../../assets/images/team-2.png';
import institutionImg from '../../assets/images/logo-institution.png';
import Divider from '../components/Divider';

function Team() {
  return (
    <div id="about-us" className="Team" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <TeamTitle />
      <TeamDesc />
      <AppDesc />
    </div>
  );
}

function TeamTitle() {
  return (
    <Section>
      <StyledTitle className="TeamTitle">Team</StyledTitle>
    </Section>
  );
}

function TeamDesc() {
  return (
    <Section className="TeamDesc">
      <div>
        <SectionImage src={teamImg1} alt="teamImg1" />
      </div>
      <div style={{ maxWidth: 400 }}>
        <Divider />
        <StyledSubTitle>TGT팀을 소개해주세요!</StyledSubTitle>
        <StyledDesc style={{ color: '#464749' }}>멤버 : 우태균, 최정인, 신우진</StyledDesc>
        <StyledDesc>
          소프트웨어 마에스트로 13기로 활동하고 있는 개발팀 TGT 입니다. 여행 산업에 관심이 많은
          대학생이 모여 현지야를 기획·개발하였습니다.
        </StyledDesc>
        <StyledDesc>
          3명의 팀멤버뿐 아니라, 든든한 멘토단과 함께 소프트웨어 마에스트로의 프로젝트를
          진행했습니다.
        </StyledDesc>
      </div>
    </Section>
  );
}

function AppDesc() {
  return (
    <Section className="AppDesc" paddingTop="40px">
      <div>
        <SectionImage src={teamImg2} alt="teamImg2" />
      </div>
      <div style={{ maxWidth: 400 }}>
        <div>
          <Divider />
          <StyledSubTitle>현지야는 어떤 어플인가요?</StyledSubTitle>
          <StyledDesc>
            여행 일정을 세우는데 어려움을 느꼈습니다. 여행지를 찾고, 맛집을 찾는 수고로움. 선정된
            장소를 최단거리로 이동하는 방법에 대한 고민을 해야했습니다. 이런 어려움을 해소하고자
            현지야를 기획했습니다.
          </StyledDesc>
          <StyledDesc>
            현지야는 여행자 조건에 부합하는 다양한 여행지를 현지인에게 추천 받는 서비스입니다.
          </StyledDesc>
          <StyledDesc>
            여행지를 찾는 수고를 덜을 수 있어요. 현재 시간과 위치를 기반으로 남은 여행 일정에 대한
            피드백을 받을 수 있고, 이동거리가 짧은 효율적인 여행 코스로 정렬하는 기능 등을 갖추고
            있습니다.
          </StyledDesc>
          <StyledDesc>‘내 손안의 가이드’를 생각하며 개발했습니다.</StyledDesc>
        </div>
        <div>
          <StyledDesc2>
            본 서비스는 소프트웨어 마에스트로(정보통신기획평가원)의 지원을 받아 개발되었습니다.
          </StyledDesc2>
          <SectionImage src={institutionImg} alt="institutionImg" />
        </div>
      </div>
    </Section>
  );
}

const StyledTitle = styled.h1`
  font-family: 'SBAggroB';
  font-size: 40px;
`;

const StyledSubTitle = styled.h2`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 22px;
  font-weight: medium;
`;

const StyledDesc = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: medium;
  color: #797775;
`;

const StyledDesc2 = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: medium;
  color: #111111;
`;

export default Team;
