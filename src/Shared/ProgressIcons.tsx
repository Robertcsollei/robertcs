import * as React from 'react';


interface  IIconProps{
    length?: number,
    active?: number,

}

function ProgressIcons(props : IIconProps) {

    let NavIcons = []
    if(props.length !== undefined){
        for(let i =0; i< props.length; i++) {
            NavIcons.push(i)
    }


    }

    return(
        <div className="progressIcons">
           {NavIcons.map((item, index) => {
               return index === props.active ? 
               <div id={`${index}`} key={index} className="activeCircle">
                   <div className="activeCircleInner">
                       
                    </div>
                </div>
                :
                <div id={`${index}`} key={index} className="inactiveCircle"></div>
           })}
        </div>
    );
}


export default ProgressIcons;