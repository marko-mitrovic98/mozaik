import React from 'react';
import { Link } from 'react-router-dom';

export const ProductsCard = ({ title, description, category }) => {
    const cardClass = `card-${category}`;

    return (
        <>
            <div className="col-3">
                <div className={cardClass}>
                    <img src={`/assets/section_${category}.jpg`} alt={category} />
                    <h1>{title}</h1>
                    <span>{description}</span>
                    <Link to={`/${category}`} className="button-57">
                        <span>Vidi</span>
                        <span>Vise</span>
                    </Link>
                </div>
            </div>
        </>
    );
};
