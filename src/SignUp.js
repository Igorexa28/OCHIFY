import Text from './Text';
import Header from './Header';
import Button from './Button';
import '../src/styles/SignUp.css';
import { useForm } from 'react-hook-form';

const SingUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const resultObj = JSON.stringify(data);
    console.log(resultObj);
    cleanFields();
  }

  function cleanFields() {
    const inputIds = ['firstName', 'secondName', 'nickName', 'email', 'password'];

    for (let index = 0; index < inputIds.length; index++) {
      let inputElement = document.querySelector(`#${inputIds[index]}`);
      inputElement.value = null; 
    }

    return 'Fields were cleaned...';
  } 

  return (
    <>
    <Header className="headLogSignUp">
      <Text className="headTextLogSignUp" text="OCHIFY" />
      <Button type="submit" id="logInRegBtn" className="logInSign" text="Log in" />
    </Header>
    <div className="mainSignUp">
        <form onSubmit={handleSubmit(onSubmit)} className="formRegister">
          <div className="formName">
            <p>Sign Up to Ochify</p>
          </div>

            <label htmlFor="firstName" className="myLabel">First name</label>
            <input type="text" className="myInput" id="firstName" {...register("firstName", { required: true, minLength: 2, maxLength: 20, pattern: /[A-Za-z]/gi })} />
            <p className="errorMessage">{ errors.firstName && "First name is required*" }</p>

            <label htmlFor="secondName" className="myLabel">Second name</label>
            <input type="text" className="myInput" id="secondName" {...register("secondName", { required: true, minLength: 2, maxLength: 20, pattern: /[A-Za-z]/gi })} />
            <p className="errorMessage">{ errors.secondName && "Second name is required*" }</p>

            <label htmlFor="nickName" className="myLabel">Nickname</label>
            <input type="text" className="myInput" id="nickName" {...register("nickName", { required: true, minLength: 2, maxLength: 32} )} />
            <p className="errorMessage">{ errors.nickName && "Nickname is required*" }</p>

            <label htmlFor="email" className="myLabel">Email</label>
            <input type="text" className="myInput" id="email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi } )} />
            <p className="errorMessage">{ errors.email && "Email is required*" }</p>

            <label htmlFor="password" className="myLabel">Password</label>
            <input type="text" className="myInput" id="password" {...register("password", { required: true, pattern: /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$/gi } )} />
            <p className="errorMessage">{ errors.password && "Password is required*" }</p>

            <input type="submit" id="formBtn" value="Sign in" />
                <div className="linkBlockSign">
                <center>
                    <a className="linkContent" href="#">Sign up with</a> <a href="https://www.google.com.ua/?hl=ru"><img src="https://img.icons8.com/ios-glyphs/96/000000/google-logo.png" className="googleIcon" alt="Google Icon" /></a>
                    <a href="https://uk-ua.facebook.com/"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-circled--v1.png" className="facebookIcon" alt="Facebook Icon" /></a>
                  </center>
                </div>
          </form>
    </div>
  </>
);

}

export default SingUp;

