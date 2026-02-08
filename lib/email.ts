import { Resend } from 'resend';
import { prisma } from '@/lib/db';

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailTemplate = 'welcome' | 'reset-password' | 'verify-email' | 'payment-confirmation' | 'new-application-notification' | 'contact-form' | 'contact-confirmation';

interface SendEmailProps {
  to?: string; // 'to' is optional as payment-confirmation will fetch it
  template: EmailTemplate;
  data: Record<string, unknown>;
}

export async function sendEmail({ to, template, data }: SendEmailProps) {
  if (!process.env.RESEND_API_KEY) {
    console.error('FATAL: Resend API key is not configured. Cannot send email.');
    return { success: false, error: 'Resend API key is missing' };
  }

  try {
    const from = 'United eVisa Services Support <visa@unitedevisa.com>';
    let subject = '';
    let html = '';
    let recipient = to;
    let emailSubject = '';

    console.log('Email Service: Received request', { to, template, data });

    switch (template) {
      case 'payment-confirmation': {
        const { applicationId } = data as { applicationId: string };
        if (!applicationId) {
          throw new Error('Application ID is required for payment confirmation email.');
        }

        console.log(`Email Service: Fetching data for application ID: ${applicationId}`);
        const application = await prisma.application.findUnique({
          where: { applicationId },
          include: {
            account: true,
            visaType: true,
          },
        });

        if (!application) {
          throw new Error(`Email Service Error: Application with ID ${applicationId} not found.`);
        }
        if (!application.account?.email) {
          throw new Error(`Email Service Error: No email found for application ${applicationId}.`);
        }

        recipient = application.account.email;
        const contactName = application.account?.fullName || 'Customer';
        const governmentFee = application.visaType?.fees || 0;
        const serviceFee = 25.00;
        const total = application.total || 0;
        const passengerCount = application.passengerCount || 1;
        const appUrl = process.env.NEXT_PUBLIC_API_URL || '';

        subject = `Payment Confirmation for Your United eVisa Services (ID: ${application.applicationId})`;
        html = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Payment Confirmed</h1>
            </div>
            <div style="padding: 20px;">
              <p>Dear ${contactName},</p>
              <p>Thank you for your payment. Your application for the United eVisa Services has been successfully submitted and is now being processed.</p>
              
              <div style="background-color: #f9f9f9; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <h2 style="font-size: 18px; color: #059669; margin-top: 0;">Application Summary</h2>
                <p><strong>Application ID:</strong> <span style="font-family: monospace; background-color: #eee; padding: 2px 5px; border-radius: 4px;">${application.applicationId}</span></p>
                <p><strong>Primary Contact:</strong> ${recipient}</p>
                <p><strong>Total Passengers:</strong> ${passengerCount}</p>
              </div>

              <div style="border-top: 1px solid #ddd; margin-top: 20px; padding-top: 20px;">
                <h2 style="font-size: 18px; color: #059669; margin-top: 0;">Order Summary</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0;">Government Fee:</td>
                    <td style="padding: 8px 0; text-align: right;">$${governmentFee.toFixed(2)} x ${passengerCount}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;">Service Fee:</td>
                    <td style="padding: 8px 0; text-align: right;">$${serviceFee.toFixed(2)} x ${passengerCount}</td>
                  </tr>
                  <tr style="font-weight: bold;">
                    <td style="padding: 8px 0; border-top: 1px solid #ddd;">Total Paid:</td>
                    <td style="padding: 8px 0; border-top: 1px solid #ddd; text-align: right;">$${total.toFixed(2)}</td>
                  </tr>
                </table>
              </div>

              <div style="margin-top: 30px; text-align: center;">
                <h2 style="font-size: 18px; color: #059669;">What's Next?</h2>
                <p>You may need to upload documents for some or all passengers on your application. Please proceed to the document upload step.</p>
                <a href="${appUrl}/apply?applicationId=${application.applicationId}" style="display: inline-block; background-color: #059669; color: white; padding: 12px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; margin-top: 10px;">
                  Continue to Document Upload
                </a>
              </div>
            </div>
            <div style="background-color: #f0f0f0; padding: 15px; font-size: 12px; text-align: center; color: #666;">
              <p>If you have any questions, please contact our 24/7 support.</p>
              <p>&copy; ${new Date().getFullYear()} United eVisa Services. All Rights Reserved.</p>
            </div>
          </div>
        `;
        break;
      }

      case 'welcome': {
        if (!recipient) throw new Error('Recipient is required for welcome email');
        const user = await prisma.account.findFirst({ where: { email: recipient } });
        subject = 'Welcome to United eVisa Services';
        html = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Welcome to United eVisa Services!</h1>
            </div>
            <div style="padding: 20px;">
              <p>Dear ${user?.fullName || 'Customer'},</p>
              <p>Thank you for creating an account with United eVisa Services. We're excited to help you with your visa application process.</p>
              
              <div style="background-color: #f9f9f9; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <h2 style="font-size: 18px; color: #059669; margin-top: 0;">Get Started</h2>
                <ul style="list-style: none; padding: 0;">
                  <li style="margin: 10px 0;">✅ <a href="${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/apply" style="color: #059669;">Apply for eVisa</a></li>
                  <li style="margin: 10px 0;">✅ <a href="${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/list" style="color: #059669;">Check Visa Status</a></li>
                  <li style="margin: 10px 0;">✅ <a href="${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/profile" style="color: #059669;">View Your Account</a></li>
                </ul>
              </div>
              
              <p>If you need any assistance, please don't hesitate to contact our 24/7 support team.</p>
              <p>Best regards,<br>United eVisa Services Team</p>
            </div>
            <div style="background-color: #f0f0f0; padding: 15px; font-size: 12px; text-align: center; color: #666;">
              <p>&copy; ${new Date().getFullYear()} United eVisa Services. All Rights Reserved.</p>
            </div>
          </div>
        `;
        break;
      }

      case 'verify-email': {
        if (!recipient) throw new Error('Recipient is required for email verification');
        const user = await prisma.account.findFirst({ where: { email: recipient } });
        subject = 'Verify Your Email - United eVisa Services';
        html = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Email Verification</h1>
            </div>
            <div style="padding: 20px;">
              <p>Dear ${user?.fullName || 'Customer'},</p>
              <p>Please verify your email address by clicking the link below:</p>
              <div style="text-align: center; margin: 20px 0;">
                <a href="${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/verify-email/${data?.token}" style="display: inline-block; background-color: #059669; color: white; padding: 12px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">
                  Verify Email
                </a>
              </div>
              <p>This link will expire in 24 hours.</p>
              <p>Best regards,<br>United eVisa Services Team</p>
            </div>
            <div style="background-color: #f0f0f0; padding: 15px; font-size: 12px; text-align: center; color: #666;">
              <p>&copy; ${new Date().getFullYear()} United eVisa Services. All Rights Reserved.</p>
            </div>
          </div>
        `;
        break;
      }

      case 'reset-password': {
        if (!recipient) throw new Error('Recipient is required for reset-password');
        const user = await prisma.account.findFirst({ where: { email: recipient } });
        subject = 'Reset Your Password - United eVisa Services';
        html = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Password Reset Code</h1>
            </div>
            <div style="padding: 20px;">
              <p>Dear ${user?.fullName || 'Customer'},</p>
              <p>We received a request to reset your password. Use the code below to set a new password:</p>
              <div style="text-align: center; margin: 20px 0;">
                <div style="background-color: #f9f9f9; border: 2px solid #059669; border-radius: 8px; padding: 20px; display: inline-block;">
                  <p style="margin: 0; font-size: 24px; font-weight: bold; color: #059669; font-family: monospace; letter-spacing: 2px;">${data?.token}</p>
                </div>
              </div>
              <p style="text-align: center; margin-top: 20px;">
                <strong>Instructions:</strong><br>
                Enter the 6-digit code above as your OTP in the password reset form, then set your new password.
              </p>
              <p>This code will expire in 10 minutes.</p>
              <p>If you didn't request this, please ignore this email.</p>
              <p>Best regards,<br>United eVisa Services Team</p>
            </div>
            <div style="background-color: #f0f0f0; padding: 15px; font-size: 12px; text-align: center; color: #666;">
              <p>&copy; ${new Date().getFullYear()} United eVisa Services. All Rights Reserved.</p>
            </div>
          </div>
        `;
        break;
      }

      case 'new-application-notification': {
        if (!recipient) throw new Error('Recipient is required for new-application-notification');
        const { applicationId, customerEmail, customerName, destinationName, visaTypeName, passengerCount, total, stayingStart, stayingEnd } = data as {
          applicationId: string;
          customerEmail: string;
          customerName: string;
          destinationName: string;
          visaTypeName: string;
          passengerCount: number;
          total: number;
          stayingStart: string;
          stayingEnd: string;
        };
        
        // Format dates
        const startDate = new Date(stayingStart).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
        const endDate = new Date(stayingEnd).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
        
        subject = `New Application Submitted - ${applicationId}`;
        html = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">New Application Submitted</h1>
            </div>
            <div style="padding: 20px;">
              <p>A new application has been submitted and requires attention.</p>
              
              <div style="background-color: #f9f9f9; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <h2 style="font-size: 18px; color: #059669; margin-top: 0;">Application Details</h2>
                <p><strong>Application ID:</strong> <span style="font-family: monospace; background-color: #eee; padding: 2px 5px; border-radius: 4px;">${applicationId}</span></p>
                <p><strong>Customer Name:</strong> ${customerName}</p>
                <p><strong>Customer Email:</strong> ${customerEmail}</p>
                <p><strong>Destination:</strong> ${destinationName}</p>
                <p><strong>Visa Type:</strong> ${visaTypeName}</p>
                <p><strong>Travel Dates:</strong> ${startDate} - ${endDate}</p>
                <p><strong>Passengers:</strong> ${passengerCount}</p>
                <p><strong>Total Amount:</strong> $${total.toFixed(2)}</p>
                <p><strong>Status:</strong> Lead Open</p>
              </div>
              
              <div style="margin-top: 30px; text-align: center;">
                <p><strong>Action Required:</strong> Customer needs to complete payment and document upload.</p>
                <p>Please monitor this application for completion.</p>
              </div>
            </div>
            <div style="background-color: #f0f0f0; padding: 15px; font-size: 12px; text-align: center; color: #666;">
              <p>&copy; ${new Date().getFullYear()} United eVisa Services. All Rights Reserved.</p>
            </div>
          </div>
        `;
        break;
      }

      case 'contact-form': {
        if (!recipient) throw new Error('Recipient is required for contact-form');
        const { customerName, customerEmail, customerPhone, message, subject, timestamp } = data as {
          customerName: string;
          customerEmail: string;
          customerPhone: string;
          message: string;
          subject: string;
          timestamp: string;
        };
        
        const formattedTime = new Date(timestamp).toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        });
        
        emailSubject = `New Contact Form Submission from ${customerName}`;
        html = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div style="padding: 20px;">
              <p>A new contact form has been submitted and requires attention.</p>
              
              <div style="background-color: #f9f9f9; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <h2 style="font-size: 18px; color: #059669; margin-top: 0;">Customer Details</h2>
                <p><strong>Name:</strong> ${customerName}</p>
                <p><strong>Email:</strong> ${customerEmail}</p>
                <p><strong>Phone:</strong> ${customerPhone}</p>
                <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
                <p><strong>Submitted:</strong> ${formattedTime}</p>
              </div>
              
              <div style="background-color: #f9f9f9; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <h2 style="font-size: 18px; color: #059669; margin-top: 0;">Message</h2>
                <div style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #ddd;">
                  ${message}
                </div>
              </div>
              
              <div style="margin-top: 30px; text-align: center;">
                <p><strong>Action Required:</strong> Please respond to this customer inquiry promptly.</p>
                <p>You can reply directly to: <a href="mailto:${customerEmail}" style="color: #059669;">${customerEmail}</a></p>
              </div>
            </div>
            <div style="background-color: #f0f0f0; padding: 15px; font-size: 12px; text-align: center; color: #666;">
              <p>&copy; ${new Date().getFullYear()} United eVisa Services. All Rights Reserved.</p>
            </div>
          </div>
        `;
        break;
      }

      case 'contact-confirmation': {
        if (!recipient) throw new Error('Recipient is required for contact-confirmation');
        const { customerName, message } = data as {
          customerName: string;
          message: string;
        };
        
        subject = 'Thank you for contacting United eVisa Services';
        html = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Message Received</h1>
            </div>
            <div style="padding: 20px;">
              <p>Dear ${customerName},</p>
              <p>Thank you for contacting United eVisa Services. We have received your message and our support team will get back to you as soon as possible.</p>
              
              <div style="background-color: #f9f9f9; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <h2 style="font-size: 18px; color: #059669; margin-top: 0;">Your Message</h2>
                <div style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #ddd;">
                  ${message}
                </div>
              </div>
              
              <div style="background-color: #f0f9ff; border-radius: 8px; padding: 15px; margin: 20px 0; border-left: 4px solid #059669;">
                <h3 style="font-size: 16px; color: #059669; margin-top: 0;">What to Expect</h3>
                <ul style="margin: 0; padding-left: 20px;">
                  <li>We typically respond within 1-2 hours during business hours</li>
                  <li>For urgent visa applications, please call our 24/7 support line</li>
                  <li>You can also track your application status in your account</li>
                </ul>
              </div>
              
              <p>If you have an urgent inquiry, please don't hesitate to call our 24/7 support team.</p>
              <p>Best regards,<br>United eVisa Services Support Team</p>
            </div>
            <div style="background-color: #f0f0f0; padding: 15px; font-size: 12px; text-align: center; color: #666;">
              <p>&copy; ${new Date().getFullYear()} United eVisa Services. All Rights Reserved.</p>
            </div>
          </div>
        `;
        break;
      }

      default: {
        // Fallback for other templates that require a 'to' address
        if (!recipient) {
          throw new Error(`No recipient email address provided for template: ${template}`);
        }
        subject = 'United eVisa Services Notification';
        html = `<p>This is a default notification from United eVisa Services.</p>`;
        break;
      }
    }

    if (!recipient) {
      throw new Error(`No recipient email address could be determined for template: ${template}`);
    }

    console.log('Sending email with config:', { from, to: recipient, subject });

    // Generate plain text version from HTML
    const plainText = html
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ') // Replace non-breaking spaces
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();

    const result = await resend.emails.send({
      from,
      to: recipient,
      subject: template === 'contact-form' ? emailSubject : subject,
      html,
      text: plainText,
    });

    console.log('Email send result:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('Email sending error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
} 