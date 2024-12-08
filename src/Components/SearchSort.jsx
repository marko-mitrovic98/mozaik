import React from 'react';

export const SearchSort = ({ searchQuery, onSearchChange, sortOption, onSortChange }) => {
    return (
        <>
            <div className="search-sort">
                <input type="text" placeholder="Pretrazi proizvode" className="search" value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} />
                <label for="sort" className="sort">
                    Sortiraj po:
                    <select name="sort" id="sort" value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
                        <option value="default">default</option>
                        <option value="price-asc">ceni rastuce</option>
                        <option value="price-desc">ceni opadajuce</option>
                        <option value="title">naslovu</option>
                    </select>
                </label>
            </div>
        </>
    );
};
