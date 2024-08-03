import React, { useState } from 'react';
import FlatsList from '../FlatsList';
import Cart from '../Cart';
import NavBar from "../NavBar"
import Footer from "../Footer"

const initialProperties = [
  { id: 1, title: 'BHK and two BHK flats', description: 'Flats for rent in Bangalore with no brokerage, new fully furnished one BHK and two BHK flats rental listings call us at 9916127190 for the best deal.', price: 400000, image: 'https://i.pinimg.com/564x/39/67/42/3967425d374c7addac229844d00f2d25.jpg' },
  { id: 2, title: '2 BHK flat', description: 'If taking a flat for rent is on you mind, you must go for 2 BHK flat in East Ambattur located at the heart of the city.', price: 20000, image: 'https://i.pinimg.com/564x/13/df/82/13df82c8a851ec54d498e3e1c06d1240.jpg' },
  {id:3, title: '4BHK, 2000sqft 5th floor', description: '2000sqft 5th floor lift available prestige flat rent in nesapakkam vembuliamman koil street chennai, 4BHK, 5 years old.', price: 55000, image: 'https://i.pinimg.com/564x/8e/d9/53/8ed9537d6849d95a42bcf161ac3838a1.jpg'},
  {id:4, title: 'gated community flats', description: 'Searching for flat for rent in Chennai, Chennai without brokerage/No Brokerage. Check gated community flats for rent in Chennai Chennai with no brokerage.', price: 45000, image: 'https://i.pinimg.com/564x/ed/1e/68/ed1e684274bbad1cec8046c220f9aae5.jpg'},
  {id:5, title: '186 Fairview', description: '3 Bedroom Apartment For Rent Westgate Hills - 186 Fairview Dr Westgate Hills Montego Bay Jamaica', price: 40000, image: 'https://i.pinimg.com/564x/20/70/19/207019678e3998b0da03075863216ed7.jpg'},
  {id:6, title: '2 BHK Flat', description: '2 BHK Flat For Rent in Kharadi near zensar pune 2 bedroom 2 balcony 2 bathroom 660 sqft', price: 18000, image: 'https://i.pinimg.com/564x/e8/2e/b2/e82eb2e75e1554c7bb07c38d6be2fd2f.jpg'},
  {id:7, title: 'Luxury', description: 'Luxury 2 Bedrooms for rent', price: 30000, image: 'https://i.pinimg.com/564x/c8/01/1e/c8011eceaf3ee1dfe13d1253e4d99763.jpg'},
  {id:8, title: 'Lagos 400M 3 bedroom apartment', description: 'Lagos 400M 3 bedroom apartment with furnitures, fitted kitchen, inbuilt speakers, cctv and many more for sale.', price: 50000, image: 'https://i.pinimg.com/564x/21/f0/30/21f03035dc6e6061b4c34def65bef382.jpg'},
  {id:9, title: 'Gabala rent House', description: 'Offering a balcony and mountain views, the spacious apartment includes 2 bedrooms, a living room, flat-screen TV, an equipped kitchen, and 2 bathrooms with a shower.', price: 400000, image: 'https://i.pinimg.com/564x/e8/3f/35/e83f35afcb34aa1db5edbbd5243d2936.jpg'},
  {id:10, title: 'Modish 1 Bed (Brand New) Apartment for Rent', description: ' Ideal for young families or couples. Fantastic views of the community and Creek.', price: 60000, image: 'https://i.pinimg.com/564x/36/aa/74/36aa74d03caf22659894e9b78136cc12.jpg'}
];

const Flats = () => {
  const [properties] = useState(initialProperties);
  const [cart, setCart] = useState([]);

  const handleBook = (property) => {
    setCart((prevCart) => {
      const exists = prevCart.find(item => item.id === property.id);
      if (exists) {
        return prevCart.map(item =>
          item.id === property.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...property, quantity: 1 }];
    });
  };

  const handleRemove = (property) => {
    setCart(prevCart => prevCart.filter(item => item.id !== property.id));
  };

  const handleIncrease = (property) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === property.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (property) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === property.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className='main-home-container'>
      <NavBar />
      <div className="home">
        <FlatsList properties={properties} onBook={handleBook} />
        <Cart
          cartItems={cart}
          onRemove={handleRemove}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Flats;
