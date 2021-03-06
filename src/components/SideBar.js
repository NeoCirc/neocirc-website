import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaBars, FaQuestion, FaHome, FaInfo, FaMailBulk } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [toggled, setToggled] = useState(false);
    const navigate = useNavigate();
    const clickSidebarContent = (path) => {
        if (collapsed === false) {
            setCollapsed(true);
        }
        if (toggled === true) {
            setToggled(false);
        }
        navigate(path);
    }
    return (<>
        {!toggled && <ToggleBurger>
            <ToggleButton onClick={() => {
                setToggled(!toggled);
                if (collapsed === true) {
                    setCollapsed(false);
                }
            }}>
                <FaBars />
            </ToggleButton>
        </ToggleBurger>}
        <SideBarWrap
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
        >
            <SideBarHeaderWrap>
                { collapsed ? null : <SideBarHeaderText>NeoCirc</SideBarHeaderText> }
                <Burger onClick={() => {
                    if (toggled) {
                        if (collapsed === false) {
                            setCollapsed(true);
                        }
                        setToggled(!toggled);
                    } else {
                        setCollapsed(!collapsed);
                    }
                }}>
                    <FaBars />
                </Burger>
            </SideBarHeaderWrap>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon={<FaHome />} onClick={() => clickSidebarContent('/')}>Home</MenuItem>
                    <MenuItem icon={<FaInfo />} onClick={() => clickSidebarContent('/about')}>About Us</MenuItem>
                    <SubMenu title="FAQ" icon={<FaQuestion />} >
                        <MenuItem onClick={() => clickSidebarContent('/GenFAQPage')}>General</MenuItem>
                    </SubMenu>
                    <MenuItem icon={<FaMailBulk />} onClick={() => clickSidebarContent('/contact')}>Contact Us!</MenuItem>
                </Menu>
            </SidebarContent>
            {collapsed ? null : <SidebarFooter>
                <FooterWrap>NeoCirc LLC</FooterWrap>
            </SidebarFooter>}
        </SideBarWrap>
        {!collapsed && <OverlayDiv onClick={() => {
            if (toggled) {
                if (collapsed === false) {
                    setCollapsed(true);
                }
                setToggled(!toggled);
            } else {
                setCollapsed(!collapsed);
            }
        }} />}
    </>);
}

const SideBarWrap = styled(ProSidebar)`
    height: 100vh;
    position: fixed;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FooterWrap = styled.div`
    padding: 20px;
`;

const SideBarHeaderText = styled.h2`
    padding: 0px 20px 0px 30px;
`;

const SideBarHeaderWrap = styled(SidebarHeader)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px 0px 20px 0px;
`;

const Burger = styled.div`
    cursor: pointer;
    width: 35px;
    height: 35px;
    text-align: center;
    border-radius: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
`;

const ToggleBurger = styled.div`
    display: none;
    width: 100vw;
    left: 0;
    z-index: 3;
    position: fixed;
    background: #0d6efd;
    @media (max-width: 768px) {
        display: flex;
    }
    html:not([data-scroll='0']) {
        background: black;
    }
`;

const ToggleButton = styled(Button)`
    padding: 15px;
`;

const OverlayDiv = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
`;

export { SideBar };