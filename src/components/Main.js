import React, {useState} from 'react';
import Home from './Home';
import SheSaidYes from './SheSaidYes';

const Main = () => {

    const [status, setStatus] = useState(false);
    const [point, setPoint] = useState('translate(0px,0px)');

    const handleClick = (e) => {
      e.preventDefault();
      setStatus(!status);
      console.log(status);
    }
    const virus = (e) => {
        e.preventDefault();
        let btn = document.getElementById('fault');
        let rect = btn.getBoundingClientRect();
        console.log(rect);
        let left = Math.floor(Math.random() * rect.left);
        let right = Math.floor(Math.random() * rect.right);

        let top = Math.floor(Math.random() * rect.top);
        let bottom = Math.floor(Math.random() * rect.bottom);
        setPoint(`translate(${-left}px,${-top}px)`);
        console.log(point);
    }

    return (
      <div className="App">
       {!status ? <Home/> : <SheSaidYes/>}
       {
        !status ? (
        <div className='button-holder'>
            <button className='text btn' onClick={(e) => handleClick(e)}>Yes</button>
            <button className='text btn-no' style={{transform: point}} id='fault' onClick={(e) => virus(e)}>No</button>
          </div>
       
     
        ) : null
        
       }
       </div>
        
    );

}

export default Main;
