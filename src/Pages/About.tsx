import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {onLoad} from '../js/scaler'

import Loading from '../Shared/_Loading'

import SociamMediaIcons from '../Shared/_SociamMedia';
import Square from '../Shared/_SquareGraphic'

import Development from '../Shared/_Development';
import Design from '../Shared/_design';

function About(){

    let [state, setState] = useState(false)
    const [ObjectType, setObjectType] = useState<any>([]);
 
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://robcs-backend.vercel.app/about',
        );
   
        setObjectType(result);
      };
   
      fetchData();
    }, []);


    useEffect(() => {
        console.log('hello')
        onLoad()
    })


    function SwitchUpPlus(){
        if(state){
            setState(!state)
        }
    }
    function SwitchUpMinus(){
        if(!state){
            setState(!state)
        }
    }

    return(
        <div className="container">
            <Square width={300} top={10} left={80} isCircle={true} />
            <section className="aboutHeading">
                <h1>Robert Csöllei</h1>
                {typeof(ObjectType.data) !== "undefined"  &&  <p>{ObjectType.data[0].Description}</p>}
            </section>
            <section className="aboutContent">
                <div className="line"></div>
                <div className="skills">
                    <div className="buttons">   
                        <button onClick={SwitchUpPlus} id="dv" className={state ? 'activeBtn' : 'inActiveBtn'}>Development</button>
                        <button onClick={SwitchUpMinus} id="ds" className={!state ? 'activeBtn' : 'inActiveBtn'}>Design</button>
                    </div>
                    <div className="elements">
                    {ObjectType.data === undefined &&      <Loading/>}
           

                    {typeof(ObjectType.data) !== "undefined"  &&      <Development toggle={SwitchUpPlus} sideList={ObjectType.data[1].Skills} section1={ObjectType.data[1].caption} section2={ObjectType.data[1].p1} section3={ObjectType.data[1].p2} section4={ObjectType.data[1].caption1} darkMode={ObjectType.data[1].darkMode} state={state}/>}
                    {typeof(ObjectType.data) !== "undefined"  &&      <Development toggle={SwitchUpMinus} sideList={ObjectType.data[2].Skills} section1={ObjectType.data[2].caption} section2={ObjectType.data[2].p1} section3={ObjectType.data[2].p2} section4={ObjectType.data[2].caption1} darkMode={ObjectType.data[2].darkMode} state={!state}/>}
                         
                        
                    </div>

                </div>
            </section>
        </div>
    );
}


export default About;