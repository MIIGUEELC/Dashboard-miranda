

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ListComponent } from './pages/Rooms';
import { Login } from './pages/Login';
import { useSelector } from 'react-redux';
import { BookingList } from './pages/Bookings';

function App() {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para el login */}
        <Route path="/login" element={<Login />} />

        
        <Route
          path="/"
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          <Route path="rooms" element={<ListComponent />} />
          <Route path="bookings" element={<BookingList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




