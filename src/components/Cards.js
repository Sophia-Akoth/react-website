import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Cars!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pex1.jpeg'
              text='Pursuit of faster,better and louder'
              label='PORSHE'
              path='/services'
            />
            <CardItem
              src='images/pex2.jpeg'
              text='Travel through the Islands with this amazing machine'
              label='TOYOTA RANGE ROVER'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pex3.jpeg'
              text='Set Sail as you explore the nation'
              label=' BUGATTI VYRON'
              path='/services'
            />
            <CardItem
              src='images/pex4.jpeg'
              text='Blending power and performance with sporty appeal'
              label='BWM'
              path='/products'
            />
            <CardItem
              src='images/pex6.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='RAV-4'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
