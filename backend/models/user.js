const db = require('../util/database');

module.exports = class User {
  constructor(username, password, fullname) {
    this.username = this.username;
    this.password = password;
    this.fullname = this.fullname;
  }

  static find(username) {
    return db.execute('SELECT * FROM users WHERE username = ?', [username]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO users (username, password, fullname) VALUES (?, ?, ?)',
      [user.username, user.password, user.fullname]
    );
  }
};
