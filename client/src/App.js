import { Routes, Route } from 'react-router-dom'
import Home from './views/home/home'
import Detail from './views/detail/detail'
import Form from './views/form/form'
import Error from './views/landing/error'
import Landing from './views/landing/landing'

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<Detail />} />
        <Route path='/form' element={<Form />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
