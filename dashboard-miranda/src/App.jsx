

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Layout } from "./components/Layout/Layout";
// import { ListComponent } from "./pages/Rooms";
// // import Dashboard from "./pages/Dashboard";
// // import Bookings from "./pages/Bookings";
// // import Contact from "./pages/Contact";
// // import Users from "./pages/Users";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
        
//         <Route path="/" element={<Layout />}>
         
//           {/* <Route index element={<Dashboard />} /> Página principal (Dashboard) */}
//           <Route path="rooms" element={<ListComponent />} />
//           {/* <Route path="bookings" element={<Bookings />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="users" element={<Users />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ListComponent } from "./pages/Rooms";
import { Login } from "./pages/Login";

import { useSelector } from "react-redux"; 

function App() {
  // Usamos useSelector para obtener el estado de autenticación
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  return (
    
      <BrowserRouter>
        <Routes>
          {/* Ruta para el login */}
          <Route path="/login" element={<Login />} />

          {/* Ruta raíz que muestra el Layout solo si el usuario está autenticado */}
          <Route
            path="/"
            element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
          >
            {/* Rutas anidadas dentro de Layout */}
            <Route path="rooms" element={<ListComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;






