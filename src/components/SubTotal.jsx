import CurrencyFormat from 'react-currency-format';
import React from 'react';

const SubTotal = () => {
	return (
		<div className="subTotal">
			<CurrencyFormat
				renderText={v => {
					<>
						<p>
							SubTotal(0 items): <strong>0</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>;
				}}
				decimalScale={2}
				value={0}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
		</div>
	);
};

export default SubTotal;

//1:55:39
//subTotal does not showing
