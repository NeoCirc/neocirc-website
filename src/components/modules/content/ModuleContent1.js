import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ModuleContent1 = () => {
    /*
        @Kevin, you'll want to modify the code below to add some lorem ipsum or just general random text
        I'd recommend looking through all the options that react bootstrap provides to see if you can
        make something interesting.
    */
    return (
        <Wrap>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Wrap>
    )
};

/*
    For CSS styling, you can style a HTML block (div, h1, Card, whatever)
    easily like this and use it in the code above.
*/
const Wrap = styled.div`
    padding: 0px;
`;

export { ModuleContent1 };