import React from 'react';
import styled from 'styled-components';

const Heading2=styled.h2`
color:palveioletred;
font-family:monotype corsive`;

const Heading3=styled.h3`
color: cadetblue;
font-siz:45;
`;

var Home = React.createClass({
  render:function(){
    return(
      <div>
        <Heading2>This is the landing page.</Heading2>
        <Heading3>Here is a short discription about me for my portfolio.</Heading3>
      </div>
    );
  }
})

module.exports = Home;
