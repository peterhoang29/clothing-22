import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/sign-in/authentication";
import Checkout from "./routes/checkout/checkout";

import { checkUserSession } from './store/user/user.action'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from './routes/home/home';
import Shop from "./routes/shop/shop";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
    
}, [])
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>

    </Routes>
  );
}
  
export default App;
