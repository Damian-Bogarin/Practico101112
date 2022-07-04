import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';


const Square = () => {

    const [intervalo, setIntervalo] = useState();
    
    let colorRed = 0;
    let colorGreen = 0;
    let colorBlue = 0;

    const initialSquare = {
        backgroundColor: `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`,
        width: '255px',
        height: '255px'
    }

    const [color, setColor] = useState(initialSquare);

    

    const ChangeColor = () => {
        
        setColor({ backgroundColor: `rgb(${ Math.random() * 255 }, ${Math.random() * 255}, ${Math.random() * 255})`,
        width: '255px',
        height: '255px'})
        
    }

   const interval = () => {
     setIntervalo(setInterval(ChangeColor, 1000)) 
   }

   const stopInterval= () => {
    setIntervalo(clearInterval(intervalo)) 
   }


    


    return (
        <div>
            <div style={color} onMouseEnter={() => {interval()}} onDoubleClick={() => {stopInterval()}} onMouseLeave={() => {stopInterval()}} >


            </div>

        </div>
    );
};


Square.propTypes = {

};


export default Square;
