import React from 'react';
import { Link } from 'react-router-dom';

export const ProductsCard = ({title,description,category}) => {
    const cardClass = `card-${category}`;

    return (
        <>
            <div className="col-4">
                <div className={cardClass}>
                    <h1>{title}</h1>
                    <span>{description}</span>
                    <Link to={`/${category}`} className="btn">
                        Vidi vise
                    </Link>
                </div>
            </div>
        </>
    );
};
