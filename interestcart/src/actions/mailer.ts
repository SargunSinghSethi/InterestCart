import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import { db } from "~/server/db";

export const SendEmail = async ({ email, userId }: any) => {
    try {

        const hashedToken = (await bcryptjs.hash(userId.toString(),10)).substring(0,8);
        console.log(hashedToken);

        await db.user.update({
            where : {
              email : email,
            },
            data : {
                verifyToken : hashedToken,
                verifyTokenExpiry : Date.now() + 3600000,
            }
          })

        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            }
        });
        const mailOptions = {
            from: "spidey9858@gmail.com",
            to : email,
            subject : 'Verify your email',
            text : `Your verification code is Code: ${hashedToken}`
        }
        const mailresponse = await transporter.sendMail(mailOptions);
        return mailresponse;
    } catch (error: any) {
        throw new Error(error.message);
    }
}