import './styles.css'
import FormLogin from '../../components/FormLogin'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Login () {
    const history = useHistory()
    return (
        <>
            <header>
                <h1 className='title'>Kenzie Hub</h1>
            </header>

            <main>
                <FormLogin/>
            </main>
        </>
    )
}

export default Login