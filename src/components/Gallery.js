import React from 'react';
import styled from 'styled-components';

const imgs = [
  {
    src: "https://scontent-amt2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/18013749_1124931204320194_1175560517742231552_n.jpg",
    alt: "foo"
  },
  {
    src: "https://scontent-amt2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/17437938_1868263766729734_4720341965097402368_n.jpg"
  },
  {
    src: "https://scontent-ams3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c183.0.713.713/12716736_1078220098888162_828171429_n.jpg"
  },
  {
    src: "https://scontent-ams3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.100.800.800/10535136_1031595976908122_1978086507_n.jpg",
    alt: "foo"
  },
  {
    src: "https://scontent-ams3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11887231_1648324882082177_1714767439_n.jpg"
  },
  {
    src: "https://scontent-ams3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11887280_903353776426849_156462576_n.jpg"
  },
  {
    src: "https://scontent-ams3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11324488_940740032653270_1193092604_n.jpg",
    alt: "foo"
  },
  {
    src: "https://scontent-amt2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/17437938_1868263766729734_4720341965097402368_n.jpg"
  },
  {
    src: "https://scontent-ams3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16110572_367124283669333_831552264605794304_n.jpg"
  }
]

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

const Gallery = () => {

  return (
    <div className="Gallery">
      <ul>
        {imgs.map((img, i) => {
          return (
            <GalleryItem key={i}>
              <img src={img.src} alt={img.alt} width="100%"/>
            </GalleryItem>
          )
        })}
      </ul>
    </div>
  )

}

export default Gallery;
