import React, {useState} from 'react';


import ProgressIcons from '../Shared/ProgressIcons'
import Buttons from '../Shared/_Buttons'

interface IImages{
    images: string[]
}




 
const Slideshow = (props : IImages) => {
const [state, setState] = useState({count: 0});

function Count(entry: boolean){

    setState((state) => {
        if(entry){
            return {count: state.count + 1}
        }else{
            return {count: state.count - 1}
        }
        
    })
}

function incrementCount() {
    
    if(state.count < props.images.length - 1){
           MoveItem(true);
        Count(true)
    }
     
  }
  function decreaseCount() {
   
        if(state.count > 0){
            MoveItem(false);
           Count(false)
        }
        
}



function MoveItem(operator: boolean) {
    const currentElement: HTMLElement | null = document.getElementById(`${state.count + 1}`);
    const currentElement1: HTMLElement | null = document.getElementById(`${state.count - 1}`);
    
    if(currentElement !== null) {



        if(operator){
            console.log('in')
            const prevElement: HTMLElement | null = document.getElementById(`${state.count}`);
            if(prevElement !== null){
                
                currentElement.style.left = '13.5%'
                prevElement.style.left = '-100%'
                console.log(state.count - 1, state.count + 1 )
                
            }else{
                currentElement.style.left = '-100%'
            }
        }
    }
    if(currentElement1 !== null){
        if(!operator){
            
            const prevElement: HTMLElement | null = document.getElementById(`${state.count}`);

            if(currentElement !== null){
                currentElement.style.left = '100%'
            } 

            if(prevElement !== null){
                currentElement1.style.left = '13.5%'
                prevElement.style.left = '-100%'
                prevElement.style.left = '100%'
                
                console.log(state.count - 1, state.count + 1 )
                
            }
            
            else{
                currentElement1.style.left = '-100%'
            }
        }
            
    
    }
}
  
    return (
      
            <div id="slider">

            {props.images.map((item, index) => {
                
                if(index === 0)   return <img  id={`${index}`} src={item} key={index} alt={item} className="SliderItem" style={{zIndex: props.images.length - index}}/>
                return <img  id={`${index}`} src={item} key={index} alt={item} className="SliderItem" style={{zIndex: props.images.length - index, left: '100%'}}/>
            })}
            <ProgressIcons length={props.images.length} active={state.count}/>
            
            <Buttons increase={incrementCount} decrease={decreaseCount} height={50}/>
            </div>


            
           
           
      
    )
}


export default Slideshow;