import './styles.css'

import Button from '../Button'

function FormRegister () {
    return (
        <form className='form-register'>
            <h2 className='sub-title-register'>Crie sua conta</h2>
            <p className='info-register'>Rapido e grátis, vamos nessa</p>
            <label className='label-register'>Nome</label>
            <input className='input-register' type="text" placeholder='Digite aqui seu nome'/>

            <label className='label-register'>Email</label>
            <input className='input-register' type="text" placeholder='Digite aqui seu email'/>

            <label className='label-register'>Senha</label>
            <input className='input-register' type="password" placeholder='Digite aqui sua senha'/>

            <label className='label-register'>Confirmar Senha</label>
            <input className='input-register' type="password" placeholder='Digite aqui sua senha'/>

            <label className='label-register'>Selecionar módulo</label>
            <select className='input-register select-register'>
                <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro Módulo</option>
                <option value='Segundo módulo (Frontend Avançado)'>Segundo Módulo</option>
                <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro Módulo</option>
                <option value='Quarto módulo (Backend Avançado)'>Quarto Módulo</option>
            </select>

            <Button className='button-register'>Cadastrar</Button>
        </form>
    )
}

export default FormRegister