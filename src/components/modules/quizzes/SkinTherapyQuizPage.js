import { Col, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const SkinTherapyQuizPage = () => {
    const navigate = useNavigate();
    const [userAnswers, setUserAnswers] = useState([]);
    const [ready, setReady] = useState(false);

    // useLocation hook will be used to retrieve the current path of the page.
    // useLocation can also be used to retrieve data from the path.
    const location = useLocation();

    // Question bank for quiz 1
    const tfQuestionBank = [
        'Q1.  Skin care after circumcision includes application of ointment as directed by your care team.',
        'Q2.  Skin retraction as you viewed in the video after your boy\'s circumcision decreases the chances of penile skin adhesions/band.',
        'Q3.  If penile skin bands develop, surgical revision will be required.',
    ];

    // Correct answers for quiz 1
    // TODO: Put all these answers in a global storage
    const correctAnswers = [true, true, true];

    const generateQuestions = () => {
        const tfQuestions = [];
        for (let i = 0; i < 3; i++) {
            tfQuestions.push(
                <form key={i}>
                    <br></br>
                        {tfQuestionBank[i]}
                    <br></br>
                    <input
                        name="checked"
                        type="radio"
                        value="True1"
                        onChange={() => {
                            userAnswers[i] = true;
                            setUserAnswers(userAnswers);
                            // Boolean for determining if the answers are ready to submit
                            setReady((userAnswers.length === 3) && (!userAnswers.includes(undefined)));
                        }}
                    /> True
                    <br></br>
                    <input
                        name="checked"
                        type="radio"
                        value="False1"
                        onChange={() => {
                            userAnswers[i] = false;
                            setUserAnswers(userAnswers);
                            setReady((userAnswers.length === 3) && (!userAnswers.includes(undefined)));
                        }}/> False
                    <br></br>
                    <br></br>
                </form>
            )
        }
        return (<>
            <Wrap>
                <Card.Body>        
                    {tfQuestions}
                </Card.Body>
            </Wrap>
        </>);
    }

    return (
        <Wrap>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                <HeadingWrap>
                    <center>Module 1 Quiz</center>
                </HeadingWrap>
                
                {generateQuestions()}
                <center>
                    <Button
                        as={Col}
                        onClick={() => {
                            // Navigate to the quiz result page and send the user's answers & the correct answers
                            navigate(
                                location.pathname + '/result',
                                {
                                    state: {
                                        user: userAnswers,
                                        correct: correctAnswers,
                                    }
                                }
                            );
                        }}
                        // Only if it's ready to submit, allow the user to click
                        style={ready ? {} : {pointerEvents: 'none'}}
                    >
                        Submit Quiz
                    </Button>
                </center>
                </Card.Body>
            </Card>
        </Wrap>
    );
};

const Wrap = styled.div`
    margin: 0px 50px 50px 50px;
    display: flex;
    @media (max-width: 768px) {
        margin: 0px;
        border-radius: 0px;
    }
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;

export { SkinTherapyQuizPage };


