import './styles.css'

function Modal () {
    return (
        <div className="container-modal">
            <section className="modal">
                <section className='header-modal'>
                    <h4 className='title-modal'>Cadastrar Tecnologia</h4>
                    <button className='close-modal'>X</button>
                </section>
                <form>
                    <label>Nome</label>
                </form>
            </section>
        </div>
    )
}

export default Modal