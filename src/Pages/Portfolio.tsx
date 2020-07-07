import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Square from '../Shared/_SquareGraphic'
import PPAge from '../Shared/PortfolioPage'
import Loading from '../Shared/_Loading'
import Buttons from '../Shared/_Buttons'


type IObjectType = {
    objectID: number,
    url: string,
    title: string
}


function Portfolio(){
   const [state, setState] = useState({count: 0})
   const [ObjectType, setObjectType] = useState<any>([]);
   const [refs, setRefs] = useState([])
   
 
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://robcs-backend.vercel.app/portfolio',
        );
   
        setObjectType(result);
        
        for(let i = 0; i< result.data.length; i++){
            let pi = document.getElementById(`${i}`)
            //@ts-ignore
            pi.addEventListener('click', ()=> {
               setState((state) => {
                   return {count: i}
               })
            })
        }
      };
   
      fetchData();
     
    }, []);

    function Count(entry: boolean){

        setState((state) => {
            if(entry){
                return {count: state.count + 1}
            }else{
                return {count: state.count - 1}
            }
            
        })
    }

    console.log(state.count)
    function incrementCount() {
        
        if(state.count < ObjectType.data.length - 1){
            Count(true)
        }
         
      }
      function decreaseCount() {
       
            if(state.count > 0){
               Count(false)
            }
            
         
      }
      

     
     

    return(
        <div className="container">


            
            <Square idName={'PortfolioSquare'} />


            {/* if data is loading */}
            {ObjectType.data === undefined &&      <Loading/>}
            {/* if loaded fill the fields */}
            {ObjectType.data !== undefined &&  <PPAge 
    
            Title = {ObjectType.data[state.count].Title} 
            Plot = {ObjectType.data[state.count].Plot}
            dev = {ObjectType.data[state.count].dev}
            des = {ObjectType.data[state.count].des}
            tags = {ObjectType.data[state.count].tags}
            link = {ObjectType.data[state.count].link}
            isDev = {ObjectType.data[state.count].isDev}
            Description = {ObjectType.data[state.count].Description}
            images = {ObjectType.data[state.count].images}
            thumbnails = {ObjectType.data[state.count].thumbnails}
            length = {ObjectType.data.length}
            active = {state.count}
            
    />     }
    


            <Buttons increase={incrementCount} decrease={decreaseCount}/>

    {/* <div className="ScrollButton">
        <span>Scroll</span>
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="1">
                <path className="path" fillRule="evenodd" clipRule="evenodd" d="M47.5555 14.5555L33 29.1109L18.4445 14.5555L14.5555 18.4445L33 36.8891L51.4445 18.4445L47.5555 14.5555ZM51.4445 32.1945L47.5555 28.3055L33 42.8609L18.4445 28.3055L14.5555 32.1945L33 50.6391L51.4445 32.1945Z" fill="white"/>
            </g>
        </svg>

    </div> */}
    
        </div>
    )
  }





export default Portfolio;