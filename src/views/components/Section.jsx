import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h1`
  font-family: 'SBAggroB';
  font-size: 64px;
  font-weight: medium;
`;

export const SectionDesc = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  color: #797775;
  font-weight: medium;
`;
