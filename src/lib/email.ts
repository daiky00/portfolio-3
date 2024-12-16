import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = "default_service";
const EMAILJS_TEMPLATE_ID = "template_contact_form";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // You'll need to replace this

export async function sendEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: "mr.franciscopenajobs@gmail.com",
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      EMAILJS_PUBLIC_KEY
    );
    
    return response;
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
}