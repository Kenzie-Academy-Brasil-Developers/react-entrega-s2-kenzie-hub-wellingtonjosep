import './styles.css'

import Button from '../../components/Button'
import List from '../../components/List'
import Modal from '../../components/ModalRegister'

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Homepage () {
    
    const token = localStorage.getItem('authorization')

    const userId = localStorage.getItem('enter')
    
    const history = useHistory()

    const [name, setName] = useState('')
    const [module, setModule] = useState('')
    const [list, setList] = useState('')

    if (!token) {
        history.push('/')
    }

    function exit () {
        localStorage.clear()
        history.push('/')
    }

    useEffect(() => {
        function getInfo () {
            axios.get(`https://kenziehub.herokuapp.com/users/${userId}`)
            .then((response) => {
                console.log(response.data)

                const first = response.data.name.split(' ')

                setName(first[0])
                setModule(response.data.course_module)
                setList(response.data.techs)
            })
        }
        getInfo()
    },[])
    
    return (
        <>
            <nav className='navigation'>
                <h1 className='title-home'>Kenzie Hub</h1>
                <Button onClick={() => exit()} className='button-exit'>Sair</Button>
            </nav>

            <header className='header-home'>
                <section className='info-home'>
                    <h1 className='name'>Olá, {name}</h1>
                    <p className='module' >{module}</p>
                </section>
            </header>

            <main className='main-home'>
                <List list={list}/>
                <Modal/>
            </main>
            
        </>
    )
}

export default Homepage