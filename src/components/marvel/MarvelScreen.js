import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>marvel screen</h1>  
            <hr/>
            <hr />
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
