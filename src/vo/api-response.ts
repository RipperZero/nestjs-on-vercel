import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { HttpExceptionBodyMessage } from "@nestjs/common/interfaces/http/http-exception-body.interface";

// class ApiResponse<T> implements HttpExceptionBody {
//   statusCode: number;
//   message: HttpExceptionBodyMessage;
//   data: T;
//   error?: string;

// }
type ApiResponseResult<D> = {
  code?: string;
  result: boolean;
  data: D;
  message?: HttpExceptionBodyMessage;
};

class ApiResponse<D> {
  result: ApiResponseResult<D>;

  constructor(result: ApiResponseResult<D>) {
    this.result = result;
  }

  static SUCCESS<D>(params: {
    code?: string;
    message?: HttpExceptionBodyMessage;
    data: D;
  }): ApiResponseResult<D> {
    return {
      code: params.code ?? HttpStatus.OK.toString(),
      result: true,
      data: params.data,
      message: params.message ?? "",
    };
  }

  static FAIL<D>(params: {
    code?: string;
    data: D;
    message?: HttpExceptionBodyMessage;
  }): ApiResponseResult<D> {
    return {
      code: params.code ?? HttpStatus.INTERNAL_SERVER_ERROR.toString(),
      result: false,
      data: params.data,
      message: params.message ?? "",
    };
  }
}

export type { ApiResponseResult };
export { ApiResponse };
