// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { Layout } from "./components/Layout/Layout"

// function App() {
  

//   return (
//     <>
//        <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Layout />}>
                    
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ListComponent } from "./pages/Rooms";
// import Dashboard from "./pages/Dashboard";
// import Bookings from "./pages/Bookings";
// import Contact from "./pages/Contact";
// import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta raíz que renderiza Layout */}
        <Route path="/" element={<Layout />}>
          {/* Rutas anidadas dentro de Layout */}
          {/* <Route index element={<Dashboard />} /> Página principal (Dashboard) */}
          <Route path="rooms" element={<ListComponent />} />
          {/* <Route path="bookings" element={<Bookings />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users" element={<Users />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

