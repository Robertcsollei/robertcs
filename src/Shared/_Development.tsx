import * as React from 'react';
import { transform } from 'framer-motion';

interface IModuleData{
    sideList: string[],
    section1: string,
    section2: string,
    section3: string,
    section4: string,
    darkMode: boolean,
    state: boolean,
    toggle: any
}


function Developemnt(props: IModuleData) {


    return(
        <div onClick={props.toggle} className={`${props.darkMode ? 'development activeBlock' : 'design inactiveBlock'}`} style={props.state ? {transform: 'scale(0.2)'} : {transform: 'scale(0.99)'}}>
            <div className="topBar"></div>
            <section className="dev-content">
                <aside className="sideBar">
                    <ul className="dev-list">
                        <br/>
                    {props.sideList.map((item, index) => {
                        return <li key={index} className="dev-items"><span>A</span><h3>{item}</h3></li>
                    })}
                    </ul>
                </aside>
                <article className="body">
                <p className={props.darkMode ? "comment" : "dark"}>{props.section1}</p>
                <p className={props.darkMode ? "code" : "dark"}>{props.darkMode && <div className="init"><span className="let">let</span><span className="var"> AppOne</span></div>}{props.section2}</p>
                <p className={props.darkMode ? "code" : "dark"}>{props.darkMode && <div className="init"><span className="let">let</span><span className="var"> AppTwo</span></div>}{props.section3}</p>
                <p className={props.darkMode ? "comment" : "dark"}>{props.section4}</p>
                </article>
            </section>
            
        </div>
    );
}


export default Developemnt;