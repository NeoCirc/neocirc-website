import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = ({ onSuccessfulSubmit }) => {
  const [userCode, setUserCode] = useState('')
  const [agreed, setAgreed] = useState(false)
  const salt = 'da0841dd79701200e4';
  const crypto = require('crypto');
  const hash = 'ca7d1242ceee35a47edfbbebc008975efba1439cedd08bad381ccd371131224eedd9f32babafcc70616d76c76f2019536e5cae437104b5ded4b2272a94067662';
  let hashedUserCode;
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()

      hashedUserCode = crypto.pbkdf2Sync(userCode, salt, 10000, 64, 'sha512', (err, derivedKey) => {

          if (err) throw err;

          return derivedKey;
      }).toString('hex');

      if (hashedUserCode !== hash) {
      alert("Incorrect code");
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
      <Card>
        <Card.Body>
          <h2>Please enter a verification code</h2>
          <div className="form-group">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your code here" value={userCode} onChange={e => setUserCode(e.target.value)} />
          </div> <br />
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={e => setAgreed(e.currentTarget.checked)} />
            <label className="form-check-label">I agree to the terms and conditions.</label>
          </div> <br />
          <button type="submit" className="btn btn-primary" onClick={onSubmit}> Submit </button>
        </Card.Body>
      </Card>
    </Wrap>
  );
}
const Wrap = styled.div`
    padding-left: 40px;
    padding-right: 40px;
`;

export { LoginPage };