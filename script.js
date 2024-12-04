// Function to generate a random CAPTCHA code
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaCode = '';
    
    for (let i = 0; i < 6; i++) {
      captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    // Display the generated CAPTCHA on the screen
    document.getElementById('captcha').textContent = captchaCode;
    
    // Store the correct CAPTCHA code for verification
    localStorage.setItem('captchaCode', captchaCode);
  }
  
  // Function to verify the user input
  function verifyCaptcha() {
    const userInput = document.getElementById('userInput').value;
    const correctCaptcha = localStorage.getItem('captchaCode');
    const verificationMessage = document.getElementById('verificationMessage');
  
    if (userInput === correctCaptcha) {
      verificationMessage.style.color = 'green';
      verificationMessage.textContent = 'CAPTCHA Verified Successfully!';
    } else {
      verificationMessage.style.color = 'red';
      verificationMessage.textContent = 'Invalid CAPTCHA. Please try again.';
    }
  }
  
  // Initial CAPTCHA generation
  generateCaptcha();
  