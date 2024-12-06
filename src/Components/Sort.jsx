import React from 'react';

export const Sort = ({ searchQuery, onSearchChange, sortOption, onSortChange }) => {
    return (
        <>
            <div className="row row-sort">
                <div className="searchBar">
                    <input type="text" placeholder="Pretrazi proizvode..." value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} />
                </div>
                <div className="sort">
                    <label>Sortiraj po:</label>
                    <select name="sort" id="sort" value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
                        <option value="default">default</option>
                        <option value="price-asc">ceni rastuce</option>
                        <option value="price-desc">ceni opadajuce</option>
                        <option value="title">naslovu</option>
                    </select>
                </div>
            </div>
        </>
    );
};
