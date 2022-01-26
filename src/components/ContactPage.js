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
                <Form.Group className="mb-4">
                    <ContactLabel>Name</ContactLabel>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-4">
                    <ContactLabel>Email</ContactLabel>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-4">
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
    font-weight: light;
    font-size: 25px;
`;

const SendMessageButton = styled(Button)`
    font-weight: bolder;
`;

const Wrap = styled.div`
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to bottom, #99ccff 0%, #ffccff 100%);
    padding: 30px 0px 30px 0px;
    border-radius: 30px;
    margin-left: 35%;
`;

const ContactForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 75%;
`;

const Heading = styled.h1`
    font-weight: lighter;
    font-size: 4em;
    text-align: center;
    padding-bottom: 20px;
`;

export { ContactPage };