<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $company = htmlspecialchars(trim($_POST['company']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $industry = htmlspecialchars(trim($_POST['industry']));
    $service = htmlspecialchars(trim($_POST['service']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Set recipient email (CHANGE THIS to client's email)
    $to = "info@rebamotaki.co.za";
    $subject = "New Consultation Request from Rebamotaki Website";
    
    // Build email content
    $email_content = "New Contact Form Submission:\n\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Company: $company\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Industry: $industry\n";
    $email_content .= "Service Interested In: $service\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Email headers
    $headers = "From: website@rebamotaki.co.za\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        // Success - redirect to thank you page
        header('Location: thank-you.html');
        exit;
    } else {
        // Error
        header('Location: contact.html?status=error');
        exit;
    }
} else {
    // Not a POST request
    header('Location: contact.html');
    exit;
}
?>