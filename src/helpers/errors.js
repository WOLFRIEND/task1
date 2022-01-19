export const errors = Object.freeze({
  WRONG_CREDENTIALS_ERROR: {
    message: "wrong_email_or_password",
    translationId: "The username or password is incorrect",
  },
  SERVER_ERROR: {
    message: "server_is_unavailable",
    translationId: "The server is unavailable",
  },
  USER_NOT_FOUND: {
    message: "user_not_found",
    translationId: "User not found.",
  },
  DEFAULT: {
    message: null,
    translationId: "Failed. Something bad happened.",
  },
});
