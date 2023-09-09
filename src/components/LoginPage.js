import { ToastContainer } from 'react-toastify';
import { notify } from './toast.js';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { validate } from './LoginValidate';
import styles from './ComponentsStyles.module.css'
import mainLogo from '../assets/logo-purple.png'
import axios from 'axios';
const LoginPage = () => {

    const [touched, isTouched] = useState({})
    const [errors, setErrors] = useState({})
    const [data, setData] = useState({
        username:'',
        password:'',
    })

    const changeHandler = (event=>{
        setData({...data, [event.target.name]:event.target.value})
    })

    useEffect(()=>{
        setErrors(validate(data, "login"))
    }, [data, touched])

    const focusHandler = event=>{
        isTouched({...touched, [event.target.name]:true})
    }

    const submitHandler = event=>{
        event.preventDefault()
        if(!Object.keys(errors).length){
            notify("successfully Loged In", 'success')
            
        }else{
            notify("invalid inputs")
            isTouched({
                username:true,
                password:true,
            })
        }
        // axios.get('https://api.csaiauk.ir/admin/members')
        // .then(res=>console.log(res))
    }
    
    return (
        <div className={styles.logInContainer}>
            <div className='h-full w-[60vw] bg-[#ffffff] items-center'>
                <form onSubmit={submitHandler} className='pr-[222px] pt-[82px]'>
                    <img className='w-[115px] mr-[237px] mb-[62px]' src={mainLogo} alt='main-logo'/>
                    <h2 className='text-[20px] font-bold mb-[16px] text-[#222222]'>خوش آمدید!</h2>
                    <h2 className='text-[12px] text-[#707070] mb-[40px]'>اطلاعات خود را برای دسترسی به حساب وارد کنید</h2>
                    <div className=''>
                        <label>شماره موبایل یا ایمیل</label>
                        <input className='w-[590px] text-[16px] flex border-[1px] border-[#9A9A9A] rounded pr-[16px] py-[12px] mt-[16px]' type='text' name='username' value={data.username} onChange={changeHandler} onFocus={focusHandler} placeholder='09180000000' />
                        {errors.username && touched.username && <span className='text-[#F00000]'>{errors.username}</span>}
                    </div>
                    <div className='mt-[24px]'>
                        <label>رمز عبور</label>
                        <input className='w-[590px] text-[16px] flex border-[1px] border-[#9A9A9A] rounded pr-[16px] py-[12px] mt-[16px]' type='password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} placeholder='رمز عبور خود را وارد کنید'/>
                        {errors.password && touched.password && <span className='text-[#F00000]'>{errors.password}</span>}
                    </div>
                    <div className='flex mt-[16px] items-center'>
                        <input className='ml-[12px]' type='checkbox' name='checkbox' value={data.checkbox} onChange={changeHandler} onFocus={focusHandler}/>
                        <label className='text-[#707070]'>مرا به خاطر بسپار</label>
                        {errors.checkbox && touched.checkbox && <span>{errors.checkbox}</span>}
                    </div>
                    <div>
                        <button type='submit' onClick={notify} className='px-[274px] py-[10px] bg-[#0E8AF2] mt-[25px] text-white rounded text-[18px] font-bold'>ورود</button>
                    </div>
                    </form>
                    <ToastContainer />
            </div>
        </div>
    );
};

export default LoginPage;
{/* <input className={(errors.email && touched.email)? styles.uncompleted : styles.formInput} type='text' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler} /> */}
                    // <input className={(errors.password && touched.password)? styles.uncompleted : styles.formInput} type='password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
