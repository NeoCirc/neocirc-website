import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
 

/* 
    For now, very basic quiz results page with minimal information. 
    Later on, we will ideally pass in the data from the quiz page onto this route and process the result.
*/
const Module1QuizResult = () => {
    const navigate = useNavigate();
    
    return (
        <Wrap>
            <HeadingWrap>
                Quiz 1 Result
            </HeadingWrap>
            <p>
                <h5>Score is: </h5>
            </p>
            <Button
                as={Col}
                variant="primary"
                onClick={() => {
                    // When this button is pressed, navigate user back to the module selection page
                    navigate('/modules/content1/quiz');
                }}
            >
                Back
            </Button>
        </Wrap>
    );
};

const Wrap = styled.div`
    margin: 0px 50px 50px 50px;
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;
export {Module1QuizResult};