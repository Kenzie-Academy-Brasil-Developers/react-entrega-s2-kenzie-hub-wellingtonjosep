import './styles.css'

import Item from './Item'
import Button from '../Button'

function List ({list, setIsOpen, setEdit, setInfoClick}) {
    return (
        <section className="list" >
            <h2 className="title-list">Tecnologias</h2>
            <Button onClick={() => setIsOpen(true)} className="add-list">+</Button>
            <section className="showcase">
                {
                    list && list.map((technology, index) => {
                        return <Item setInfoClick={setInfoClick} setEdit={setEdit} technology={technology}/>
                    })
                }
            </section>
        </section>
    )
}

export default List