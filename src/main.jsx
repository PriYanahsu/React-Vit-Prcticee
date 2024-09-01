import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Priya from './Pkkk.jsx'


function Mypp(){
  const fun = "Having the Values"
  return(
    <>
    <h1>click me ! {fun}</h1>
      {value}
    </>
  )
}
const value = React.createElement(
  'a',
  {href = 'https://google.com'},
  'click Me !'
  )

const container = document.querrySeletor("#root");
const root = ReactDOM.createRoot(container);
root.render(
  <>
    <Priya />
    <Mypp />
    <App />
  </>
)
