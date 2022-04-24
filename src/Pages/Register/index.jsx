import './styles.css'

import FormRegister from '../../components/FormRegister'
import Button from '../../components/Button'

function Register () {
    return (
        <>
            <header className='header-register'>
                <h1 className='title-register'>Kenzie Hub</h1>
                <Button className='back'>Voltar</Button>
            </header>

            <main>
                <FormRegister/>
            </main>
        </>
    )
}

export default Register