type UserInformation = {
  email: string;
  password: string;
}

function validateUser(values: UserInformation){
  const errors = {
    email: '',
    password: '',
    passwordConfirm: '',
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) { // 이메일 정규 표현식 통과하지 못하면
    errors.email = '올바른 이메일 형식이 아닙니다.';
  }
  if(!(values.password.length >= 8 && values.password.length<20)) {
    errors.password ='비민번호는 8~20자 사이로 입력해 주세요.';
  }

  return errors;


}


function validateLogin(values:UserInformation) {
  return validateUser(values);
}

function validateSignup(values: UserInformation & {passwordConfirm: string}) {
  const errors = validateUser(values);
  const signupErrors = {...errors, passwordConfirm: ''};

  if (values.password !== values.passwordConfirm){
    signupErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  }

  return signupErrors;
  
}


export {validateLogin, validateSignup};