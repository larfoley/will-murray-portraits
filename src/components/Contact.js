import React from 'react';
import styled from 'styled-components';
import Page from './Page';
import Container from './Container';

const Label = styled.label`
  display: block;
`
const Input = styled.input`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 1em;
`
const Button = styled.input`
  background-color: black;
  padding: 1.2em 2.2em;
  color: white;
  font-weight:;
  text-transform: uppercase;
  border: none;
  outline: none;
  margin: 1em 0;
`
const Contact = () => {
  return (
    <Page title="Contact">
      <Container width="600px">
        <form className="contact-form" action="index.html" method="post">
          <Label for="name">Name</Label>
          <Input type="text" name="name" value=""/>
          <Label for="email">Email</Label>
          <Input type="email" name="email" value=""/>
          <Label for="">Message</Label>
          <Textarea name="name" rows="8" cols="80"></Textarea>
          <Button type="button" value="Send Message"/>
        </form>
      </Container>
    </Page>
  )
}

export default Contact;
