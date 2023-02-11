import {BrowserRouter, Routes, Route} from 'react-router-dom'
import List from '../pages/List'
import Pokemon from '../pages/Pokemon'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Pages/list" element={<List />}/>
          <Route path="/pokemon/:name" element={<Pokemon />}/> 
          <Route path="*" element={<List/>}/>       
        </Routes>
      </div>
    </BrowserRouter>
  );

}