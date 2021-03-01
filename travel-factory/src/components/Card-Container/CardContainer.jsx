import {useState} from 'react';
import { useForm } from 'react-hook-form';

import './CardContainer.scss';
import {FaEdit, FaTrash} from 'react-icons/fa';
import Popup from 'reactjs-popup';

import Card from '../Card/Card';
import pros from '../../people.json';

const CardContainer = () => {

    const [people, setPeople] = useState(pros)

    const {register, handleSubmit} = useForm();

    const remove = (index) => {
        setPeople(people.filter((person) => person.id !== index))
    }

    const onSubmit = (data) => {
        setPeople(people.forEach((person) => {
            if (person.id === data.id) {
                person={
                    "name": data.name,
                    "job": data.job,
                    "location": data.location,
                    "company": data.company,
                    "address1": data.address1,
                    "address2": data.address2,
                    "phone": data.phone
                }
            }
        }))
    }

    const editedit = (person) => (
        <Popup trigger={<FaEdit />} position="top left">
          {close => (
            <div>
              <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="name" name="name" ref={register} />
                <input type="text" placeholder="job" name="job" ref={register} />
                <input type="text" placeholder="location" name="location" ref={register} />
                <input type="text" placeholder="company" name="company" ref={register} />
                <input type="text" placeholder="address1" name="address1" ref={register} />
                <input type="text" placeholder="address2" name="address2" ref={register} />
                <input type="text" placeholder="phone" name="phone" ref={register} />
                <input name="id" ref={register} type="hidden" />
                <input type="submit" />
              </form>
            </div>
          )}
        </Popup>
      );

    return(
        <div className="card-container">
            {people.map( person => <Card
                    key={person.id}
                    name={person.name}
                    job={person.job}
                    location={person.location}
                    company={person.company}
                    address1={person.address1}
                    address2={person.address2}
                    phone={person.phone}
                    img={person.img}
                    trash={<FaTrash onClick={() => remove(person.id)} />}
                    edit={editedit(person.id)}
                />
            )}
        </div>
    )
}

export default CardContainer;
