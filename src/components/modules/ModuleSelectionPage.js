import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { ModuleContent1 } from './content/ModuleContent1';
import { ModuleContent2 } from './content/ModuleContent2';
import { ModuleQuizPage } from './quizzes/ModuleQuizPage';
import { Card, Modal } from 'react-bootstrap';
import { BsFillLockFill } from "react-icons/bs";
import { BsUnlockFill } from "react-icons/bs";

const ModuleSelectionPage = () => {
    /*
        Selection state that alternates based on which buttons are clicked
            0 = Module Selection Page
            1 = Module Content Page #1
            2 = Module Content Page #2
            3 = Module Quiz Page
    */
    const [selection, setSelection] = useState(0);
    const [show, setShow] = useState(false);

    // Headers for corresponding pages based on selection state
    const headers = [
        'Module Selection Page',
        'Introduction to NeoCirc',
        'Benefits of Neonatal Circumcision',
        'Module Quiz'
    ];

    return (
        <Wrap>
            {/* Heading text alters based on the selection */}
            <HeadingWrap>
                {headers[selection]}
            </HeadingWrap>

            {/* If selection == 0, display the module selection buttons */}
            { selection === 0 && <div>
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
                            // If Module #1 button is clicked, set the selection variable to 1
                            setSelection(1);
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
                            // If Module #2 button is clicked, set the selection variable to 2
                            setSelection(2);
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
            </div> }

            {/* If selection == 1, set the page to the module content #1 */}
            { selection === 1 && <ModuleContent1 /> }

            {/* If selection == 2, set the page to the module content #1 */}
            { selection === 2 && <ModuleContent2 /> }

            {/* For both module content pages, display a 'Back' button to allow users to navigate back to selection page */}
            { (selection === 1 || selection === 2) && <Button
                    as={Col}
                    variant="outline-primary"
                    onClick={() => setSelection(0)}
                    style={{ marginTop: '20px', height: "40px", width: "50%"}}
                >
                    Back
                </Button>
            }

            {(selection === 1 || selection === 2) && <Button
                    as={Col}
                    variant="outline-primary"
                    onClick={() => setSelection(3)}
                    style={{ marginTop: '20px', height: "40px", width: "50%" }}
                >
                    Take Quiz
                </Button>
            }

            { selection === 3 && <ModuleQuizPage /> }
            { selection === 3 && <Button
                    as={Col}
                    variant="outline-primary"
                    onClick={() => setShow(true)}
                    style={{ marginTop: '20px', height: "40px", width: "50%" }}
                >
                    Submit Quiz
                </Button>
            }

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Congratulations!!</Modal.Title>
                </Modal.Header>
                <Modal.Body >You passed the quiz! You may return to the module selection screen.</Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary"
                        onClick={() => {
                            setSelection(0);
                            setShow(false);
                        }}
                    >
                        Return
                    </Button>
                </Modal.Footer>
            </Modal>
        </Wrap>
    );
};

const Wrap = styled.div`
    padding: 50px;
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;

export { ModuleSelectionPage };