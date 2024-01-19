import './App.css'
import { people } from './rendering-lists/data';
import { getImageUrl } from './rendering-lists/util';

export default function List() {
  const listItem = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} className='list_img' alt={person.name} />
      <p>
        <b>{person.name}:</b> {person.profession} known for{' '}
        {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <section>
      <h1>Scientists</h1>
      <ul className='people'>
        {listItem}
      </ul>
    </section>
  );
}
