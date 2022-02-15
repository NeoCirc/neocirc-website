import { SideBar } from './components/SideBar';
import { HomePage } from './components/HomePage';
import { GenFAQPage } from './components/GenFAQPage';
import { DocFAQPage } from './components/DocFAQPage';
import { ParFAQPage } from './components/ParFAQPage';
// import { data } from './components/data'; for future use to group faq data together for different user
import { AboutUsPage } from './components/AboutUsPage';
import { ContactPage } from './components/ContactPage';
import { ModuleSelectionPage } from './components/modules/ModuleSelectionPage';
import { ModuleContent1 } from './components/modules/content/ModuleContent1';
import { ModuleContent2 } from './components/modules/content/ModuleContent2';
import { ModuleQuizPage } from './components/modules/quizzes/Module1QuizPage';
import { Module2QuizPage } from './components/modules/quizzes/Module2QuizPage';
import { Module1QuizResult } from './components/modules/quizzes/Module1QuizResult';
import { Module2QuizResult } from './components/modules/quizzes/Module2QuizResult';
import { SourcesPage } from './components/SourcesPage';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrap>
      <SideBarWrap>
        <SideBar />
      </SideBarWrap>
      <ContentWrap>
        {/* Routes for NeoCirc educational platform */}
        <Routes>
          {/* General Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/GenFAQPage" element={<GenFAQPage />} />
          <Route path="/DocFAQPage" element={<DocFAQPage />} />
          <Route path="/ParFAQPage" element={<ParFAQPage />} />
          <Route path="/modules" element={<ModuleSelectionPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sources" element={<SourcesPage />} />

          {/* Content 1 routes */}
          <Route path="/modules/content1" element={<ModuleContent1 />} />
          <Route path="/modules/content1/quiz" element={<ModuleQuizPage />} />
          <Route path="/modules/content1/quiz/result" element={<Module1QuizResult />} />

          {/* Content 2 routes */}
          <Route path="/modules/content2" element={<ModuleContent2 />} />
          <Route path="/modules/content2/quiz" element={<Module2QuizPage />} />
          <Route path="/modules/content2/quiz/result" element={<Module2QuizResult />} />
        </Routes>
      </ContentWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentWrap = styled.div`
  padding-top: 50px;
`;

const SideBarWrap = styled.div`
  padding-right: 80px;
`;

export { App };
