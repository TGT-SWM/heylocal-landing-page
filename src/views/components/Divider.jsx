import styled from 'styled-components';

const Divider = styled.hr`
  border-top: 1px solid #d9d9d9;
  width: ${(props) => props.size ?? '100%'};
`;

export default Divider;
