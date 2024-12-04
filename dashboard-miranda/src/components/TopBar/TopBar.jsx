import { IoMenuSharp } from "react-icons/io5";
import { HiOutlineLogout, HiOutlineBell, HiOutlineMail, } from "react-icons/hi";
import { Nav, NavItemContainer } from "./TopBarStyled";


export const TopBar = () => {

  const onLogOutClickHandler = () => {
    // aqui metere la logica para el login
    localStorage.removeItem("login");
  };

  const onClickSideBarHandler = () => {
    // Puedes manejar el estado del menu
  };

  return (
    <Nav>
      <NavItemContainer>
        <IoMenuSharp  onClick={onClickSideBarHandler} />
        <h2>Dashboard</h2>
      </NavItemContainer>
      <NavItemContainer>
        <HiOutlineBell />
        <HiOutlineMail />
        <HiOutlineLogout onClick={onLogOutClickHandler} data-testid="logout__button"/>
      </NavItemContainer>
    </Nav>
  );
};
