import { SideBar } from './components/SideBar';
import { ModuleSelectionPage } from './components/modules/ModuleSelectionPage';
import { ModuleContent1 } from './components/modules/content/ModuleContent1';
import { ModuleContent2 } from './components/modules/content/ModuleContent2';
import { ModuleQuizPage } from './components/modules/quizzes/ModuleQuizPage';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrap>
      <SideBarWrap>
        <SideBar />
      </SideBarWrap>
      <Routes>
        <Route path="/modules" element={<ModuleSelectionPage />} />
        <Route path="/modules/content1/1" element={<ModuleContent1 />} />
        <Route path="/modules/content2/1" element={<ModuleContent2 />} />
        <Route path="/modules/content1/quiz" element={<ModuleQuizPage />} />
        <Route path="/modules/content2/quiz" element={<ModuleQuizPage />} />
      </Routes>
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
