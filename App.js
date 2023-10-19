
// Render Hellow World
// const header = React.createElement("h1",
// {id: "header", xyz: "abc"},
// "Hellow World");
// console.log(header)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(header);


// Render Nested Div
/* <div id="parent">
    <div id="child">
        <h1>Im H1 tag</h1>
    </div>
</div> */

// /Answer
// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement("div", {id: "child"},
//     React.createElement("h1", {}, "Im H1 Tag")
//     )
//     );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
    


// Render Nested Div having siblings
/* <div id="parent">
    <div id="child">
        <h1>Im H1 tag</h1>
        <h2>Im H2 tag </h2>
    </div>
</div> */

// // /Answer
// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement("div", {id: "child"},
//     [React.createElement("h1", {}, "Im H1 Tag"),
//     React.createElement("h2", {}, "Im H2 Tag"),
//     ]
//     )
//     );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



    