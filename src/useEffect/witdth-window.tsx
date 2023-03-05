import { useEffect, useState } from 'react';
import ItemList from '../context/item-list';

function WitdhWindow() {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    const triggerResize =()=>{
        setWindowWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize',triggerResize);
    })

  return (
    <div>
        {windowWidth}
    </div>

  );
}

export default WitdhWindow;