import * as React from 'react';


import Slideshow from '../Shared/SlideShow'



function PortfolioItem(props: any) {

 let subTitles = ['Overview']
    
if(window.innerWidth > 1201){
subTitles = ['Overview',  'Development', 'Design']
}


let subDesc : string[] = [];
subDesc.push(props.location.state.desc)
subDesc.push(props.location.state.dev)
subDesc.push(props.location.state.des)
let images : string[] = []
 props.location.state.images.map((item : string) => {
    return images.push(item)
})
    return(
        <div className="full">
            <Slideshow images={images}/>
            <div className="PortfolioContent">
                
                <div className="header">
                    <h1>{props.location.state.title}</h1>

                    {props.location.state.title.includes("Asset") || window.innerWidth < 1201 ? 
                 null
                :
                <button onClick={() => window.open(`${props.location.state.link}`, '_blank')}  className="PItem-Button">{props.isDev ? 'GitHub' : 'Video'}</button>
            }
                   
                    
                </div>
               
                
                <section className="articles">

                {subTitles.map((title, index) => {
                    return <article key={index} className="subTitle">
                                <h2>{title}</h2>
                                <p>{subDesc[index]}</p>
                            </article>
                })}

                </section>
                
                
            </div>
        </div>
    );
}


export default PortfolioItem