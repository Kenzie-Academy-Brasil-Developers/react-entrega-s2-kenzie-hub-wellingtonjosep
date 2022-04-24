import './styles.css'

import Button from '../../Button'

function Item ({technology}) {
    console.log(technology)
    return (
        <Button className="item">
            <h3 className='title-item'>{technology.title}</h3>
            <p className='description-item'>{technology.status}</p>
        </Button>
    )
}

export default Item