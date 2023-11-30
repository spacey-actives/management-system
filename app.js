// Importing the User class from user.js
const User = require('./user');

// Creating instances of the User class
const user1 = new User('john_doe', 'john@example.com');
const user2 = new User('jane_smith', 'jane@example.com');

// Displaying user information
user1.displayInfo();
user2.displayInfo();
