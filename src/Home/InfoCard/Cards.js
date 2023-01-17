import React from 'react';
import One from './One';


const Cards = () => {


    const cardData = [
        {
            id: 1,
            name: 'Basic',
            Description: 'A no-frills plan to meet most landlords requirements',
            price: '12/mo',
            belongings: '$10,000',
            electonics: '$1000',
            liabality: '$100000'
        },
        {
            id: 2,
            name: 'Essential',
            Description: 'Our top-seller for the average renter',
            price: '18/mo',
            belongings: '$20,000',
            electonics: '$1000',
            liabality: '$200000'
        },
        {
            id: 3,
            name: 'Premium',
            Description: 'The perfect plan for those with a few extra belongings',
            price: '33/mo',
            belongings: '$40,000',
            electonics: '$3000',
            liabality: '$300000'
        }
    ]


    return (
        <div className=' justify-content-center mt-5'>
            <h3 className='fw-bold'>Pick a base plan:</h3>
            <div className='d-lg-flex justify-content-evenly mt-5'>
                {
                    cardData.map(priceCard => <One key={priceCard.id} priceCard={priceCard}></One>)
                }
            </div>

        </div>
    );
};

export default Cards;