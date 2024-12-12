// import { IoMenuSharp } from "react-icons/io5";
// import { HiOutlineLogout, HiOutlineBell, HiOutlineMail, } from "react-icons/hi";
// import { Nav, NavItemContainer } from "./TopBarStyled";


// export const TopBar = () => {

//   const onLogOutClickHandler = () => {
//     // aqui metere la logica para el login
//     localStorage.removeItem("login");
//   };

//   const onClickSideBarHandler = () => {
//     // Puedes manejar el estado del menu
//   };

//   return (
//     <Nav>
//       <NavItemContainer>
//         <IoMenuSharp  onClick={onClickSideBarHandler} />
//         <h2>Dashboard</h2>
//       </NavItemContainer>
//       <NavItemContainer>
//         <HiOutlineBell />
//         <HiOutlineMail />
//         <HiOutlineLogout onClick={onLogOutClickHandler} data-testid="logout__button"/>
//       </NavItemContainer>
//     </Nav>
//   );
// };

import { IoMenuSharp } from "react-icons/io5";
import { HiOutlineLogout, HiOutlineBell, HiOutlineMail } from "react-icons/hi";
import { Nav, NavItemContainer } from "./TopBarStyled";
import { useDispatch } from "react-redux"; // Importa useDispatch
import { signOut } from "../../Features/LoginSlice"; // Importa la acción signOut
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirección

export const TopBar = () => {
  const dispatch = useDispatch(); // Hook para despachar acciones
  const navigate = useNavigate(); // Hook para redirigir

  const onLogOutClickHandler = () => {
    // Despacha la acción para limpiar el estado y redirige al login
    dispatch(signOut());
    navigate("/login");
  };

  const onClickSideBarHandler = () => {
    // Puedes manejar el estado del menú lateral aquí
  };

  return (
    <Nav>
      <NavItemContainer>
        <IoMenuSharp onClick={onClickSideBarHandler} />
        <h2>Dashboard</h2>
      </NavItemContainer>
      <NavItemContainer>
        <HiOutlineBell />
        <HiOutlineMail />
        <HiOutlineLogout
          onClick={onLogOutClickHandler}
          data-testid="logout__button"
        />
      </NavItemContainer>
    </Nav>
  );
};

