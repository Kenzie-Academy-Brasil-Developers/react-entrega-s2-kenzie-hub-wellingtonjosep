import './styles.css'

import Button from '../Button'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function FormRegister () {

    const history = useHistory()

    const schema = yup.object().shape({
        name: yup
        .string()
        .required('Nome obrigatorio')
        .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,'este campo não aceita o uso de numeros'),
        email: yup
        .string()
        .required('Email obrigatorio')
        .email('email invalido'),
        password: yup
        .string()
        .required('Senha obrigatoria')
        .min(6, 'sua senha tem que ter no minimo 6 caracteres'),
        ConfPassword: yup
        .string()
        .required('Confirmar a senha é obrigatorio')
        .oneOf([yup.ref('password')],'seus campos de senha estão diferentes')
    })
    
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    function onSubmit (data) {
        data.bio = 'Não requerido no Figma'
        data.contact = 'Não requerido no Figma'
        axios.post('https://kenziehub.herokuapp.com/users', data)
        .then((response) => {
            console.log(response)
            toast.success('Conta criada com sucesso!')
            history.push('/register')
        })
        .catch((err) => {
            if (err.message === 'Request failed with status code 401') {
                toast.error('Email já existe')
            } else {
                toast.error('Ops! Algo deu errado')
            }
        })

    }
    
    return (
        <form className='form-register' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='sub-title-register'>Crie sua conta</h2>
            <p className='info-register'>Rapido e grátis, vamos nessa</p>

            <label className='label-register'>Nome</label>
            <input {...register('name')} className='input-register' type="text" placeholder='Digite aqui seu nome'/>
            {errors.name && <p className='error'>{errors.name.message}</p>}

            <label className='label-register'>Email</label>
            <input {...register('email')} className='input-register' type="text" placeholder='Digite aqui seu email'/>
            {errors.email && <p className='error'>{errors.email.message}</p>}

            <label className='label-register'>Senha</label>
            <input {...register('password')} className='input-register' type="password" placeholder='Digite aqui sua senha'/>
            {errors.password && <p className='error'>{errors.password.message}</p>}

            <label className='label-register'>Confirmar Senha</label>
            <input {...register('ConfPassword')} className='input-register' type="password" placeholder='Digite aqui sua senha'/>
            {errors.ConfPassword && <p className='error'>{errors.ConfPassword.message}</p>}

            <label className='label-register'>Selecionar módulo</label>
            <select {...register('course_module')} className='input-register select-register'>
                <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro Módulo</option>
                <option value='Segundo módulo (Frontend Avançado)'>Segundo Módulo</option>
                <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro Módulo</option>
                <option value='Quarto módulo (Backend Avançado)'>Quarto Módulo</option>
            </select>
            {errors.course_module && <p className='error'>{errors.course_module.message}</p>}
            
            <Button type={'submit'} className='button-register'>Cadastrar</Button>
        </form>
    )
}

export default FormRegister