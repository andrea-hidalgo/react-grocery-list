import React from 'react';

export default function Groceries(props) {
	return (
		<>
			{props.grocery.map((product, index) => {
				return props.grocery[index].isPurchased === false ? (
					<div key={props.grocery[index].item}>
						<h1>{props.grocery[index].item}</h1>
						<h3>brand: {props.grocery[index].brand}</h3>
						<h3>quantity: {props.grocery[index].quantity}</h3>
						<h3>units: {props.grocery[index].units}</h3>
					</div>
				) : (
					''
				);
			})}
		</>
	);
}
