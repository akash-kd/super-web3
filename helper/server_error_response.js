export default class ServerErrorResponse {
    constructor(status = 500, data = {}, message = "Internal Server Error") {
      this.status = status;
      this.data = data;
      this.message = message;
    }
  
    setStatusCode(status) {
      this.status = status;
      return this;
    }
  
    setData(data) {
      this.data = data;
      return this;
    }
  
    setMessage(message) {
      this.message = message;
      return this;
    }
  
    send(res) {
      if (this.response) {
        this.res.status(this.status).json({
          message: this.message,
          data: this.data,
        });
        return this.response;
      }
      res.status(this.status).json({
        status: this.status,
        message: this.message,
        data: this.data,
      });
  
      return res;
    }
  }
  