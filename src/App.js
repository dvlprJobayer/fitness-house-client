import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InventoryItem from './components/InventoryItem/InventoryItem';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignUp from './components/SignUp/SignUp';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/inventories' element={<ManageInventories />} />
                <Route path='/inventory/:id' element={
                    <RequireAuth>
                        <InventoryItem />
                    </RequireAuth>
                } />
                <Route path='/manage' element={
                    <RequireAuth>
                        <ManageItems />
                    </RequireAuth>
                } />
                <Route path='/add-item' element={
                    <RequireAuth>
                        <AddItem />
                    </RequireAuth>
                } />
                <Route path='/my-items' element={
                    <RequireAuth>
                        <MyItems />
                    </RequireAuth>
                } />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
