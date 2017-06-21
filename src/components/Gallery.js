import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import imgs from './imgs';

const GalleryItem = styled.li`
  width: 100%;
  height: ;
  margin-bottom: 1em;
  margin-right: 3%;
  display: inline-block;
  background-color: white;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 1px 1px 2px 1px #ccc;
  transition: .3s;

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:hover {
    box-shadow: 3px 3px 4px 3px #ccc;
    cursor: pointer;
  }

  @media (min-width: 600px) {
    width: 31.333333333%
  }

`
const Overlay = styled.div`
  background-color: rgba(5,5,5, 0.8);
  padding: 0;
  overflow: auto;
  position: fixed;
  width: 100%;
  z-index: 100000;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  text-align: center;
`

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  color: white;
`
const Table = styled.div`
  display: table;
  width: 100%;
`
const Row = styled.div`
  display: table-row;
`
const Cell = styled.div`
  display: table-cell;
`

const Btn = styled.span`

`
const CloseBtn = Btn.extend`
  text-align: right;
  display: block;
  padding: 2em 0
`



class Gallery extends React.Component {
  constructor() {
    super()
    this.state = {
      imgs: imgs,
      imgIndex: 0,
      lightboxIsActive: false
    }
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  next() {
    if (this.state.lightboxIsActive) {
      this.setState(prevState => {
        if (prevState.imgIndex < prevState.imgs.length - 1) {
          console.log('next');
          return {
            imgIndex: prevState.imgIndex + 1
          }
        }
      })
    }
  }

  prev() {
    if (this.state.lightboxIsActive) {
      this.setState(prevState => {
        if (prevState.imgIndex > 0) {
          return {
            imgIndex: prevState.imgIndex - 1
          }
        }
      })
    }
  }

  open(index) {
    this.setState(prevState => {
      return {
        lightboxIsActive: true,
        imgIndex: index
      }
    })
  }

  close() {
    this.setState(prevState => {
      return { lightboxIsActive: false}
    })
  }

  render() {
    return (
      <div className="Gallery">
        <ul>
          {imgs.map((img, i) => {
            return (
              <GalleryItem key={i} onClick={() => {
                this.open(i);
              }}>
                <img src={img.src} alt={img.alt} width="100%"/>
              </GalleryItem>
            )
          })}
          {
            this.state.lightboxIsActive?
              <Overlay>
                <Wrapper>
                  <CloseBtn onClick={this.close}>
                    <FontAwesome name="times" size="2x"/>
                  </CloseBtn>
                  <Table>
                    <Row>
                      <Cell>
                        <Btn onClick={this.prev}>
                          <FontAwesome name="chevron-left" size="2x"/>
                        </Btn>
                      </Cell>
                      <Cell>
                        <img src={this.state.imgs[this.state.imgIndex].src} alt=""/>
                      </Cell>
                      <Cell>
                        <Btn onClick={this.next}>
                          <FontAwesome name="chevron-right" size="2x"/>
                        </Btn>
                      </Cell>
                    </Row>
                  </Table>
                </Wrapper>
              </Overlay> : null
          }
        </ul>
      </div>
    )
  }

}

export default Gallery;
