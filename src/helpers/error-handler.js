import { errors } from "helpers/errors";

export class ErrorHandler {
  constructor(error = {}) {
    this._error = error;
  }

  process() {
    const msgTrId = this._getTranslationId(this._error);

    return new Error(msgTrId);
  }

  _getTranslationId(error) {
    let translationId;

    switch (error.message) {
      case errors.WRONG_CREDENTIALS_ERROR.message:
        translationId = errors.WRONG_CREDENTIALS_ERROR.translationId;
        break;
      case errors.SERVER_ERROR.message:
        translationId = errors.SERVER_ERROR.translationId;
        break;
      case errors.USER_NOT_FOUND.message:
        translationId = errors.USER_NOT_FOUND.translationId;
        break;
      default:
        translationId = errors.DEFAULT.translationId;
    }

    return translationId;
  }
}
