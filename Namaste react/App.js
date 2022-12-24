const heading1= React.createElement("div",{style:{color:"blue"},className:"headingOne"}
,"Namaste from React JS, heading1");

const heading2= React.createElement("div",{className:"headingTwo", style:{ fontSize:"50px"}},"Heading2");
const realContent=React.createElement("div",{className:"realContent", style:{ fontSize:"20px"}},
"HI! It's me , I am the problem it's me.");

const container= React.createElement("div",{},[heading1,heading2,realContent]);
const rootElement= ReactDOM.createRoot(document.getElementById("root"));


rootElement.render(container);