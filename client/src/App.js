import './App.css';
import { Router } from '@reach/router';
import AllProductmanager from './components/AllProductmanager';
import CreateProductShelter from './components/CreateProductmanager';
import DetailProductmanager from './components/DetailProductmanager';
import EditProductmanager from './components/EditProductmanager';
import ProductHeader from './components/ProductHeader';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductHeader default/>
        <AllProductmanager path="/productmanager/" />
        <CreateProductShelter path="/productmanager/new" />
        <DetailProductmanager path="/productmanager/:id" />
        <EditProductmanager path="/productmanager/:id/edit"/>
      </Router>

    </div>
  );
}

export default App;
