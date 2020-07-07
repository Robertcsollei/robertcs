import * as React from 'react';

interface propsInterface {
    idName? : string,
    isCircle? : boolean
}


function Square(props : propsInterface){

    

    return(
<div >
        {props.isCircle && <img id={props.idName} src="./circle.svg" alt='circle'  className="squareBase"/>}


        {!props.isCircle && 
         <div id={props.idName} className={"squareBase squareBorder"} ></div>}
</div>

       

    );
}



export default Square;