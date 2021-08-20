import React from 'react';
import Product from './product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					placeholder="search"
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/KPT/KPT-Launch-banners_3000x1200_1._CB644629465_.jpg"
					alt="image"
				/>
			</div>
			<div className="home__row">
				<Product
					id="499291002"
					imgUrl="https://m.media-amazon.com/images/I/41ozwujDVTS._AC_SY200_.jpg"
					info="Victus by HP Ryzen 5 5600H 16.1-inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB RTX 3050 Graphics/Flicker Free Display/Windows 10/MS Office/Mica Silver/2.48 Kg), 16-e0076AX "
					cost="73,990.00"
					rating={4}
				/>
				<Product
					id="499291001"
					imgUrl="https://m.media-amazon.com/images/I/61E7rI4lJuL._SX522_.jpg"
					info="(Renewed) Sony WH-1000XM3 Wireless Industry Leading Noise Cancellation Headphones with Touch Sensor (Black) "
					cost="14,500.00"
					rating={5}
				/>
			</div>
			<div className="home__row">
				<Product
					imgUrl="https://images-eu.ssl-images-amazon.com/images/I/41e1JcORdNS._AC_SX184_.jpg"
					id="499291003"
					info="OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage) "
					cost="24,999.00 "
					rating={4}
				/>
				<Product
					imgUrl="https://images-na.ssl-images-amazon.com/images/G/31/img21/CEPC/Electronics/Revamp/SBC/xcm_banners_04_sbc_v1_564x564_in-en._CB657839313_.jpg"
					info="Sony Digital Vlog Camera ZV-1 Only (Compact, Video Eye AF, Flip Screen, in-Built Microphone, 4K Vlogging Camera and Content Creation) – Black "
					cost="59,989.00"
					id="499291004"
					rating={4}
				/>
				<Product
					imgUrl="https://images-eu.ssl-images-amazon.com/images/I/51cutuzjHLL._AC_UL450_SR450,320_.jpg"
					info="LUCHILA Ultrasonic Pest Repellent Machine to Repel Lizard, Rats, Cockroach, Mosquito, Home Pest & Rodent Repelling Aid for Reject Ants Spider Insect Pest Control Pest Repelling "
					cost="389.00 "
					id="499291005"
					rating={3}
				/>
			</div>
			<div className="home__row">
				<Product
					imgUrl="https://m.media-amazon.com/images/I/61bXjE5ESwS._AC_UY218_.jpg"
					info="AmazonBasics 108cm (43 inch) 4K Ultra HD Smart LED Fire TV AB43U20PS (Black) "
					cost="22,999.00 "
					id="499291006"
					rating={3}
				/>
			</div>
		</div>
	);
}

export default Home;
