const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rahulrajkhare@gmail.com',
        subject: 'Welcome to Task App!',
        text: `Welcome to the Task app, ${name}. Hope you are able to complete every item on your list here! Here's to productivity!!`,
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rahulrajkhare@gmail.com',
        subject: 'We will miss you! :(',
        text: `We wish you all the best in your future tasks ${name}, and hope we have played a role in increasing your productivity! GoodBye! :((`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
