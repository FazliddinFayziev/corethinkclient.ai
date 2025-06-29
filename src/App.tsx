import type React from 'react';
import { AppProvider } from './context/context';
import { Auth, Dashboard, Landing } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signin' element={<Auth />} />
          <Route path='/main/*' element={<Dashboard />} />
          <Route path='/nav' element={<Main />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
};

export default App;