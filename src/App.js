import { SideBar } from './components/SideBar';
import { HomePage } from './components/HomePage';
import { GenFAQPage } from './components/GenFAQPage';
import { DocFAQPage } from './components/DocFAQPage';
import { ParFAQPage } from './components/ParFAQPage';
// import { data } from './components/data'; for future use to group faq data together for different user
import { AboutUsPage } from './components/AboutUsPage';
import { ContactPage } from './components/ContactPage';
import { ModuleSelectionPage } from './components/modules/ModuleSelectionPage';
import { ModuleContent1_1 } from './components/modules/content/module_1/ModuleContent1.1';
import { ModuleContent1_2 } from './components/modules/content/module_1/ModuleContent1.2';
import { ModuleContent1_3 } from './components/modules/content/module_1/ModuleContent1.3';
import { ModuleContent1_4 } from './components/modules/content/module_1/ModuleContent1.4';
import { ModuleContent1_5 } from './components/modules/content/module_1/ModuleContent1.5';
import { ModuleContent1_6 } from './components/modules/content/module_1/ModuleContent1.6';
import { ModuleContent1_7 } from './components/modules/content/module_1/ModuleContent1.7';

import { ModuleContent2 } from './components/modules/content/ModuleContent2';
import { ModuleQuizPage } from './components/modules/quizzes/Module1QuizPage';
import { Module2QuizPage } from './components/modules/quizzes/Module2QuizPage';
import { Module1QuizResult } from './components/modules/quizzes/Module1QuizResult';
import { Module2QuizResult } from './components/modules/quizzes/Module2QuizResult';
import { SourcesPage } from './components/SourcesPage';
import { LoginPage } from './components/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
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
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sources" element={<SourcesPage />} />
        </Routes>
      {isAuthenticated ?
        <div>
          <ContentWrap>
            {/* Routes for NeoCirc educational platform */}
            <Routes>
              { /* Module selection page */}
              <Route path="/modules" element={<ModuleSelectionPage />} />

              {/* Content 1 routes */}
              <Route path="/modules/content1/1" element={<ModuleContent1_1 />} />
              <Route path="/modules/content1/2" element={<ModuleContent1_2 />} />
              <Route path="/modules/content1/3" element={<ModuleContent1_3 />} />
              <Route path="/modules/content1/4" element={<ModuleContent1_4 />} />
              <Route path="/modules/content1/5" element={<ModuleContent1_5 />} />
              <Route path="/modules/content1/6" element={<ModuleContent1_6 />} />
              <Route path="/modules/content1/7" element={<ModuleContent1_7 />} />

              <Route path="/modules/content1/quiz" element={<ModuleQuizPage />} />
              <Route path="/modules/content1/quiz/result" element={<Module1QuizResult />} />

              {/* Content 2 routes */}
              <Route path="/modules/content2" element={<ModuleContent2 />} />
              <Route path="/modules/content2/quiz" element={<Module2QuizPage />} />
              <Route path="/modules/content2/quiz/result" element={<Module2QuizResult />} />
            </Routes>
          </ContentWrap>
        </div> :
        <ContentWrap>
          <Routes>
            <Route path="/modules" element={
              <LoginPage onSuccessfulSubmit={(e) => {
                setIsAuthenticated(true);
              }
              } />
            } />
          </Routes>
        </ContentWrap>
      }
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
  @media (max-width: 768px) {
    padding-top: 80px;
    display: flex;
    margin: auto;
  }
`;

const SideBarWrap = styled.div`
  padding-right: 80px;
  @media (max-width: 768px) {
    padding-right: 0px;
  }
`;

export { App };