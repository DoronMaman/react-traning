import { useEffect, useState } from 'react';

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