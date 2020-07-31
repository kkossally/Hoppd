export const ERROR_MESSAGES = {
  "F name can't be blank": "Please enter your first name.",
  "L name can't be blank": "Please enter your last name.",
  "Password is too short (minimum is 5 characters)": "Please enter a password of at least 5 characters.",
  "Password confirmation can't be blank": "Please confirm your password.",
  "Username can't be blank": "Please choose a username.",
  "Email can't be blank": "Please enter your email address.",
  "Email is invalid": "Please enter a valid email address.",
  "Birthday can't be blank": "Please enter your full birthday.",
  "Birthday must be 21 years ago": "You must be of legal drinking age.",
}

export const formatSignupFormErrors = ( session ) => {
  debugger
 return session.map( error => ERROR_MESSAGES[error] || error )
}
