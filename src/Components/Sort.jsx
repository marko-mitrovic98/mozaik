import React from 'react';

export const Sort = () => {
    return (
        <>
            <div className="row row-sort">
                <div className="sort">
                    <label for="sort">Sortiraj po:</label>
                    <select name="sort" id="sort">
                        <option value="default">Default</option>
                        <option value="ascending">Po ceni rastuce</option>
                        <option value="descending">Po ceni smanjujuce</option>
                        <option value="title">Po naslovu</option>
                        <option value="proizvodjacu">Po proizvodjacu</option>
                    </select>
                </div>
            </div>
        </>
    );
};
