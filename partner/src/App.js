import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../src/components/constant/theme/darkTheme';
import lightTheme from '../src/components/constant/theme/lightTheme';
import Background from './components/constant/Background/Background';
import Home from './page/Home';
import { Main } from './page/Main';
import { Promotions } from './components/Promotions/Promotions';
function App() {
  const [value, setValue] = useState(false);
  const theme = value ? darkTheme : lightTheme;
  const themeChange = () => {
    setValue(!value);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Routes>
          <Route path="/" element={<Home themeChange={themeChange} value={value} />} >
            <Route index element={<Main />} /> 
            <Route path='/promotions' element={ <Promotions/>} />
        </Route>
        </Routes>
      </Background>
    </ThemeProvider>
  );
}

export default App;
