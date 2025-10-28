import Mailgen from "mailgen";
import nodemailer from "nodemailer";

//sending email with nodemailer
const sendEmail = async (options) => {
   const mailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Scrum Master",
        link: "http://localhost:3000"
    }
   })

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
    const emailHTML = mailGenerator.generate(options.mailgenContent);

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail = {
        from: "jshiloh@outlook.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHTML
    }

    try {
        await transporter.sendMail(mail);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Email service failing silently. Make sure that you check you have provided the correct Mailtrap credentials ", error);
    }
}

//email verification mailgen content

const emailVerificationMailgenContent = (username, verificationUrl) => {

    return {
        body: {
            name: username,
            intro: "You have successfully created an account on Scrum Master!",
            action: {
                instructions: "To verify your email address, please click on the button below.",
                button: {
                    text: "Verify Email",
                    link: verificationUrl,
                }
            },
            outro: "If you did not create an account, please ignore this email or reply to this email to let us know."
        }
    }

}

//forgot password mailgen content

const forgotPasswordMailgenContent = (username, resetPasswordUrl) => {
    return {
        body: {
            name: username,
            intro: "We got a request to reset the password for your account.",
            action: {
                instructions: "To reset on your password please click on the button below.",
                button: {
                    text: "Reset Password",
                    link: resetPasswordUrl,
                }
            },
            outro: "Need help, or have questions ? Jst reply  to this email, we'd love to help."

        }
    };
};

export {
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent,
    sendEmail
};