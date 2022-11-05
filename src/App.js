import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import SilhouetteMain from './Pages/SilhouetteMain';
import PatternMain from './Pages/PatternMain';
import FabricMain from './Pages/FabricMain';
import CategoryMain from './Pages/CategoryMain';
import BrandsMain from './Pages/BrandsMain';

import { PrivatePage, PrivateColor } from './Routes/PrivageRoutes';

import CategoryDetail from './Pages/detailfolder/CategoryDetail';

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout authenticate={authenticate} setAuthenticate={setAuthenticate}></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='login' element={<Login setAuthenticate={setAuthenticate}></Login>}></Route>
          <Route path='signup' element={<Signup></Signup>}></Route>
          <Route path='mypage' element={<PrivatePage authenticate={authenticate}></PrivatePage>}></Route>
          <Route path='silhouette' element={<SilhouetteMain></SilhouetteMain>}></Route>
          <Route path='pattern' element={<PatternMain></PatternMain>}></Route>
          <Route path='fabric' element={<FabricMain></FabricMain>}></Route>
          <Route path='category' element={<CategoryMain></CategoryMain>}>
            <Route path=':id' element={<CategoryDetail></CategoryDetail>}></Route>
          </Route>
          <Route path='brands' element={<BrandsMain></BrandsMain>}></Route>
          <Route path='personal' element={<PrivateColor authenticate={authenticate}></PrivateColor>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
