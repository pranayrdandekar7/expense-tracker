const textTemplate =` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Our Service!</h1>
        <p>Dear ####user###,</p>
        <p>Thank you for signing up! We're excited to have you on board.</p>
        <p>Feel free to explore our platform and reach out if you have any questions.</p>
        <p>Best Regards,<br>Pranay Dandekar</p>
        <div class="footer">
            <p> Pranay Dandekar @ 2024 . All rights reserved.</p>
        </div>
    </div>
</body>
</html>`

export {textTemplate}