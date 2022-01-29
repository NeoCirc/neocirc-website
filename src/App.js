import { SideBar } from './components/SideBar';
import { HomePage } from './components/HomePage';
import { GenFAQPage } from './components/GenFAQPage';
import { DocFAQPage } from './components/DocFAQPage';
import { ParFAQPage } from './components/ParFAQPage';
// import { data } from './components/data'; for future use to group faq data together for different user
import { ModuleSelectionPage } from './components/modules/ModuleSelectionPage';
import { AboutUsPage } from './components/AboutUsPage';
import { ModuleContent1 } from './components/modules/content/ModuleContent1';
import { ModuleContent2 } from './components/modules/content/ModuleContent2';
import { ModuleQuizPage } from './components/modules/quizzes/ModuleQuizPage';
import { ModuleQuizResult } from './components/modules/quizzes/ModuleQuizResult';
import { LoginPage } from './components/LoginPage';
import { SourcesPage } from './components/SourcesPage';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
const App = () => {
const [isAuthenticated, setIsAuthenticated] = useState(false)
return (
<Wrap>
  { isAuthenticated  ?
    <div>
    <SideBarWrap>
        <SideBar />
    </SideBarWrap>
    <ContentWrap>
        {/* Routes for NeoCirc educational platform */}
        <Routes>
        {/* General Pages */}
        <Route path="/Home" element={
        <HomePage />
        } />
        <Route path="/" element={
            <HomePage />
        } />
        <Route path="/GenFAQPage" element={
        <GenFAQPage />
        } />
        <Route path="/DocFAQPage" element={
        <DocFAQPage />
        } />
        <Route path="/ParFAQPage" element={
        <ParFAQPage />
        } />
        <Route path="/modules" element={
        <ModuleSelectionPage />
        } />
        <Route path="/about" element={
        <AboutUsPage />
        } />
        <Route path="/sources" element={
            <SourcesPage />
        } />
        {/* Content 1 routes */}
        <Route path="/modules/content1" element={
        <ModuleContent1 />
        } />
        <Route path="/modules/content1/quiz" element={
        <ModuleQuizPage />
        } />
        <Route path="/modules/content1/quiz/result" element={
        <ModuleQuizResult />
        } />
        {/* Content 2 routes */}
        <Route path="/modules/content2" element={
        <ModuleContent2 />
        } />
        <Route path="/modules/content2/quiz" element={
        <ModuleQuizPage />
        } />
        <Route path="/modules/content2/quiz/result" element={
        <ModuleQuizResult />
        } />
        </Routes>
    </ContentWrap>
    </div>:
    <ContentWrap>
        <Routes>
            <Route path="/" element={
                <LoginPage onSuccessfulSubmit={(e) => {
                    setIsAuthenticated(true);
                }
                } />
            } />
        </Routes>
    </ContentWrap>
  }
</Wrap>
);
}
const Wrap = styled.div`
display: flex;
flex-direction: row;
`;
const ContentWrap = styled.div`
padding: 50px;
`;
const SideBarWrap = styled.div`
padding-right: 75px;
`;
export { App };