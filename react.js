import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client" 

//tener en cuenta que REACT es javascritp no es html aunque muchas expresiones se escriben parecidas
//ejemplo: en html y react(jsx) vale igual la siguiente expresión: <button data-id="123"></button>
//en cambio la siguiente expresion se escribe diferente <button tab-index="1"> en html pero en react(jsx) <button tabIndex="1">

const appDomElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDomElement)

const h = React.createElement

const button1 = h('button', {"data-id":123}, 'BT 1')
const button2 = h('button', {"data-id":456}, 'BT 2')
const button3 = h('button', {"data-id":789}, 'BT 3')

const div1 = h('div', null, [button1, button2, button3]) //forma incorrecta
const app = h(React.Fragment, null, [button1, button2, button3]) //forma Correcta

root.render(app)

/* JSX

<React.Fragment>
    <button data-id="123"> Button1 </button>
    <button data-id="456"> Button1 </button>
    <button data-id="789"> Button1 </button>
</React.Fragment>

const nombre = "mi nombre"

const element = <strong> Numero Aleatorio  { Math.Random()} </strong> //entre llaves se pude poner expresiones (funciones, variables o constantes) pero NO declaraciones

*/