import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <Wrap>
            <HeadingWrap>
                Home Page
            </HeadingWrap>
            <Button
                as={Col}
                variant="primary"
                onClick={() => navigate('/modules')}
            >
                Module Selection Page
            </Button>
        </Wrap>
    );
};

const Wrap = styled.div`
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;

export { HomePage };