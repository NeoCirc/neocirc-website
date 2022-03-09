import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { BsFillLockFill } from "react-icons/bs";
import { BsUnlockFill } from "react-icons/bs";

const ModuleSelectionPage = () => {
    const navigate = useNavigate();
    return (
        <Wrap>
            <HeadingWrap>
                Module Selection Page
            </HeadingWrap>
            <br></br>
            <Card>
                <Card.Header><BsUnlockFill color="black" size={20}/>  Module 1</Card.Header>
                <Card.Body>
                    <Card.Title>Skin Therapy Techniques</Card.Title>
                    <Card.Text>
                        You will learn simple skin therapy techniques to prevent common problems of healing after circumcision.
                    </Card.Text>
                    <Button variant="primary"
                        onClick={() => {
                            // If Module #1 button is clicked, route to the content1 page
                            navigate('/modules/skin_therapy/1');
                        }}
                    >   Explore Module
                    </Button>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Header><BsFillLockFill color="black" size={20}/>  Module 2</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <center>Coming soon! Will be added in the future. </center>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Wrap>
    );
};

const Wrap = styled.div`
    margin: 0px 50px 50px 50px;
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;

export { ModuleSelectionPage };