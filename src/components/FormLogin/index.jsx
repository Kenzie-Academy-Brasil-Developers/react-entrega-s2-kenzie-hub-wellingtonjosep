import './styles.css'

import Button from '../Button'

function FormLogin () {
    return (
        <form className='form-login'>
            <h2 className='sub-title'>Login</h2>
            <label className='label-form-login'>Email</label>
            <input className='input-form-login input-text' type="text" />
            <label className='label-form-login'>Senha</label>
            <input className='input-form-login input-password' type="password" />
            <Button className='button-login'>Entrar</Button>
            <p className='info-login'>Ainda não possui uma conta?</p>
            <Button className='register-login'>Cadastra-se</Button>
        </form>
    )
}

export default FormLogin