import './styles.css'

import Item from './Item'
import Button from '../Button'

function List ({list}) {
    return (
        <section className="list" >
            <h2 className="title-list">Tecnologias</h2>
            <Button className="add-list">+</Button>
            <section className="showcase">
                {
                    list && list.map((technology, index) => {
                        return <Item key={index} technology={technology}/>
                    })
                }
            </section>
        </section>
    )
}

export default List