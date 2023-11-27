import { useEffect, useRef } from 'react';
import './Header.css';

const Header = ({ timeline }) => {
  let logo = useRef(null);
  let menu_items = useRef(null);

  useEffect(() => {
    timeline.from(logo, {
      delay: 0.5,
      duration: 1,
      opacity: 0,
      y: 100,
    });
    timeline.from(
      menu_items,
      {
        duration: 1,
        opacity: 0,
        y: 100,
      },
      '-=0.5'
    );
  });

  return (
    <>
      <div className='header'>
        <div
          className='logo'
          ref={(ele) => (logo = ele)}
        >
          Logo
        </div>
        <div
          className='menu'
          ref={(ele) => (menu_items = ele)}
        >
          <ul>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
