import React from 'react';
import './PriceCard.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

function PriceCard(props) {
    const { id, title, payment, features } = props;
    return (
        <div className='card'>
            <div className='title'>
                <h3>{title}</h3>
            </div>
            <h2>${payment} month</h2>
            <div className='features'>
                {features.map((cur, i) => {
                    return (
                        <div className='feature-box'>
                            {cur.isCheck ? (
                                <AiOutlineCheckCircle />
                            ) : (
                                <TiDeleteOutline />
                            )}
                            <span>{cur.get}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PriceCard;
