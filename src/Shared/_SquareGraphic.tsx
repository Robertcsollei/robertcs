import * as React from 'react';

interface propsInterface {
    width?: number,
    height?:number,
    top?:number,
    left?: number
    isCircle? : boolean
}


function Square(props : propsInterface){

    let myId = 'none'
    if(props.isCircle){
        myId = 'circle'
    }

    return(
<div >
        {props.isCircle && <img src="./circle.svg" 
        style={{width: props.width + 'px',
         height: props.width + 'px',
          top: props.top +'%',
           left: props.left + '%' ,
        }}
        alt='circle'  className="squareBase"/>}


        {!props.isCircle && 
         <div id={myId} className="squareBase squareBorder" style={{width: props.width + '%',
         height: props.height + '%',
          top: props.top +'%',
           left: props.left + '%' ,

        }}></div>}
</div>

       

    );
}



export default Square;