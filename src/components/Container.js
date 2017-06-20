import styled from 'styled-components';

const Container = styled.div`
  max-width: ${props => props.width ? props.width : "1000px"};
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`
export default Container;
