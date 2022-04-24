import './styles.css'

import Item from './Item'
import Button from '../Button'

function List () {
    return (
        <section className="list" >
            <h2 className="title-list">Tecnologias</h2>
            <Button className="add-list">+</Button>
            <section className="showcase">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </section>
        </section>
    )
}

export default List