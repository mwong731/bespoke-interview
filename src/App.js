import styled from 'styled-components';
import { MembersList } from './components';
import Edit from './components/edit'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Root = styled.main`
  height: 100vh;
  width: 100%;
`;

const App = () => (

    <BrowserRouter>
      <Root>
        <Routes>
            <Route path="/" element={<MembersList />}/>
            <Route path="/edit" element={<Edit />}/>
        
        </Routes>
      </Root>
    
    </BrowserRouter>
 
);

export default App;
