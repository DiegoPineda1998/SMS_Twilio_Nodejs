//Requires
require('dotenv').config();
const app = require('express')();

//Settings
app.set('port', process.env.PORT || 3000);

//Use of twilio for send sms
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid,authToken);

client.messages.create({
    body : 'Hola mundo soy Diego',
    to: process.env.MY_PHONE_NUMBER,
    from: process.env.PHONE_NUMBER_TWILIO
})
    .then(message => {
        console.log(message.sid);
    });

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});