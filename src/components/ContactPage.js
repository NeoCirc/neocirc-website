import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactPage = () => {
    return (
        <Wrap>
            <Heading>
                Contact Us!
            </Heading>
            <ContactForm>
                <Form.Group className="mb-3">
                    <ContactLabel>Name</ContactLabel>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <ContactLabel>Email</ContactLabel>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <ContactLabel>Message</ContactLabel>
                    <Form.Control as="textarea" rows={5} type="message" placeholder="Enter Message"/>
                </Form.Group>

                <SendMessageButton variant="primary" type="submit">
                    Submit
                </SendMessageButton>
            </ContactForm>
        </Wrap>
    );
};

const ContactLabel = styled(Form.Label)`
    font-weight: bolder;
`;

const SendMessageButton = styled(Button)`
    font-weight: bolder;
`;

const Wrap = styled.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ContactForm = styled(Form)`
    min-width: 500px;
`;

const Heading = styled.h1`
    font-weight: lighter;
    font-size: 70px;
    text-align: center;
`;

export { ContactPage };