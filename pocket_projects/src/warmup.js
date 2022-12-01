
const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
  let p = document.createElement('p');
  p.innerHTML = string;
  let children = Array.from(htmlElement.children)
  // children.forEach(){
    
  // }
  htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);
export default htmlGenerator; //export default only imports one thing. pairs with import htmlGenerator from "./warmup";