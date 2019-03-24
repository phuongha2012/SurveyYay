const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Hi, pleae help us with you input!</h3>
          <p>We would like to know your anwser for the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes, I agree with it</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No, I don't think that is a good idea</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
