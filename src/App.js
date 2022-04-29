import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InventoryItem from './components/InventoryItem/InventoryItem';
import ManageInventories from './components/ManageInventories/ManageInventories';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/inventories' element={<ManageInventories />} />
                <Route path='/inventory/:id' element={<InventoryItem />} />
                <Route path='/add-item' element={<AddItem />} />
            </Routes>
        </>
    );
}

export default App;
