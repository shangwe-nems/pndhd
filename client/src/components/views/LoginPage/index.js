import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Input, Checkbox, Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer';
import './login.css'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_actions';


function LoginPage(props) {
    const dispatch = useDispatch();
    const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

    const [formErrorMessage, setFormErrorMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(rememberMeChecked);

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    }

    const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem('rememberMe') : '';

    return (
        <> 
            <div className="contains">
                <div className="contained">
                    <Formik
                        initialValues={{
                            email: initialEmail,
                            password: ''
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email("Votre email est invalide").required("Votre email est exigé"),
                            password: Yup.string().min(6, 'Au moins 6 characteres').required('Votre mot de passe est exigé')
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                let dataToSubmit = {
                                    email: values.email,
                                    password: values.password
                                };

                                dispatch(loginUser(dataToSubmit))
                                    .then(response => {
                                        if (response.payload.loginSuccess) {
                                            window.localStorage.setItem('userId', response.payload.userId);
                                            if (rememberMe === true) {
                                                window.localStorage.setItem('rememberMe', values.id);
                                            } else {
                                                localStorage.removeItem('rememberMe');
                                            }
                                            props.history.push('/main')
                                        } else {
                                            setFormErrorMessage("Verifiez votre mot de passe ou email encore!")
                                        }
                                    }).catch(err => {
                                        setFormErrorMessage("Verifiez votre mot de passe ou email encore!");
                                        setTimeout(() => {
                                            setFormErrorMessage("")
                                        }, 3000);
                                    });
                                setSubmitting(false);
                            }, 500);
                        }}
                    >
                        {props => {
                            const {
                                values,
                                touched,
                                errors,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            } = props;
                            
                            return (
                                <div style={{display:'grid', placeContent:'center', width: '100%', height:'95vh', }}>
                                    <div style={{width: 400, border: '1px solid #cacaca', backgroundColor:'rgba(255, 255, 255, 1)', padding: 30, borderRadius:20, margin:10}}>
                                        <div style={{ marginTop: -130, width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                                            <Avatar src={require('../../assets/img/logo.png')} alt="" size={180}  shape="circle" />
                                            <p style={{fontSize:24, marginBottom: 30}}>PNHD</p>
                                        </div>
                                        <p style={{fontSize:18}}>Se connecter...</p>
                                        <form onSubmit={handleSubmit}>
                                            <Form.Item required>
                                                <Input
                                                    id="email"
                                                    value={values.email}
                                                    prefix={<FontAwesomeIcon icon={faUserAlt} style={{ color: 'rgba(0,0,0,.25)', marginRight:5 }}/>}
                                                    placeholder="Entrez votre adresse email..."
                                                    type="text"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.email && touched.email ? 'text-input error' : 'text-input'
                                                    }
                                                />
                                                {errors.email && touched.email && (
                                                    <div className="input-feedback">{errors.email}</div>
                                                )}
                                            </Form.Item>

                                            <Form.Item required>
                                                <Input
                                                    
                                                    id="password"
                                                    prefix={<FontAwesomeIcon icon={faLock} style={{ color: 'rgba(0,0,0,.25)', marginRight:5 }} />}
                                                    placeholder="Entrez votre mot de passe"
                                                    type="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.password && touched.password ? 'text-input error' : 'text-input'
                                                    }
                                                />
                                                {errors.password && touched.password && (
                                                    <div className="input-feedback">{errors.password}</div>
                                                )}
                                            </Form.Item>

                                            {formErrorMessage && (
                                            <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
                                            )}
                                            <Form.Item>
                                            <div style={{display:'inline-flex', justifyContent: 'space-between', alignItems:'center', width:'100%'}}>
                                                <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe} >Se souvenir de moi</Checkbox>
                                                <a className="login-form-forgot" href="/reset_user" style={{ float: 'right', marginTop:2 }}>
                                                    Mot de passe oublié ?
                                                </a>
                                            </div>
                                            
                                            <div style={{marginTop:20}}>
                                                <Button size="large" shape="round" type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                                                    Se connecter...
                                                </Button>
                                            </div>
                                            </Form.Item>
                                        </form>
                                    </div>
                                </div>
                            )
                        }}
                    </Formik>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default withRouter(LoginPage);
