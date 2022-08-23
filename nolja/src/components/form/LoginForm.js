import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { callLoginAPI } from "../../apis/UserAPICalls";
import { resetLoginUser } from "../../modules/UserModule";
import styles from './Form.module.css'

function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const result = useSelector(state => state.userReducer);
    const loginStatus = !!localStorage.getItem('isLogin');

    const [loginInfo, setLoginInfo] = useState(
        {
            id : '',
            password : ''
        }
    );

    const onChangeHandler = (e) => {
        setLoginInfo(
            {
                ...loginInfo,
                [e.target.name] : e.target.value
            }
        );
    }

    const onClickHandler = () => {
        dispatch(callLoginAPI(loginInfo));
    }

    useEffect(
        () => {
            if(result?.message) {
                alert('아이디와 비밀번호를 확인해주세요');
                setLoginInfo(
                    {
                        id : '',
                        password : ''
                    }
                );
                dispatch(resetLoginUser());
            } else if(loginStatus){
                navigate('/');
            }
        },
        [result]
    );

    return (
        <>
        <div className={ styles.loginform }>
                <label>ID : </label>
                <input text="text" name="id" value={ loginInfo.id } onChange={ onChangeHandler } placeholder="아이디를 입력하세요"/> &nbsp;&nbsp;&nbsp;
        </div> 

        <div className={ styles.password}>     
                <label>PASSWORD : </label>
                <input type="password" name="password" value={loginInfo.password} onChange={onChangeHandler} placeholder="비밀번호를 입력하세요"/>              
        </div>

        <div className={ styles.button}>
        <button onClick={onClickHandler}>로그인</button>
        </div>
        </>
    );

}

export default LoginForm;