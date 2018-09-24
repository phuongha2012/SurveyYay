import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'justify' }}>
      <div>
        <h4 style={{ textAlign: 'center', padding: '15px', margin: '18px' }}>Hi, thank you for visiting my app!</h4>
        <h6 style={{ textAlign: 'center' }}>I am currently working on styling the frontend and fixing some user experience logics. In the mean time, please try out SurveyYay with all backend features completed which include:</h6>

      </div>

      <div style={{ background: '#ffebee', padding: '5px', margin: '18px' }}>
        <ul>
          <li><strong>User can signup/ signin to the app with their Google account instead of having to create another username and password pair.</strong></li>
          <br/>
          <li><strong>Technology used:</strong> Oauth/ Google Strategy/ Passport.js</li>
        </ul>
      </div>

      <div style={{ background: '#ffebee', padding: '5px', margin: '18px' }}>
        <ul>
          <li><strong>To create and send out emails, user can topup their SurveyYay balance. </strong></li>
          <br/>
          <li><strong>Technology used: </strong>Stripe payment handling API (Stripe.js/ StripeCheckout)</li>
          <br/>
          <li>NOTE: please enter Stripe test cc number: 4242 4242 4242 4242 with any expiration date and CVC to top up. You do not need to enter your own credit card number.</li>

        </ul>
      </div>

      <div style={{ background: '#ffebee', padding: '5px', margin: '18px' }}>
        <ul>
          <li><strong>Authenticated users can create an email template and enter multiple recipient emails to send out surveys with one simple click.</strong></li>
          <br/>
          <li><strong>Technology used:</strong> SendGrid email API</li>
        </ul>
      </div>

      <div style={{ background: '#ffebee', padding: '5px', margin: '18px' }}>
        <ul>
          <li><strong>Authenticated users can see their remaining SurveyYay credit, lists of sent surveys and the corresponding number of yes/no feedbacks from email recipients. Everytime a recipient opens an email and click yes/no in response to the survey questions, it will be updated in user dashboard.</strong></li>
          <br/>
          <li><strong>Technology used:</strong> MongoDB database, webhook, SendGrid click tracking</li>
        </ul>
      </div>
      <div style={{ textAlign: 'justify' }}>
        <div>
          <h4 style={{ textAlign: 'center', padding: '15px', margin: '18px' }}>That is me for now :)! In coming days, I look forward to:</h4>
          <ol>
            <li>Allow users to create more complicated surveys with different survey components, ie. text-based answer, multiple choice question, dropdown answers etc.</li>
            <li>A more graphical dashboard with charts and status bars</li>
            <li>Give user option to create their own username/password for authentication</li>
            <li>Redesign the look of the app as it is not really engaging at the moment</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Landing;
