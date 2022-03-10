import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import srcImage from './images/3.jpg';
import Image from 'react-bootstrap/Image';
import ReactAudioPlayer from 'react-audio-player';
import audio from './audio/3.mp3';

const SkinTherapy3 = () => {
    const navigate = useNavigate();
    return (
        <Wrap>
            <Heading>
                Learn Skin Therapy to Promote Healthy Healing After Circumcision
            </Heading>

            <Image
                style={{ margin: '4% 25%', width: '50%' }}
                src={srcImage}
            />

            <ReactAudioPlayer
                src={audio}
                style={{ margin: '2% 4%', width: '92%' }}
                controls
            />

            <Button
                as={Col}
                variant="dark"
                onClick={() => {
                    // When the user presses this button, navigate them back to the module selection page
                    navigate('/modules/skin_therapy/2');
                }}
                style={{ margin: '0% 0% 4% 4%', height: "40px", width: "46%"}}
            >
                Back
            </Button>
            <Button
                as={Col}
                variant="info"
                onClick={() => {
                    // When the user presses this button, navigate them to the next page
                    navigate('/modules/skin_therapy/4');
                }}
                style={{ margin: '0% 4% 4% 0%', height: "40px", width: "46%"}}
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
    margin: 0px 50px 50px 50px;
`;

const Heading = styled.h1`
    padding-top: 1em;
    font-size:50px;
    text-align: center;
`;

export { SkinTherapy3 };