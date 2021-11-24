import { SideBar } from './components/SideBar';
import { ModuleSelectionPage } from './components/modules/ModuleSelectionPage';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrap>
      <SideBar />
      <ModuleSelectionPage />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export { App };
