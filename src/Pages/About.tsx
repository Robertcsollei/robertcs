import React, {useEffect, useState} from 'react';

import {onLoad} from '../js/scaler'

import SociamMediaIcons from '../Shared/_SociamMedia';
import Square from '../Shared/_SquareGraphic'

import Development from '../Shared/_Development';
import Design from '../Shared/_design';

function About(){

    let [state, setState] = useState(false)

    let array = ['HTML5', 'SASS / CSS5', 'TypeScript']

    let text = `/* Without the logic and structure the prototype would only be a plan.
    I would love to create engaging websites with high fluidity and rythm, but without these tools and
    technologies it would be impossible */  `

    let text1 = `    
     = "Most of the time I have created my projects in ASP.NET Core with C# and Object Oriented PRogramming. I love this tool since it is very flexible in terms that we can set up dynamic routes, code-first classes or MVC pattern pretty easily without spending extra work on configuring the settings. If the project goes without Entity framework TSQL is a way to go in SSMS, all of this is linked up with razor pages on the frontent and here we go. The first type of application is up and running."
    `
let newText = ` = "The second type of application would give us more freedom regarding where do we ant to host our website, or what kind of solution we would like to implement in it. And this is how the website which you are currently on is built. A node.js Rest API linked up with react-typescript on the front end, with a small, compact database."`

    let text2 = `/** I love to make single page applicatons. Mostly when they are somewhat innovative or ground braking. Altough I am naturarly gravitating towards almost all kinf od technology, and working on hard to make it loog better and be able to do more. */`


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
                <p>desctiption</p>
                <SociamMediaIcons/>
            </section>
            <section className="aboutContent">
                <div className="line"></div>
                <div className="skills">
                    <div className="buttons">
                        <button onClick={SwitchUpPlus} id="dv" className={state ? 'activeBtn' : 'inActiveBtn'}>Development</button>
                        <button onClick={SwitchUpMinus} id="ds" className={!state ? 'activeBtn' : 'inActiveBtn'}>Design</button>
                    </div>
                    <div className="elements">

                        <Development toggle={SwitchUpPlus} sideList={array} section1={text} section2={text1} section3={newText} section4={text2} darkMode={true} state={state}/>
                        <Development toggle={SwitchUpMinus} sideList={array} section1={text} section2={text1} section3={newText} section4={text2} darkMode={false} state={!state}/>
                    </div>

                </div>
            </section>
        </div>
    );
}


export default About;