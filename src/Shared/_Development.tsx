import * as React from 'react';

interface IModuleData{
    sideList: object[],
    section1: string,
    section2: string,
    section3: string,
    section4: string,
    darkMode: boolean,
    state: boolean,
    toggle: any
}

type ListItem = {
    Icon: string,
    Skill: string
}

function Developemnt(props: IModuleData) {

    console.log(props)

    return(
        <div onClick={props.toggle} className={`${props.darkMode ? 'development activeBlock' : 'design inactiveBlock'}`} style={props.state ? {transform: 'scale(0.2)', cursor: 'pointer'} : {transform: 'scale(0.99)'}}>
            <div className="topBar"></div>
            <section className="dev-content">
                <aside className="sideBar">
                    <ul className="dev-list">
                        <br/>
                        
                    {props.sideList.map((item, index) => {
                        //@ts-ignore
                        return <li key={index} className="dev-items"><img src={item.Icon} alt={item.Skill}/><h3>{item.Skill}</h3></li>
                    })}
                    </ul>
                </aside>
                {window.innerWidth > 1201 && 
                <article className="body">
                <p className={props.darkMode ? "comment" : "dark"}>{props.section1}</p>
                <p className={props.darkMode ? "code" : "dark"}>{props.darkMode && <div className="init"><span className="let">let</span><span className="var"> AppOne</span></div>}{props.section2}</p>
                <p className={props.darkMode ? "code" : "dark"}>{props.darkMode && <div className="init"><span className="let">let</span><span className="var"> AppTwo</span></div>}{props.section3}</p>
                <p className={props.darkMode ? "comment" : "dark"}>{props.section4}</p>
                </article>
                }
            </section>
            
        </div>
    );
}


export default Developemnt;