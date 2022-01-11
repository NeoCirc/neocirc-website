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
            <Card style={{ width: '79rem' }}>
                <Card.Header><BsUnlockFill color="black" size={20}/>  Module 1</Card.Header>
                <Card.Body>
                    <Card.Title>Introduction to NeoCirc</Card.Title>
                    <Card.Text>
                        Learn the basics regarding our organization and how our modules work. 
                    </Card.Text>
                    <Button variant="primary"
                        onClick={() => {
                            // If Module #1 button is clicked, route to the content1 page
                            navigate('/modules/content1');
                        }}
                    >   Explore Module
                    </Button>
                </Card.Body>
            </Card>
            <br></br>
            <Card style={{ width: '79rem' }}>
                <Card.Header><BsUnlockFill color="black" size={20}/> Module 2</Card.Header>
                <Card.Body>
                    <Card.Title>Benefits of Neonatal Circumcision</Card.Title>
                    <Card.Text>
                        Circumcision is a rather debated field, however in this module we will illustrate the benefits of this medical procedure.
                    </Card.Text>
                    <Button variant="primary"
                        onClick={() => {
                            // If Module #2 button is clicked, route to the content2 page
                            navigate('/modules/content2');
                        }}
                    >   Explore Module
                    </Button>
                </Card.Body>
            </Card>
            <br></br>
            <Card style={{ width: '79rem' }}>
                <Card.Header><BsFillLockFill color="black" size={20}/>  Module 3</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <center>Complete Module 1 & Module 2 before continuing. </center>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Wrap>
    );
};

const Wrap = styled.div`
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;

export { ModuleSelectionPage };