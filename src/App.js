import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './config/AppRouter'
import './App.css'
import 'animate.css';
import Store from './store'

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  )
}

export default App
