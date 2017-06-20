import React from 'react';
import styled from 'styled-components';
// import FontAwesome from 'react-fontawesome';

const currentYear = new Date().getFullYear() || '2017';

const StyledFooter = styled.footer`
  padding: 2em 0;

  margin-top: 2em;
  text-align: center;
`

const Footer = (props) => {
  return (
    <StyledFooter>
      <p>William Murry Portraits &copy;{currentYear}</p>
      {/* <p>Facebook</p> */}
      {/* <FontAwesome name="facebook-official"/>&nbsp;
      <FontAwesome name="instagram"/>&nbsp;
      <FontAwesome name="twitter-square"/> */}
    </StyledFooter>
  )
}

export default Footer;
