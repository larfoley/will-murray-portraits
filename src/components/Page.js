import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const PageTitle = styled.h1`
  text-align: center;
  margin: 1.5em;

  &::after {
    content: "";
    display: block;
    width: 70px;
    height: 3px;
    background-color: black;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8px;
  }

`

const Page = (props) => {
  return (
    <Container>
      <PageTitle>{props.title}</PageTitle>
      {props.children}
    </Container>
  )
}

export default Page;
