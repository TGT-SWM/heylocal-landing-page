import styled from 'styled-components';

export function Section({ color, children }) {
  return (
    <SectionContainer className="Section" color={color}>
      <div className="SectionContent">{children}</div>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  background-color: ${(props) => props.color ?? '#ffffff'};

  .SectionContent {
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
`;

export const SectionTitle = styled.h1`
  font-family: 'SBAggroB';
  font-size: 64px;
  font-weight: medium;
  color: ${(props) => props.color ?? '#000000'};
`;

export const SectionDesc = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  color: #797775;
  font-weight: medium;
  color: ${(props) => props.color ?? '#000000'};
`;
