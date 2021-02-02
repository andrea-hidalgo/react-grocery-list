import React, { useState, useEffect } from 'react';
import GroceryData from '../../models/GroceryData';
import Groceries from './Groceries';

export default function App(props) {
	const [listItem, updateItem] = useState({
		item: '',
		brand: '',
		units: '',
		quantity: 0,
		isPurchased: false
	});

	const [groceryList, setList] = useState([
		{
			item: 'Apples',
			brand: 'Luckys',
			units: '1lb',
			quantity: 2,
			isPurchased: false
		},
		{
			item: 'Rice',
			brand: 'Royal',
			units: '1lb',
			quantity: 1,
			isPurchased: false
		},
		{
			item: 'Dark Chocolate',
			brand: "Tony's",
			units: '1',
			quantity: 3,
			isPurchased: false
		}
	]);

	const handleChange = event => {
		updateItem({
			...listItem,
			...{
				[event.target.id]: event.target.value
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		setList([...groceryList, listItem]);
		console.log(listItem);
		console.log(groceryList);
		updateItem({
			item: '',
			brand: '',
			units: '',
			quantity: 0,
			isPurchased: false
		});
	};

	return (
		<div>
			<h1>We Need Groceries!</h1>
			<Groceries grocery={groceryList} />
			<br />
			<h2>Add an item to your list</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="item">
					Name
					<input
						id="item"
						type="text"
						value={listItem.item}
						onChange={handleChange}
					></input>
				</label>
				<br />
				<label htmlFor="brand">
					Brand
					<input
						id="brand"
						type="text"
						value={listItem.brand}
						onChange={handleChange}
					></input>
				</label>
				<br />
				<label htmlFor="units">
					Units
					<input
						id="units"
						type="text"
						value={listItem.units}
						onChange={handleChange}
					></input>
				</label>
				<br />
				<label htmlFor="quantity">
					Quantity
					<input
						id="quantity"
						type="text"
						value={listItem.quantity}
						onChange={handleChange}
					></input>
				</label>
				<br />
				<input type="submit" value="Add Item"></input>
			</form>
		</div>
	);
}
