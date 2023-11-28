class ServerError extends Error {
    status: number;
    constructor( status: number, message: string) {
      if(typeof status !== 'number') {
        throw new TypeError('Status must be a number');
      }
      if(typeof message !== 'string') {
        throw new TypeError('Message must be a string');   
      }
      super(message);
      this.status = status;
    }
  }
  
export default ServerError