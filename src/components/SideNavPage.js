import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function SideNavPage() {
  return (
    <div>
      <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i className="" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Alejandra de los Santos
                <span>Developer Expert</span>
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Perfil
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Ofertas de empleo
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Buscador Avanzado
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Biblioteca de CV's
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Favoritos
            </NavText>
        </NavItem>
        
    </SideNav.Nav>
</SideNav>
    </div>
  );
}

export default SideNavPage;



