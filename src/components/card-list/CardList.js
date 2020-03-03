import React from 'react';
import Card from './Card';

const CardList = ({ monsters }) => (
	<ul className='flex-container'>
		{monsters.map((monster) => (
			<Card key={monster.id} monster={monster} />
		))}
	</ul>
);

export default CardList;
