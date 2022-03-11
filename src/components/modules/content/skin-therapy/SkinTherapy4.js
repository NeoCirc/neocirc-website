import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player'
import video from './videos/4.mp4';

const SkinTherapy4 = () => {
    const navigate = useNavigate();
    return (
        <Wrap>
            <Heading>
                Learn Skin Therapy to Promote Healthy Healing After Circumcision
            </Heading>

            

            <VideoWrap width="50%" margin="4% 25%">
                <ReactPlayer
                    className='react-player'
                    url={video}
                    controls={true}
                    width='100%'
                    height='100%'
                />
                Learn skin therapy before circumcision is done.
            </VideoWrap>

            <Button
                as={Col}
                variant="dark"
                onClick={() => {
                    // When the user presses this button, navigate them back to the module selection page
                    navigate('/modules/skin_therapy/3');
                }}
                style={{ margin: '0% 0% 4% 4%', height: "5vw", width: "46%", fontSize: "2vw" }}
            >
                Back
            </Button>
            <Button
                as={Col}
                variant="info"
                onClick={() => {
                    // When the user presses this button, navigate them to the next page
                    navigate('/modules/skin_therapy/5');
                }}
                style={{ margin: '0% 4% 4% 0%', height: "5vw", width: "46%", fontSize: "2vw" }}
            >
                Next
            </Button>
        </Wrap>
    )
};

/*
    For CSS styling, you can style a HTML block (div, h1, Card, whatever)
    easily like this and use it in the code above.
*/
const Wrap = styled.div`
    background: linear-gradient(to bottom, #99ccff 0%, #ffccff 100%);
    margin: 0px 3vw 50px 3vw;
`;

const VideoWrap = styled.span`
    width: ${props => props.width};
    vertical-align: top;
    margin: ${props => props.margin};
    padding: 0%;
    font-size: 2vw;
    display: inline-block;
    text-align: justify;
    white-space: pre-line;
`;

const Heading = styled.h1`
    padding-top: 1em;
    font-size:4vw;
    text-align: center;
    margin: 0% 3%;
`;

export { SkinTherapy4 };