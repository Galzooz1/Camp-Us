import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    height: '400px',
    color: '#fff',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Strip = (props) => {
    return(
        <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    )
}

export default Strip