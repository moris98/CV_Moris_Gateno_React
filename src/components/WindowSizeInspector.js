
import React, {useLayoutEffect,useState} from 'react';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
  
function WindowSizeInspector(props) {
    const [width, height] = useWindowSize();
    if(width>1096){
        props.refe.current.checked=false
    }
    return ;
}
export default WindowSizeInspector;