require("dotenv").config();
const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/admin/adminRoutes");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ROUTES
app.use("/", routes);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/home/subscribe", async (req, res) => {
    const { email } = req.body;
  
    console.log("Received subscription request. Email:", email); // Debugging log for incoming request
  
    if (!email) {
      console.error("No email provided."); // Log for missing email
      return res.status(400).json({ error: "Email is required" });
    }
  
    try {
      console.log("Attempting to send confirmation email..."); // Debugging log before sending email
  
      // Send confirmation email
      await transporter.sendMail({
        from: '"Your Ocean Newsletter" <your-email@example.com>',
        to: email,
        subject: "Welcome to Our Ocean Newsletter!",
        text: "Thank you for subscribing to our ocean newsletter. Get ready to dive into exciting updates!",
        html: "<b>Thank you for subscribing to our ocean newsletter. Get ready to dive into exciting updates!</b>",
      });
  
      console.log("Confirmation email sent successfully to:", email); // Log after successful email send
  
      // Here you would typically also save the email to your database
      // Example: await saveEmailToDatabase(email);
  
      res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      console.error("Error sending email:", error); // Detailed error log
      res.status(500).json({ error: "An error occurred while processing your subscription" });
    }
  });
  

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsAllowInvalidCertificates: true, // For testing only
};

// CONNECT TO MONGODB
mongoose
  .connect(process.env.MONGO_URL, options)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port " + process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
