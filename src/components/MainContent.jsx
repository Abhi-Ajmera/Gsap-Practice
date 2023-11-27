import './MainContent.css';
import background from '../Images/background.jpg';
import { useEffect, useRef } from 'react';

const MainContent = ({ timeline }) => {
  let bgImg = useRef(null);

  useEffect(() => {
    timeline.to(bgImg, {
      delay: 1,
      duration: 2,
      x: '-50%',
      y: '-50%',
      opacity: 1,
    });
  });
  return (
    <>
      <div className='content'>
        <h1>Shop Now !</h1>
        <p>New Arrivals !</p>
      </div>
      <img
        src={background}
        alt='bg'
        className='backgroundImg'
        ref={(ele) => (bgImg = ele)}
      />
    </>
  );
};

export default MainContent;
