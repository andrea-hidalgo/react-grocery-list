import React, { useState, useEffect } from 'react';
import GroceryData from '../../models/GroceryData';
import Groceries from './Groceries';

export default function App(props) {
	const [query, updateQuery] = useState({
		url: '../../models/Groceries.js',
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
			isPurchased: true
		}
	]);

	// useEffect(() => {
	// 	async () => {
	// 		try {
	// 			const response = await fetch('../../models/Groceries.js');
	// 			// const data = await response.json();
	// 			await setList(response);
	// 		} catch (error) {
	// 			console.log(error);
	// 		} finally {
	// 			updateQuery({
	// 				url: '../../models/Groceries.js',
	// 				item: '',
	// 				brand: '',
	// 				units: '',
	// 				quantity: 0,
	// 				isPurchased: false
	// 			});
	// 		}
	// 	};
	// }, [query]);

	return (
		<div>
			<h1>We Need Groceries!</h1>
			<Groceries grocery={groceryList} />
		</div>
	);
}
