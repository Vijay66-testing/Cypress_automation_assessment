module.exports = {
    validUser: {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe" + Math.floor(Math.random() * 1000) + "@test.com",
      password: "Test@1234",
      confirmPassword: "Test@1234"
    },
  
    ExistingUser: {
      firstName: "John",
      lastName: "Smith",
      email: "johndoe123@test.com",
      password: "Teast@123",
      confirmPassword: "Teast@123"
    },
    messages : {
        successMessage: 'Thank you for registering',
        duplicateEmailError: 'There is already an account with this email address'
    }
  };
  