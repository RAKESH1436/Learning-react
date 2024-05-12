function react(reactElement, container){
    const domElemet=document.createElement(reactElement.type)
    domElemet.innerHTML=reactElement.Children
    domElemet.setAttribute('href', reactElement.props.href)
    domElemet.setAttribute('target',reactElement.props.target)
    container.appendChild(domElemet)


}



const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'-blank'
    },
    Children:'click me to visit google'
}
const mainContainer=document.querySelector('#root')

react(reactElement,mainContainer)