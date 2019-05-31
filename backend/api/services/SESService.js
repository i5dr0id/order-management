require('dotenv').config();
const AWS = require('aws-sdk');

const ses = new AWS.SES({
  apiVersion: '2010-12-01',
  region: 'us-east-1'
});

module.export = {
  sendEmail: async function (toAddress, emailSubject, HTMLFormatBody, TextFormatBody) {
    AWS.config.update({
      region: 'REGION'
    });

    const params = {
      Destination: {
        ToAddresses: [toAddress, ]
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: HTMLFormatBody
          },
          Text: {
            Charset: 'UTF-8',
            Data: TextFormatBody
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: emailSubject
        }
      },
      Source: 'easymax1069@gmail.com'
    };

    // Create the promise and SES service object
    // const sendPromise = new AWS.SES({
    //     apiVersion: '2010-12-01',
    //     region: 'us-east-1'
    //   })
    ses.sendEmail(params).promise();

    sendPromise.then(
      (data) => {
        console.log(data.MessageId);
      }).catch(
      (err) => {
        console.error(err, err.stack);
      });

  }
};
