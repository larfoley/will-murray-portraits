import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import Center from './Center';
import Container from './Container';
import config from './config';

const Wrapper = styled.div`
  padding: 8em 0;
  background-color: white;
`
const Title = styled.h1`
  font-size: 3.5em;
  margin-top: 0;
`
const Subtitle = styled.small`
  display: block;
  color: #2e2e2e;
  font-weight: normal;
  font-size: 1.3rem;
  text-align: center;
  max-width: 500px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`
const Link = styled.a`
  display: inline-block;
  color: initial;
  margin-right: 7px;
`
const SocialIcon = styled(FontAwesome)`
  color: #2e2e2e;

  &:hover {
    color: black;
  }
`

const AppIntro = () => {
  return (
    <Wrapper>
      <Container>
        <Center>
          <Title>
            William Murry Portraits
            <Subtitle>
              Artist from Dublin Ireland. If you like my art follow me. Peace and Love
              <FontAwesome name="heart" style={{fontSize: "16px", marginLeft: "5px"}}/>
            </Subtitle>
          </Title>
          <Link href={config.facebook}>
            <SocialIcon name="facebook-official" size="2x"/>
          </Link>
          <Link href={config.instagram}>
            <SocialIcon name="instagram" size="2x"/>
          </Link>
          <Link href={config.twitter}>
            <SocialIcon name="twitter-square" size="2x"/>
          </Link>
        </Center>
      </Container>
    </Wrapper>
  )
}

export default AppIntro;
