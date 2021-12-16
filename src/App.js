import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './container/Home/Home';
import ShopList from './container/ShopList/ShopList';

function App() {
  return (
  <div className="App">
    <Router>
      
       <Routes>
         <Route path="/" element = {<Home />} />
         <Route path="/shoplist" element = {<ShopList />} />
         <Route >404 Not Found</Route>
       </Routes>  
    </Router>
    </div>
  );
}

export default App;
