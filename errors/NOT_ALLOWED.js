class NotAllowed extends Error {
  constructor(msg) {
    super(msg);
    this.statusCode = 403;
  }
}

module.exports = NotAllowed;