import { Home } from './page';
import {Login} from './page/login-page';
import {
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
