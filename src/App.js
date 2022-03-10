import { SideBar } from './components/SideBar';
import { HomePage } from './components/HomePage';
import { GenFAQPage } from './components/GenFAQPage';
import { DocFAQPage } from './components/DocFAQPage';
import { ParFAQPage } from './components/ParFAQPage';
// import { data } from './components/data'; for future use to group faq data together for different user
import { AboutUsPage } from './components/AboutUsPage';
import { ContactPage } from './components/ContactPage';
import { ModuleSelectionPage } from './components/modules/ModuleSelectionPage';
import { SkinTherapy1 } from './components/modules/content/skin-therapy/SkinTherapy1';
import { SkinTherapy2 } from './components/modules/content/skin-therapy/SkinTherapy2';
import { SkinTherapy3 } from './components/modules/content/skin-therapy/SkinTherapy3';
import { SkinTherapy4 } from './components/modules/content/skin-therapy/SkinTherapy4';
import { SkinTherapy5 } from './components/modules/content/skin-therapy/SkinTherapy5';
import { SkinTherapy6 } from './components/modules/content/skin-therapy/SkinTherapy6';
import { SkinTherapy7 } from './components/modules/content/skin-therapy/SkinTherapy7';

import { SkinTherapyQuizPage } from './components/modules/quizzes/SkinTherapyQuizPage';
import { SkinTherapyQuizResult } from './components/modules/quizzes/SkinTherapyQuizResult';
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
      {isAuthenticated ?
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

            { /* Module selection page */}
            <Route path="/modules" element={<ModuleSelectionPage />} />

            {/* Content 1, skin therapy routes */}
            <Route path="/modules/skin_therapy/1" element={<SkinTherapy1 />} />
            <Route path="/modules/skin_therapy/2" element={<SkinTherapy2 />} />
            <Route path="/modules/skin_therapy/3" element={<SkinTherapy3 />} />
            <Route path="/modules/skin_therapy/4" element={<SkinTherapy4 />} />
            <Route path="/modules/skin_therapy/5" element={<SkinTherapy5 />} />
            <Route path="/modules/skin_therapy/6" element={<SkinTherapy6 />} />
            <Route path="/modules/skin_therapy/7" element={<SkinTherapy7 />} />

            <Route path="/modules/skin_therapy/quiz" element={<SkinTherapyQuizPage />} />
            <Route path="/modules/skin_therapy/quiz/result" element={<SkinTherapyQuizResult />} />
          </Routes>
        </ContentWrap>
        : <ContentWrap>
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

          <Route path="/modules" element={
            <LoginPage onSuccessfulSubmit={(e) => {
              setIsAuthenticated(true);
            }
            } />
          } />
        </Routes>
      </ContentWrap> }
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