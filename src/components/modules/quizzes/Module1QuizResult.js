import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate, useLocation } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from '../../../utils/ChangingProgressProvider';

/* 
    For now, very basic quiz results page with minimal information. 
    Later on, we will ideally pass in the data from the quiz page onto this route and process the result.
*/
const Module1QuizResult = () => {
    const navigate = useNavigate();
    
    // Retrieve state data from quiz page
    const { state } = useLocation();
    const { user, correct } = state;
    let scorePercentage = 0;
    for (let i = 0; i < user.length; i++) {
        if (user[i] === correct[i]) {
            scorePercentage++;
        }
    }
    scorePercentage = Math.floor((scorePercentage / user.length) * 100);
    
    return (
        <Wrap>
            <HeadingWrap>
                Quiz 1 Result
            </HeadingWrap>
            <ChangingProgressProvider values={[...Array(scorePercentage + 1).keys()]}>
                {percentage => (
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            pathTransitionDuration: 0.15
                        })}
                    />
                )}
            </ChangingProgressProvider>
            <Button
                as={Col}
                variant="primary"
                onClick={() => {
                    // When this button is pressed, navigate user back to the module selection page
                    navigate('/modules');
                }}
            >
                Back to Modules
            </Button>
        </Wrap>
    );
};

const Wrap = styled.div`
    margin: 0px 50px 50px 50px;
    background-color: white;
    border-radius: 20px;
    padding: 25px;
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;
export {Module1QuizResult};