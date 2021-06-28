import React from 'react';
import Text from './Text';
import Header from './Header';
import '../src/styles/LogIn.css';
import { useForm } from 'react-hook-form'; 

const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const resultObj = JSON.stringify(data);
        console.log(resultObj);
        cleanFields();
    }

    function cleanFields() {
        const inputIds = ['emailOrNickname', 'password'];
    
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
            </Header>
            <div className="mainLogIn">
                <form onSubmit={handleSubmit(onSubmit)} className="formRegister" >
                    <div className="formName">
                        <p>Log in to Ochify</p>
                    </div>

                    <label htmlFor="emailOrNickname" className="myLabel">Email or nickname</label>
                    <input type="text" className="myInput" id="emailOrNickname" {...register("emailOrNickname", { required: true, minLength: 2, maxLength: 20, pattern: /[A-Za-z]/gi } )} />
                    <p className="errorMessage">{ errors.emailOrNickname && "Email or your nickname is required*" }</p>

                    <label htmlFor="password" className="myLabel">Password</label>
                    <input type="text" className="myInput" id="password" {...register("password", { required: true, pattern: /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$/gi } )} />
                    <p className="errorMessage">{ errors.password && "Password is required*" }</p>

                    <input type="submit" id="formBtn" value="Log in" />

                    <div className="linkBlock">
                        <div>
                            <a href="#" className="coloredLink">Forgot password?</a>
                        </div>
                        <div>
                            <a href="#" className="coloredLink">No account? Create one</a>
                        </div>
                        <div>
                            <a className="linkContent" href="#">Sign up with</a> <a href="https://www.google.com.ua/?hl=ru"><img src="https://img.icons8.com/ios-glyphs/96/000000/google-logo.png" className="googleIcon" alt="Google Icon" /></a>
                            <a href="https://uk-ua.facebook.com/"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-circled--v1.png" className="facebookIcon" alt="Facebook Icon" /></a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LogIn;
