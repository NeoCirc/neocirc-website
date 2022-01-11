import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const ModuleQuizResult = () => {
    const navigate = useNavigate();
    return (
        <Wrap>
            <HeadingWrap>
                Quiz Result
            </HeadingWrap>
            <p>
                Quiz results will be displayed here
            </p>
            <Button
                as={Col}
                variant="primary"
                onClick={() => navigate('/modules')}
            >
                Back
            </Button>
        </Wrap>
    );
};

const Wrap = styled.div`
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;

export { ModuleQuizResult };