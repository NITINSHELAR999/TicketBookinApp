import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import { StateProvider } from './component/Contextapi/StateProvider.jsx';
import reducer,{initialState} from './component/Contextapi/Reducer.jsx';
ReactDOM.render(
 <React.StrictMode>
<StateProvider initialState={initialState} reducer={reducer}>
<App />
</StateProvider>
 </React.StrictMode>,
  document.getElementById('root')
)
