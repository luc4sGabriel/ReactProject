import React from 'react';

import Login from './pages/login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Login />
    </>
  );
}

export default App;
