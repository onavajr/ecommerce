import './App.css';
import { Router } from '@reach/router';
import AllProductmanager from './components/AllProductmanager';
import CreateProductManager from './components/CreateProductmanager';
import DetailProductmanager from './components/DetailProductmanager';
import EditProductmanager from './components/EditProductmanager';
import ProductHeader from './components/ProductHeader';
import LoginRegistration from './views/LoginRegistration';
import ProductPage from './views/ProductPage';
import ThankYou from './views/ThankYou';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductHeader default/>
        <AllProductmanager path="/productmanager/" />
        <CreateProductManager path="/productmanager/new" />
        <DetailProductmanager path="/productmanager/:id" />
        <EditProductmanager path="/productmanager/:id/edit"/>
        <LoginRegistration path="/productmanager/login" />
        <ProductPage path="/productmanager/shop" />
        <ThankYou path="/thankyou/" />
      </Router>

    </div>
  );
}

export default App;
