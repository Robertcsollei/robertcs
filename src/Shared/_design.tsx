import * as React from 'react';



function Design() {

    let array = ['HTML5', 'SASS / CSS5', 'TypeScript']

    let text = `/* Without the logic and structure the prototype would only be a plan.
    I would love to create engaging websites with high fluidity and rythm, but without these tools and
    technologies it would be impossible */  `

    let text1 = `    
     = "Most of the time I have created my projects in ASP.NET Core with C# and Object Oriented PRogramming. I love this tool since it is very flexible in terms that we can set up dynamic routes, code-first classes or MVC pattern pretty easily without spending extra work on configuring the settings. If the project goes without Entity framework TSQL is a way to go in SSMS, all of this is linked up with razor pages on the frontent and here we go. The first type of application is up and running."
    `
let newText = ` = "The second type of application would give us more freedom regarding where do we ant to host our website, or what kind of solution we would like to implement in it. And this is how the website which you are currently on is built. A node.js Rest API linked up with react-typescript on the front end, with a small, compact database."`

    let text2 = `/** I love to make single page applicatons. Mostly when they are somewhat innovative or ground braking. Altough I am naturarly gravitating towards almost all kinf od technology, and working on hard to make it loog better and be able to do more. */`


    return(
        <div className="inactiveBlock design">
             <div className="topBar"></div>
                <aside className="sideBar">
                    <ul className="dev-list">
                        <br/>
                    {array.map((item, index) => {
                        return <li key={index} className="dev-items"><span>A</span><h3>{item}</h3></li>
                    })}
                    </ul>
                    </aside>
                    <article className="body">
                <p className="comment">{text}</p>
                <p className="code"><span className="let">let</span><span className="var"> AppOne</span>{text1}</p>
                <p className="code"><span className="let">let</span><span className="var"> AppTwo</span>{newText}</p>
                <p className="comment">{text2}</p>
                </article>
                
        </div>
    );
}


export default Design;