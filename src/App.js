import { SideBar } from './components/SideBar';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrap>
      <SideBar />
      <h1 style={{ paddingLeft: '50px' }}>
        Welcome
      </h1>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export { App };
