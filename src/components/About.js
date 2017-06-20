import React from 'react';
import styled from 'styled-components';
import Page from './Page';
import Container from './Container';

const Text = styled.p`
  padding-left: 1em;
`
const About = () => {
  return (
    <Page title="About" style={{textAlign: "center"}}>
      <Container width="600px">
        {/* <Img src="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-1/p160x160/17991919_10154442562118093_5425362808662576641_n.jpg?oh=d809dfc7ceb06441588123b077ff8075&oe=59CF4FAE" alt=""/> */}
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </Container>
    </Page>
  )
}

export default About;
