import React from 'react'
import styled from 'styled-components'

import { GoSearch } from 'react-icons/go'

const InputContainer = styled.label`
    background-color: var(--color-bg);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1rem;
    
    @media(min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...'
})`
    margin-left: 5px;
    border: none;
    outline: none;
    background-color: var(--color-bg);
    color: var(--color-text);
    `;


export const Search = ({search, setSearch}) => {


    return (
        <InputContainer>
            <GoSearch/>
            <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
        </InputContainer>
    )

}