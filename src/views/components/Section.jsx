import styled from 'styled-components';

export function Section({ color, paddingTop, paddingBottom, align, children }) {
  return (
    <SectionContainer
      className="Section"
      color={color}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      align={align}
    >
      <div className="SectionContent">{children}</div>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.color ?? '#ffffff'};
  padding-top: ${(props) => props.paddingTop ?? '0px'};
  padding-bottom: ${(props) => props.paddingBottom ?? '0px'};

  .SectionContent {
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: ${(props) => props.align ?? 'flex-start'};

    & > div {
      margin-left: 15px;
      margin-right: 15px;
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;

      & > div {
        width: 100%;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
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

export const SectionImage = styled.img`
  width: 60%;
  vertical-align: middle;
  margin-left: 15px;
  margin-right: 15px;

  @media (max-width: 1000px) {
    max-width: 420px;
    margin: 0 auto;
  }
`;
