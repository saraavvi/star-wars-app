import React from 'react'
import SearchForm from './SearchForm'

export default function Header() {
    return (
        <div className="d-flex border">
            <div>
                <h1>Star Wars Characters</h1>
            </div>
            <div className="ml-auto">
                <SearchForm />
            </div>
            
        </div>
    )
}
