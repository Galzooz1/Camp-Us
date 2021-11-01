import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const WrapperStyle = styled.div`
height:600px;
display: flex;
justify-content: center;
align-items: center;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;

const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

// height: '400px',
// // background: '#364d79',
// display: 'flex',
// alignItems: 'center',
// justifyContent: 'center',
// backgroundImage: "url(https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_1280.jpg)",
// backgroundPosition: 'center',
// backgroundSize: 'cover',
// backgroundRepeat: 'no-repeat'

const Strip = (props) => {
  return (
    <Carousel autoplay>
      <div>
        <WrapperStyle style={{backgroundImage:"url(https://images.pexels.com/photos/4715493/pexels-photo-4715493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}>
          <h3 style={contentStyle}>Travel Around the globe</h3>
        </WrapperStyle>
      </div>
      {/*  */}
      <div>
        <WrapperStyle style={{backgroundImage:"url(https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}>
          <h3 style={contentStyle}>Discover new places</h3>
        </WrapperStyle>
      </div>
      {/*  */}
      <div>
        <WrapperStyle style={{backgroundImage:"url(https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}>
          <h3 style={contentStyle}>Meet new people</h3>
        </WrapperStyle>
      </div>
      {/*  */}
      <div>
        <WrapperStyle style={{backgroundImage:"url(https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}>
          <h3 style={contentStyle}>Start your adventure, Now!</h3>
        </WrapperStyle>
      </div>
    </Carousel>
  )
}

export default Strip
