import './styles.css'

import Button from '../Button'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function FormLogin () {

    const history = useHistory()

    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')

    function open () {

        const data = {
            email: email,
            password: password
        }

        axios.post('https://kenziehub.herokuapp.com/sessions', data)
        .then((response) => {
            console.log(response)
            localStorage.setItem('authorization', response.data.token)
            localStorage.setItem('enter', response.data.user.id)
            toast.success('Login autorizado', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history.push('/Home')
        })
        .catch((err) => {
            console.log(err)
            toast.error('Senha ou Email invalido', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }

// config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
// data:
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTA4MTg2NjEsImV4cCI6MTY1MTA3Nzg2MSwic3ViIjoiM2YwNGVkNTYtMGE5NC00YmU5LWJlODAtMGZjNjBkMTIzYTIxIn0.yqt48kVNN_WDc8AR74b3rHxlhCG4i4Pr9s1DMnth13g"
// user:
// avatar_url: null
// bio: "Não requerido no Figma"
// contact: "Não requerido no Figma"
// course_module: "Terceiro módulo (Introdução ao Backend)"
// created_at: "2022-04-24T15:46:19.395Z"
// email: "paivawellington23@gmail.com"
// id: "3f04ed56-0a94-4be9-be80-0fc60d123a21"
// name: "Wellington José"
// techs: []
// updated_at: "2022-04-24T15:46:19.395Z"
// works: []
// [[Prototype]]: Object
// [[Prototype]]: Object
// headers: {content-length: '566', content-type: 'application/json; charset=utf-8'}
// request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
// status: 200
// statusText: "OK"

    return (
        <form onSubmit={(evento) => evento.preventDefault()} className='form-login'>
            <h2 className='sub-title'>Login</h2>
            <label className='label-form-login'>Email</label>
            <input onChange={(event) => setEmail(event.target.value)} className='input-form-login input-text' type="text" />

            <label className='label-form-login'>Senha</label>
            <input onChange={(event) => setPassword(event.target.value)} className='input-form-login input-password' type="password" />

            <Button onClick={() => open()} className='button-login'>Entrar</Button>
            <p className='info-login'>Ainda não possui uma conta?</p>
            <Link to='/Register'>
                <Button className='register-login'>Cadastra-se</Button>
            </Link>
        </form>
    )
}

export default FormLogin