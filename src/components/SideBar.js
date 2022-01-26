import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaBars, FaQuestion, FaFolder, FaHome, FaInfo, FaMailBulk } from 'react-icons/fa';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate();
    return (
        <SideBarWrap
            collapsed={collapsed}
        >
            <SideBarHeaderWrap>
                { collapsed ? null : <SideBarHeaderText>NeoCirc</SideBarHeaderText> }
                <Burger onClick={() => setCollapsed(!collapsed)}>
                    <FaBars />
                </Burger>
            </SideBarHeaderWrap>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon={<FaHome />} onClick={() => navigate('/')}>Home</MenuItem>
                    <MenuItem icon={<FaInfo />} onClick={() => navigate('/about')}>About Us</MenuItem>
                    <SubMenu title="FAQ" icon={<FaQuestion />}>
                        <MenuItem>General</MenuItem>
                        <MenuItem>Doctors</MenuItem>
                        <MenuItem>Parents</MenuItem>
                    </SubMenu>
                    <MenuItem icon={<FaFolder />}>Source</MenuItem>
                    <MenuItem icon={<FaMailBulk />} onClick={() => navigate('/contact')}>Contact Us!</MenuItem>
                </Menu>
            </SidebarContent>
            {collapsed ? null : <SidebarFooter>
                <FooterWrap>NeoCirc LLC</FooterWrap>
            </SidebarFooter>}
        </SideBarWrap>
    );
}

const SideBarWrap = styled(ProSidebar)`
    height: 100vh;
    position: fixed;
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

export { SideBar };