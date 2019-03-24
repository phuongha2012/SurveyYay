import React from 'react';

const Footer = () => {
  return (
    <div style={{ marginTop: '150px' }}>
      <div>
        <div  style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ alignSelf: 'center' }}>Powered by</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="../../assets/ExpressJS.png" width="80px" height="80px" style={{ marginRight: '15px'}}></img>
            <img src="../../assets/ReactJS.png" width="80px" height="80px" style={{ marginRight: '20px'}}></img>
            <img src="../../assets/redux.png" width="60px" height="60px" style={{ marginTop: '15px'}}></img>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
          <p style={{ alignSelf: 'center' }}>Authentication, Database, Email and Payment API by:</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <img src="../../assets/oauth.png" width="80px" height="80px" style={{ marginRight: '15px'}}></img>
            <img src="../../assets/mongoDB.png" width="80px" height="80px" style={{ marginRight: '20px'}}></img>
            <img src="../../assets/sendgrid.png" width="80px" height="80px" style={{ marginTop: '15px', marginRight: '20px'}}></img>
            <img src="../../assets/stripe.png" width="70px" height="70px" style={{ marginTop: '15px'}}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
