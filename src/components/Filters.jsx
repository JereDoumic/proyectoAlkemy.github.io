import { useState, useId, useContext } from 'react';
import '../styles/Filters.css'
import { FiltersContext } from '../context/filtersContext';

export function Filters() {

    const {filters, setFilters} = useContext(FiltersContext);
    
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) =>
    {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>
    {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="filters">
            <div>
                <label htmlFor="price">Price since: </label>
                <input type="range" name="" id={minPriceFilterId} min = "0" max = "100" 
                onChange={handleChangeMinPrice} value={filters.minPrice}/>
                <span>${filters.minPrice}</span>
            </div>
        
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="electronics">Electronico</option>
                    <option value="jewelery">Joyeria</option>
                    <option value="men's clothing">Ropa de hombre</option>
                    <option value="women's clothing">Ropa de mujer</option>
                </select>
            </div>
        </section>
    )
}

export default Filters;