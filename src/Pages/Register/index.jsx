import './styles.css'

import FormRegister from '../../components/FormRegister'
import Button from '../../components/Button'
import {Link} from 'react-router-dom'

function Register () {
    return (
        <>
            <header className='header-register'>
                <h1 className='title-register'>Kenzie Hub</h1>
                <Link to='/'>
                    <Button className='back'>Voltar</Button>
                </Link>
            </header>

            <main>
                <FormRegister/>
            </main>
        </>
    )
}

export default Register