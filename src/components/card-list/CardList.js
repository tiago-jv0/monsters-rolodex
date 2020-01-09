import React from 'react';
import Card from '../card/Card';
import './CardList.css';

const CardList = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map((card) => {
                return (
                    <Card
                        key={card.id}
                        name={card.name}
                        email={card.email}
                        avatar={`https://robohash.org/${card.id}?set=set2&size=180x180`}
                    ></Card>
                );
            })}
        </div>
    );
};

export default CardList;
