import { Form, Col, Row, Image } from 'react-bootstrap';

const ModuleQuizPage = () => {
    return (<div>
        <Form>
            <fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Col>
                        <Form.Label>Q1.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec diam urna?</Form.Label>
                        <Image
                            src="https://ca-times.brightspotcdn.com/dims4/default/5010365/2147483647/strip/true/crop/600x405+0+0/resize/840x567!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fba%2F6f%2F86f3134a8c819e0925a7df13e153%2Fla-xpm-photo-2013-aug-22-la-sci-sn-circumcision-us-rates-cdc-20130822"
                            fluid
                            style={{
                                maxWidth: '750px',
                            }}
                        />
                        <Col>
                            <Form.Check
                                type="radio"
                                label="answer 1"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                defaultChecked
                            />
                            <Form.Check
                                type="radio"
                                label="answer 2"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="answer 3"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                            <Form.Check
                                type="radio"
                                label="answer 4"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios4"
                            />
                        </Col>
                    </Col>
                </Form.Group>
            </fieldset>
        </Form>
    </div>);
};

export { ModuleQuizPage };