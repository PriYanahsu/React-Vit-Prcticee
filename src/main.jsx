import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Priya from './Pkkk.jsx'


function Mypp(){
  const fun = "Having the Values"
  return(
    <>
    <h1>click me ! {fun}</h1>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
    <Priya />
    <Mypp />
    <App />
  </StrictMode>,
  </>
)
