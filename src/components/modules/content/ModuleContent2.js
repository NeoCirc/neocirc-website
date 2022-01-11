import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const ModuleContent2 = () => {
    const navigate = useNavigate();
    return (
        <Wrap>
            <Heading>
                Benefits of Neonatal Circumcision
            </Heading>
            <Card style={{ width: '100%' }}>
                <Card.Header>
                    <HeadingWrap>
                        {"Complications"}
                    </HeadingWrap>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ParagraphWrap width="100%">
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac habitasse platea. Non tellus orci ac auctor augue mauris augue neque. Turpis massa tincidunt dui ut. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sit amet dictum sit amet justo donec. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Eget nunc scelerisque viverra mauris in aliquam sem. In metus vulputate eu scelerisque felis. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Eros in cursus turpis massa. Justo laoreet sit amet cursus sit. Lacus luctus accumsan tortor posuere. In vitae turpis massa sed. Scelerisque eu ultrices vitae auctor eu augue."}
                        </ParagraphWrap>
                        <br></br>
                        <br></br>
                        <br></br>
                        <ImageWrap width="100%">
                            <Figure
                                style={{display: 'flex', justifyContent: 'center'}}>
                                <Figure.Image
                                    src="https://lucidnarratives.com/wp-content/uploads/2019/01/Bad-Brand-Storytelling-Videos.png"
                                />
                            </Figure>
                        </ImageWrap>
                        <br></br>
                        <br></br>
                        <br></br>
                        <ParagraphWrap width="100%">
                            {"Augue ut lectus arcu bibendum at varius vel pharetra. " +
                                "Odio aenean sed adipiscing diam. Et netus et malesuada fames ac turpis egestas. " +
                                "Pellentesque a facilisis massa. Sed et elit in augue semper iaculis a ac nisi. Aliquam " +
                                "ac volutpat nisl. Proin eget suscipit purus. Urna et pharetra pharetra massa. " +
                                "Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. " +
                                "Arcu non sodales neque sodales ut etiam sit. At auctor urna nunc id cursus metus " +
                                "aliquam. Viverra suspendisse potenti nullam ac. Urna nunc id cursus metus aliquam " +
                                "eleifend. Nulla porttitor massa id neque aliquam. Mauris in aliquam sem fringilla ut " +
                                "morbi tincidunt augue. Lobortis mattis aliquam faucibus purus in massa tempor nec. At " +
                                "in tellus integer feugiat scelerisque varius morbi enim. Dolor sit amet consectetur adipiscing. " +
                                "Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Dictum non consectetur a erat."}
                        </ParagraphWrap>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            <Button
                as={Col}
                variant="outline-primary"
                onClick={() => navigate('/modules')}
                style={{ marginTop: '20px', height: "40px", width: "50%"}}
            >
                Back
            </Button>
            <Button
                as={Col}
                variant="outline-primary"
                onClick={() => navigate('/modules/content2/quiz')}
                style={{ marginTop: '20px', height: "40px", width: "50%" }}
            >
                Take Quiz
            </Button>
        </Wrap>
    )
};

const Wrap = styled.div`
    padding: 50px;
`;

const HeadingWrap = styled.h2`
    margin-left: auto;
    margin-right: auto;
`;

const ParagraphWrap = styled.span`
    width: ${props => props.width};
    vertical-align: top;
    padding: 0px;
    font-size: 25px;
    display: inline-block;
`;

const ImageWrap = styled.div`
    width: ${props => props.width};  
`;

const Heading = styled.h1`
    padding-bottom: 10px;
`;

export { ModuleContent2 };