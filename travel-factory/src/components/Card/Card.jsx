import './Card.scss';

const Card = (props) => {
    return (
    <div className='card'>
        <div className='imagecap'>
            <img src={props.img} alt={props.name} />
            <p>{props.job}</p>
        </div>
        <div className='card-content'>
            <h4>{props.name}</h4>
            <p>{props.location}</p>
            <p>{props.company}</p>
            <p>{props.address1}</p>
            <p>{props.address2}</p>
            <p>P: {props.phone}</p>
        </div>
        <div className="crud">
            {props.edit}
            {props.trash}
        </div>
    </div>
)}

export default Card;