import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD, // Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // send to yourself
      subject: `New Message from ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully!",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Gmail SMTP Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        errorMsg: "Failed to send email",
      }),
      { status: 500 }
    );
  }
}
