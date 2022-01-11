import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

// For now, very basic home page with a button that leads to the module selection page
const HomePage = () => {
    // useNavigate hook will be used to programmatically route the user based on their actions
    const navigate = useNavigate();
    return (
        <Wrap>
            <HeadingWrap>
                Home Page
            </HeadingWrap>
            <Button
                as={Col}
                variant="primary"
                onClick={() => {
                    // When this button is clicked, route the user to the module selection page
                    navigate('/modules');
                }}
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