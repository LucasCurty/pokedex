import List from './Pages/List';
import View from './Pages/View';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './Styles/App.scss'

function App() {
 

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Pages/list" element={<List />}/>
          <Route path="/view/:name" element={<View />}/> 
          <Route path="*" element={<List/>}/>       
        </Routes>
      </div>
    </BrowserRouter>
  );

}
export default App;
