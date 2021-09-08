import React, {useMemo} from 'react'
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useForm' 
import { useLocation } from 'react-router'
import {getHeroesByName} from '../../selectors/getHeroesByName'

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ""} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

     const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
     }


    return (
        <div>
            <h1>search screen</h1>
            <hr/>
            <div className="row">
                <div className="col-md-5">
                    <h4>search form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-success"    
                        >
                            search
                        </button>
                    </form>
                </div>
                <div className="col-md-7">
                    <h4>results</h4>
                    <hr/>
                    
                    {
                        (q === "") && 
                        <div className="alert alert-info">
                            search a hero
                        </div>
                    }

                    {
                        (q !== "" && heroesFiltered.length === 0) && 
                        <div className="alert alert-warning">
                            not hero found with {q}
                        </div>
                    } 

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
