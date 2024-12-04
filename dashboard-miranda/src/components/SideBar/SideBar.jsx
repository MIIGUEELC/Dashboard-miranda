import logo from "../../assets/logo.png"
import userPhoto from "../../assets/userPhoto.png"
import {
  TbLayoutDashboard,
  TbKey,
  TbCalendarEvent,
  TbMessageCircle,
} from "react-icons/tb";
import { MdPersonOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  Copyright,
  LinkContainer,
  Logo,
  MenuLink,
  SideBarUserImage,
  User,
  WrapperSideBar,
} from "./SideBarStyled";



export const SideBar = () => {
  const navigate = useNavigate();
 

  const clickHandler = () => {
    console.log(state.user)
    navigate(`/users/${state.user}`);
  };

  return (
    
    <>
      <WrapperSideBar>
        <Logo direction={"row"}>
          <img src={logo} alt="Logo" />
          
        </Logo>
        <LinkContainer>
          <li>
            
            <MenuLink  to={"/"}><TbLayoutDashboard />Dashboard</MenuLink>
          </li>

          <li>
            
            <MenuLink to={"/rooms"}><TbKey />Rooms</MenuLink>
          </li>

          <li>
            
            <MenuLink to={"/bookings"}><TbCalendarEvent />Bookings</MenuLink>
          </li>

          <li>
           
            <MenuLink to={"/contact"}> <TbMessageCircle />Contact</MenuLink>
          </li>

          <li>
            
            <MenuLink to={"/users"}><MdPersonOutline />Users</MenuLink>
          </li>
        </LinkContainer>
        <User>
        <SideBarUserImage src={userPhoto}>
           
        </SideBarUserImage>
          <h5>Miguel covarrub ias</h5>
          <p>Miiguel@1231-gmail.com</p>
          <button onClick={() => clickHandler()}>View User</button>
        </User>
        
        <Copyright>
          <h6>Travl Hotel Admin Dashboard</h6>
          <p>2023 All Rights Reserved</p>
        </Copyright>
      </WrapperSideBar>
    </>
  );
};