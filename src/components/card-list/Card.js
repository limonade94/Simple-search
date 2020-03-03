import React from 'react';

// const randomId = Math.floor(Math.random() * 10) + 1;

const Card = ({ monster }) => {
	return (
		<li>
			<h2>{monster.name}</h2>
			<img
				alt='monster'
				src={`https://picsum.photos/id/${Math.floor(Math.random() * 50) +
					1}/200/200`}
			/>
			<p>{monster.email}</p>
		</li>
	);
};

export default Card;
