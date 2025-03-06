import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from './Hell'
import {BrowserRouter} from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   

    <BrowserRouter>
    <Apps />
    </BrowserRouter>
  </StrictMode>,
)



