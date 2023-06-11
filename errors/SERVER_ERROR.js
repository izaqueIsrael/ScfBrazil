class ServerError extends Error {
  constructor(msg) {
    super(msg);
    this.statusCode = 500;
  }
}

module.exports = ServerError;
