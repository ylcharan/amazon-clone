import React from 'react';
import SubTotal from './SubTotal';

const CheckOut = () => {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<div className="checkout__title">Your shopping basket</div>
			</div>
			<div className="checkout__right">
				<SubTotal />
			</div>
		</div>
	);
};

export default CheckOut;
