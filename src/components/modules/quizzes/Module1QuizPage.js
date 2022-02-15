import { Form, Col, Row, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
const ModuleQuizPage = () => {
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const [checked, setChecked] = useState(false);
    // useLocation hook will be used to retrieve the current path of the page.
    // useLocation can also be used to retrieve data from the path.
    const location = useLocation();
    function Question() {
        // Declare a new state variable, which we'll call "count"
        return (
            <>
            <Wrap>
            <Card.Body>        
            <form>
                <br></br>
                <label><b>Q1.  Wound care after circumcision should be performed with antibiotic ointment otherwise infection might occur.</b></label>
                <br></br>
                <input name="checked" type="radio" value="True1" onChange={(f)=>{setChecked(!checked)}}/> True
                <br></br>
                <input name="checked" onClick={(e)=>{setScore(score + 1)}} type="radio" value="False1" onChange={(f)=>{setChecked(!checked)}}/> False
                <br></br>
                <br></br>
            </form>
           
            <form>
                <br></br>
                <label><b>Q2.  Frequent gentle retraction on the base of the penis after neonatal circumcision will decrease the chances of penile skin adhesions development.</b></label>
                <br></br>
                <input name="checked" onClick={(e)=>{setScore(score + 1)}} type="radio" value="True1" onChange={(f)=>{setChecked(!checked)}}/> True
                <br></br>
                <input name="checked" type="radio" value="False1" onChange={(f)=>{setChecked(!checked)}}/> False
                <br></br>
                <br></br>
            </form>

            <form>
                <br></br>
                <label><b>Q3.  If penile skin bands develop, surgical revision of the circumcision will be required.</b></label>
                <br></br>
                <input name="checked" onClick={(e)=>{setScore(score + 1)}} type="radio" value="True1" onChange={(f)=>{setChecked(!checked)}}/> True
                <br></br>
                <input name="checked" type="radio" value="False1" onChange={(f)=>{setChecked(!checked)}}/> False
                <br></br>
                <br></br>
            </form>
            <h5>Score is: {score/3}</h5>
            </Card.Body>
        </Wrap>
            </>
        );
        

      }
    return (

        <Wrap>
            <Card style={{ width: '100%' }}>
            <Card.Body>
            <HeadingWrap>
                <center>Module 1 Quiz</center>        
                <Button
                as={Col}
                onClick={() => {
                    navigate('/modules/content1');
                }}
                style={{ float: 'right', marginTop: '-45px', height: "40px", width: "7%" }}
            >
                Return
            </Button>
            </HeadingWrap>
            
            {Question()}
            <center><Button
                as={Col}
                onClick={() => {
                    /*
                        Since we have content1 and content2 routes but with the same quiz result page,
                        we can take the path of the current route (either '/modules/content1/quiz' or '/modules/content2/quiz')
                        and add on '/result' to get the desirable path.
                    */
                    navigate(location.pathname + '/result');
                }}
                style={{ marginTop: '-40px', height: "40px", width: "10%"}}
            >
                Submit Quiz
            </Button></center>
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
export {ModuleQuizPage};


