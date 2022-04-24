import './styles.css'

import Button from '../../Button'

function Item () {
    return (
        <Button className="item">
            <h3 className='title-item'>React JS</h3>
            <p className='description-item'>Intermediário</p>
        </Button>
    )
}

export default Item