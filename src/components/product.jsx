import React from 'react';

export default function Product({ id, info, cost, imgUrl, rating }) {
	return (
		<div className="product">
			<div className="product__info">
				<p
					style={{
						lineHeight: '1.5rem'
					}}
				>
					{info}
				</p>
				<p className="product__price">
					<small>$</small>
					<strong>{cost}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill(0)
						.map((_, index) => {
							return <p>🌟</p>;
						})}
				</div>
			</div>
			<img src={imgUrl} alt="lap" />
			<button className="gld-btn">Add to Basket</button>
		</div>
	);
}
