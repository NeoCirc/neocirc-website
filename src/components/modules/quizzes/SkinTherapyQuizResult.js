import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate, useLocation } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from '../../../utils/ChangingProgressProvider';

const SkinTherapyQuizResult = () => {
    const navigate = useNavigate();
    const feedbackBank = [
        'Please note, care of the penile skin after circumcision is important for proper hearling. Your provider will give you instructions on cleaning and dressing the circumcision site with ointment of your care teams choosing.',
        'There is a risk for reattachment if the skin is not routinely displaced away from the glans. This reattachment is called glans adhesions or penile skin bands. Review the skin therapy procedures before circumcision is done.',
        'Without proper skin care after circumcision, adhesions or skin bands may occur which will require additional surgical procedures for correction.'
    ];
    const feedback = [];
    
    // Retrieve state data from quiz page
    const { state } = useLocation();
    const { user, correct } = state;

    // Calculate quiz grade/percentage
    let scorePercentage = 0;
    for (let i = 0; i < user.length; i++) {
        if (user[i] === correct[i]) {
            scorePercentage++;
        } else {
            feedback.push(feedbackBank[i]);
        }
    }
    scorePercentage = Math.floor((scorePercentage / user.length) * 100);

    // Use customized messages based on the score
    let customizedFeedback = 'Thank you for taking the quiz.';
    if (scorePercentage >= 90) {
        customizedFeedback = 'Great job! We are happy to see your mastery our content regarding neonatal circumcision.';
    } else if (scorePercentage < 90 && scorePercentage >= 60) {
        customizedFeedback = 'Nice! Since you missed a few questions, we recommend you to review the content and attempt the quiz again.';
    } else if (scorePercentage < 60) {
        customizedFeedback = 'Oh no! Please go back and review the module content so you can take the quiz again.';
    }
    
    const generateQuestionFeedback = () => {
        const feedbackList = [];
        for (let i = 0; i < feedback.length; i++) {
            feedbackList.push(<FeedbackMessage key={i}>
                {feedback[i]}
            </FeedbackMessage>)
        }
        return(<FeedbackWrap>
            <FeedbackHeader>
                Based on the questions you missed, we recommend reviewing the following and try retaking the quiz.
            </FeedbackHeader>
            {feedbackList}
        </FeedbackWrap>)
    }
    
    return (
        <Wrap>
            <HeadingWrap>
                Skin Therapy Quiz Result
            </HeadingWrap>
            <ScoreWrap>
                <ChangingProgressProvider values={[...Array(scorePercentage + 1).keys()]}>
                    {(percentage) => (
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                pathTransitionDuration: 0.15
                            })}
                        />
                    )}
                </ChangingProgressProvider>
                <ScoreMessage>
                    {customizedFeedback}
                </ScoreMessage>
            </ScoreWrap>
            {scorePercentage !== 100 && generateQuestionFeedback()}
            <Button
                as={Col}
                variant="primary"
                style={{
                    width: '25%',
                    fontSize: '1.5vw',
                    marginLeft: 'auto',
                    marginTop: '20px',
                }}
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        margin: 0px;
        border-radius: 0px;
    }
`;

const ScoreWrap = styled.div`
    padding: 5vw;
    align-items: center;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ScoreMessage = styled.div`
    padding-left: 2vw;
    font-size: 3vw;
    @media (max-width: 768px) {
        text-align: center;
        padding-top: 20px;
        font-size: 5vw;
    }
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;

const FeedbackWrap = styled.div`
    padding: 5vw;
    @media (max-width: 768px) {
        padding-top: 0px;
    }
`;

const FeedbackMessage = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 2vw;
    @media (max-width: 768px) {
        font-size: 4vw;
    }
`;

const FeedbackHeader = styled.h3`
    font-size: 3vw;
    @media (max-width: 768px) {
        font-size: 5vw
    }
`;

export { SkinTherapyQuizResult };