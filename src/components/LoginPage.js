import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = ({ onSuccessfulSubmit }) => {
    const [userCode, setUserCode] = useState('')
    const [agreed, setAgreed] = useState(false)
    const secretCode = "test";
    const navigate = useNavigate();


    const onSubmit = (e) => {
        e.preventDefault()

        if (userCode != secretCode) {
            alert("Incorrect code ");
            return;
        }
        if (!agreed) {
            alert("Please agree to the terms and conditions");
            return;
        }
        onSuccessfulSubmit();
        navigate('/modules');

    }

    return (
      <Wrap>
          <form>
                <h2>Please enter a verification code</h2>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your code here" value={userCode} onChange={e => setUserCode(e.target.value)} />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={e => setAgreed(e.currentTarget.checked)} />
                    <label class="form-check-label" for="exampleCheck1">I agree to the terms and conditions.</label>
                </div>
                <button type="submit" class="btn btn-primary" onClick={onSubmit}> Submit </button>
            </form>
        </Wrap>
    );
}
const Wrap = styled.div`
    padding-left: 40px;
    padding-right: 40px;
`;

export { LoginPage };