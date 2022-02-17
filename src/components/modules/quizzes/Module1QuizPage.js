import { Col, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const ModuleQuizPage = () => {
    const navigate = useNavigate();
    const [userAnswers, setUserAnswers] = useState([]);
    const [checked, setChecked] = useState(false);

    // useLocation hook will be used to retrieve the current path of the page.
    // useLocation can also be used to retrieve data from the path.
    const location = useLocation();

    const tfQuestionBank = [
        'Q1.  Wound care after circumcision should be performed with antibiotic ointment otherwise infection might occur.',
        'Q2.  Frequent gentle retraction on the base of the penis after neonatal circumcision will decrease the chances of penile skin adhesions development.',
        'Q3.  If penile skin bands develop, surgical revision of the circumcision will be required.',
    ];

    const correctAnswers = [false, true, true];

    const generateQuestions = () => {
        const tfQuestions = [];
        for (let i = 0; i < 3; i++) {
            tfQuestions.push(
                <form>
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
                            setChecked(!checked)
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
                    <Button
                    as={Col}
                    onClick={() => {
                        navigate('/modules/content1');
                    }}
                    style={{ float: 'right', marginTop: '-45px'}}
                >
                    Return
                </Button>
                </HeadingWrap>
                
                {generateQuestions()}
                <center>
                    <Button
                        as={Col}
                        onClick={() => {
                            /*
                                Since we have content1 and content2 routes but with the same quiz result page,
                                we can take the path of the current route (either '/modules/content1/quiz' or '/modules/content2/quiz')
                                and add on '/result' to get the desirable path.
                            */
                            const resultPath = location.pathname + '/result';
                            navigate(
                                resultPath,
                                {
                                    state: {
                                        user: userAnswers,
                                        correct: correctAnswers,
                                    }
                                }
                            );
                        }}
                        style={{ marginTop: '-40px' }}
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
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;

export {ModuleQuizPage};


