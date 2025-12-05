import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: Transporter;
  constructor(private configServive: ConfigService) {
    this.transporter = createTransport({
      service: 'Gmail',
      auth: {
        user: this.configServive.get('SMTP_USER'),
        pass: this.configServive.get('SMTP_PASS'),
      },
    });
  }




  sendResetPasswordEmail(email: string, token: string)
  {
      const user = email.split('@')[0];  
      const requestUrl = `http://localhost:3000/auth/request-password-reset/?email=${email}&token=${token}`;

     const passwordResetTemplate = `<html>
     <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 30px;">
      <div style="
      max-width: 500px;
      margin: auto;
      background: #ffffff;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    ">
      
      <h2 style="color: #333333; text-align: center; margin-bottom: 20px;">
        Password Reset Request
      </h2>

      <p style="font-size: 16px; color: #555555;">
        Dear <strong>${user}</strong>,
      </p>

      <p style="font-size: 15px; color: #555555; line-height: 1.6;">
        We received a request to reset your password.  
        Click the button below to continue.
      </p>

      <div style="text-align: center; margin: 25px 0;">
        <a href="${requestUrl}" style="
          background: #4f46e5;
          color: white;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 6px;
          font-size: 16px;
          display: inline-block;
        ">
          Reset Password
        </a>
      </div>

      <p style="font-size: 14px; color: #777777; line-height: 1.6;">
        If you didn’t request this change, please ignore this email.  
        This link will expire soon for your security.
      </p>

      <hr style="border: none; height: 1px; background: #eeeeee; margin: 25px 0;" />

      <p style="font-size: 12px; color: #aaaaaa; text-align: center;">
        &copy; ${new Date().getFullYear()} RMS-COMPANY NAME. All rights reserved.
      </p>

    </div>
  </body>
</html>
`  


      const mailObj = {
          subject: "Password Reset",
          to: [email],
          html:passwordResetTemplate
      }

      return this.sendMail(mailObj)
  }





  sendMail({
    subject,
    html,
    to,
    attachments,
  }: {
    to: string[];
    subject: string;
    html: string;
    attachments?: any[];
  }) {
    return this.transporter.sendMail({
      from: this.configServive.get('EMAIL_USER'),
      to,
      subject,
      text: '',
      html,
      attachments,
    });
  }
}
