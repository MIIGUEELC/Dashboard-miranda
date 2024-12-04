import { Outlet, useLocation, useMatch } from "react-router-dom";
import { TopBar } from "../TopBar/TopBar";

import { SideBar } from "../SideBar/SideBar";
import { Container, Content, LeftMenu, RightSection } from "./LayoutStyled";


export const Layout = () => {
 
  return (
    <>
      <Container>
        <LeftMenu open={open}>
          <SideBar />
        </LeftMenu>
        <RightSection open={open}>
        <TopBar/>
          <Content>
            <Outlet></Outlet>
          </Content>
        </RightSection>
      </Container>
    </>
  );
};