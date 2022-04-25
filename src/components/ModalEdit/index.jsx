import './styles.css'

import Button from '../Button'

import { useForm } from 'react-hook-form';
import * as yup from "yup";
import axios from 'axios';
import { toast } from 'react-toastify';

function ModalEdit ({setEdit, token, infoClick}) {
    const {register, handleSubmit} = useForm({})

    function onSubmit (data) {

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

                <Button type='submit' className='button-edit-modal'>Salvar alterações</Button>
                <Button className='button-delete'>Excluir</Button>
            </form>
        </section>
    </div>
    )
}

export default ModalEdit