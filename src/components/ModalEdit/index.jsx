import './styles.css'

import Button from '../Button'

import { useForm } from 'react-hook-form';
import * as yup from "yup";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

function ModalEdit ({setEdit, token, infoClick}) {

    const [verify, setVerify] = useState('')

    const {register, handleSubmit} = useForm({})

    function onSubmit (data) {
        console.log(data)
        axios.put(`https://kenziehub.herokuapp.com/users/techs/${infoClick.id}`,{status: data.status},{
            headers: {Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            console.log(response)
            if (verify === 'edit') {
                toast.success('Editado com Sucesso')
            }
        })
        .catch((err) => {
            console.log(`ocorreu um erro ${err}`)
            if (verify === 'edit') {
            toast.error('Erro na edição')
            }
        })
    }

    function dell () {

        axios.delete(`https://kenziehub.herokuapp.com/users/techs/${infoClick.id}`,{
            headers: {Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            console.log(response)
            toast.success('Deletado com sucesso')
        })
        .catch((err) => {
            console.log(`ocorreu um erro ${err.message}`)
            toast.error('Erro ao deletar')
        })
    }

    return (
        <div className="container-modal">
        <section className="modal">

            <section className='header-modal'>
                <h4 className='title-modal'>Tecnologia Detalhes</h4>
                <Button onClick={() => setEdit(false)} className='close-modal'>X</Button>
            </section>

            <form className='form-modal' onSubmit={handleSubmit(onSubmit)}>
                
                <label className='label-modal'>Nome do projeto</label>
                <input {...register('title')} className='input-modal-edit input-modal-text-edit' type="text"  placeholder={infoClick.title}/>

                <label className='label-modal'>Status</label>
                <select {...register('status')} className='input-modal-edit select-modal-edit'>
                    <option>Iniciante</option>
                    <option>Intermediário</option>
                    <option>Avançado</option>
                </select>

                <Button onClick={() => setVerify('edit')} type='submit' className='button-edit-modal'>Salvar alterações</Button>
                <Button onClick={() => {dell(); setVerify('dell')}} className='button-delete'>Excluir</Button>
            </form>
        </section>
    </div>
    )
}

export default ModalEdit