import './styles.css'

import Button from '../Button'

import { useForm } from 'react-hook-form';
import * as yup from "yup";
import axios from 'axios';
import { toast } from 'react-toastify';

function Modal ({setIsOpen, token}) {
    const {register, handleSubmit} = useForm({})

    function onSubmit (data) {
        axios.post('https://kenziehub.herokuapp.com/users/techs', data, {
            headers: {Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            console.log(response)
            toast.success('Adicionado')
        })
        .catch((err) => {
            console.log(err)
            toast.error('Ops! algo deu errado')
        })
    }

    return (
        <div className="container-modal">
            <section className="modal">
                <section className='header-modal'>
                    <h4 className='title-modal'>Cadastrar Tecnologia</h4>
                    <Button onClick={() => setIsOpen(false)} className='close-modal'>X</Button>
                </section>
                <form className='form-modal' onSubmit={handleSubmit(onSubmit)}>
                    <label className='label-modal'>Nome</label>
                    <input {...register('title')} className='input-modal input-modal-text' type="text" />
                    <label className='label-modal'>Selecionar status</label>
                    <select {...register('status')} className='input-modal select-modal'>
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </select>
                    <Button type='submit' className='button-register-modal'>Cadastrar Tecnologia</Button>
                </form>
            </section>
        </div>
    )
}

export default Modal