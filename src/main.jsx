import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Store } from "./redux/Store.js"
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <App />
    <Toaster position="top-center" />
    </Provider>
  </StrictMode>,
)
