import './styles.css'

import Button from '../../components/Button'
import List from '../../components/List'

function Homepage () {
    return (
        <>
            <nav className='navigation'>
                <h1 className='title-home'>Kenzie Hub</h1>
                <Button className='button-exit'>Sair</Button>
            </nav>

            <header className='header-home'>
                <h1 className='name'>Olá, Samuel Leão</h1>
                <p className='module' >Primeiro módulo (Introdução ao Frontend)</p>
            </header>

            <main className='main-home'>
                <List/>
            </main>
        </>
    )
}

export default Homepage