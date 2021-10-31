import React from 'react';
import { Carousel } from 'antd';

const wrapperStyle = {
  height: '400px',
  // background: '#364d79',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: "url(https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_1280.jpg)",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const Strip = (props) => {
  return (
    <Carousel autoplay>
      <div>
        <div style={wrapperStyle}>
          <h3 style={contentStyle}>1</h3>
        </div>
      </div>
      {/*  */}
      <div>
        <div style={wrapperStyle}>
          <h3 style={contentStyle}>2</h3>
        </div>
      </div>
      {/*  */}
      <div>
        <div style={wrapperStyle}>
          <h3 style={contentStyle}>3</h3>
        </div>
      </div>
      {/*  */}
      <div>
        <div style={wrapperStyle}>
          <h3 style={contentStyle}>4</h3>
        </div>
      </div>
    </Carousel>
  )
}

export default Strip
