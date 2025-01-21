
// bundller   bloob babble parsing

function customRender(reactElement,container){

/*
    const domElement = document.createElement(reactElement.type)
domElement.innerHTML  =reactElement.children
domElement.setAttribute('href',reactElement.props.herf)
domElement.setAttribute('target',reactElement.props.herf)
container.appendChild(domElement);
*/

const domElement = document.createElement(reactElement.type)
domElement.innerHTML= reactElement.children
for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
    
}
container.appendChild(domElement);

}

const reactElement = {
    type: 'a',
    props:{
        herf:'https://www.youtube.com/watch?v=FxgM9k1rg0Q&t=7006s',
        target: '_blank'
    },
    children : 'Click me'
}

const mainContainer =  document.querySelector('#root')

customRender(reactElement,mainContainer)