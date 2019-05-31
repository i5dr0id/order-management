const twilio = require('twilio');

const ACCOUNT_SID = 'AC3fd6d9d3d981c542e6ddd2fc1f853642';
const AUTH_TOKEN = '51bbc0ce1286ae1084b74b4d0f0a6498';
const TWILIO_NUMBER = '+13523254679';

const client = new twilio(ACCOUNT_SID, AUTH_TOKEN);
module.exports = {
  async sendMessage(to, body) {
    const clientMessage = await client.messages.create({
      to: to,
      from: TWILIO_NUMBER,
      body: body
    });
    // .then(message => console.log(message.sid));
  },

};
// await TwilioService.sendMessage('+2348130155009', 'i5dr0id says hi')
