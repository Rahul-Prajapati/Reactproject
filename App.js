{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
</div> */}

import React from 'react';
import ReactDOM from 'react-dom/client';


// const parent= React.createElement("div",{id:"parent"},
//      [React.createElement("div",{id:"child"},
//         [React.createElement("h1",{},"Hello World"),
//         React.createElement("h2",{},"I'm h2 tag")]
//         ),
//         React.createElement("div",{id:"child2"},
//             [React.createElement("h1",{},"I'm h1 tag'"),
//             React.createElement("h2",{},"I'm h2 tag")]
//         )]
//     );

// react element => object => htmlelement(render)
const parent = React.createElement(
    "h1",
    {id:"heading"},
    "React is again"
);

// JSX - HTML/XML like syntax
// JSX - is not HTML in JS

const jsxHeading = <h1 id="heading"> React using JSX </h1>;

console.log(parent);
console.log(jsxHeading);
// react object==>html browser understands

// const heading = React.createElement("h1", {id:"heading", xyz:"abc"},"Hello World in React!");

// component composition
const Title =function () {
    return (
    <h1 className='head' tabIndex="5">
        Namaste React using JSX
    </h1>
);
}

const HeadingComponent =() =>(
    <div id="container">
        <Title />
        <h1 className="heading"> Namaste React Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);