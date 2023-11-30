// user.js
// User class definition

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  displayInfo() {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  }
}

// Export the User class
module.exports = User;
