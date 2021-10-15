import styled from 'styled-components';

const Gap = styled.div`
  width: ${({ width }) => (width || '0px')};
  height: ${({ height }) => (height || '0px')}
`;

export default Gap;
