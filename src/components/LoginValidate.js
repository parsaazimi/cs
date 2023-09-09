export const validate = (data, type) =>{
    const errors = {}    
    if(!data.username){
        errors.username = 'شماره موبایل یا ایمیل الزامی است'
    }
    // else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.username)){
    //     errors.username = 'Email is invalid'
    // }
    else{
        delete errors.username
    }

    if(!data.password){
        errors.password = 'رمزعبور الزامی است'
    }else if(data.password.length < 6){
        errors.password = 'رمزعبور باید حداقل 6 کاراکتر باشد'
    }else{
        delete errors.password
    }

    if(type === "signup"){
        if(!data.name.trim()){
            errors.name = 'Name is required'
        }else{
            delete errors.name
        }
        if(!data.confirmPassword){
            errors.confirmPassword = 'Password needs to be confirmed'
        }else if(data.password !== data.confirmPassword){
            errors.confirmPassword = "Your password doesn't match"
        }else{
            delete errors.confirmPassword
        }
    
        if(data.isAccepted){
            delete errors.isAccepted
        }else{
            errors.isAccepted = 'You should accept our regulations'
        }

    }
    return errors
}