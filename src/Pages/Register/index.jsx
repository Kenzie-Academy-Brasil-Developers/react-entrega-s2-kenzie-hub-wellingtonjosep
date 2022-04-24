import './styles.css'

import FormRegister from '../../components/FormRegister'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Register () {
    const history = useHistory()

    function back () {
        history.push('/register')
    }
    return (
        <>
            <header className='header-register'>
                <h1 className='title-register'>Kenzie Hub</h1>
                <Button onClick={() => back() } className='back'>Voltar</Button>
            </header>

            <main>
                <FormRegister/>
            </main>
        </>
    )
}

export default Register