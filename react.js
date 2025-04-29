import React from "https://esm.sh/react@18.2.0" 
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client" 

const appDomElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDomElement)

const button = React.createElement('button', null, 'me gusta')

//para crear un elemento se poner (1ro el tipo de elemento, 2do los atributos, 3ro el texto)
//const button = React.createElement('button', null, 'me gusta')
root.render('esto se ha rendereizado')

