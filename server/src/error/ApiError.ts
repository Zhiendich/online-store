interface ApiError {
  status: number;
  message: string;
}

class ApiError {
  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }

  static notFound(message: string) {
    return new ApiError(404, message);
  }

  static badRequest(message: string) {
    return new ApiError(400, message);
  }

  static internal(message: string) {
    return new ApiError(500, message);
  }

  static forbidden(message: string) {
    return new ApiError(403, message);
  }
}

export default ApiError;
