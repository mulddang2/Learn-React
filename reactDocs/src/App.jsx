/* eslint-disable react/prop-types */

import { getImageUrl } from './passing-props/util';
import './App.css'

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={200}
        object={{
          name: 'coffee',
          imageId: '4LSgDpX',
        }}
      />
    </Card>
  );
}

function Avatar({ object, size }) {
  return (
    <img
      src={getImageUrl(object)}
      className='avatar'
      alt='object.name'
      style={
        {
          width: size,
          height: 'auto',
        }
      }

    />
  );
}

function Card({ children }) {
  return <div className='card'>{children}</div>;
}
