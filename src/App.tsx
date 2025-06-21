import type React from 'react';
import { Auth, Dashboard, Landing } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/context';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signin' element={<Auth />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
};

export default App;
