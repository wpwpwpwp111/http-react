//import css from 'App.module.css';
//className={css.container}
import HomePage from '../../Pages/HomePage/HomePage.jsx';
import ProfilePage from '../../Pages/ProfilePage/ProfilePage.jsx';
import ProductsPage from '../../Pages/ProductsPage/ProductsPage.jsx'
import PaymentsPage from '../../Pages/PaymentsPage/PaymentsPage.jsx'
import { Route, Routes } from 'react-router-dom';
import Navigation from '../navigation/Navigation.jsx/'
export default function App() {
  return(
    <div> 

        <h1>react routing</h1>

        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/products" element={<ProductsPage />}/>
          <Route path="/payments" element={<PaymentsPage/>}/>
          <Route path="*" element={<div>Not Found Page</div>}/>
        </Routes>
    </div>
  );
}
/*import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound';
import { AppBar } from './AppBar';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
/*/

// for normal links <a href="goggle.com">Google.com</a> 