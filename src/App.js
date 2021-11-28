import { SideBar } from './components/SideBar';
import { ModuleSelectionPage } from './components/modules/ModuleSelectionPage';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrap>
      <SideBarWrap>
        <SideBar />
      </SideBarWrap>
      <ModuleSelectionPage />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const SideBarWrap = styled.div`
  padding-right: 75px;
`;

export { App };
