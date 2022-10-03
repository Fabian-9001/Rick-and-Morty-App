import React from 'react'

const FilterList = ({ suggestedlist, setSearchInput }) => {

    const handleClick = id => setSearchInput(id)

    return (
        <ul className='list__locations' >

            {
                suggestedlist?.map(location => (
                    <li className='list__location' onClick={() => handleClick(location.id)} key={location.id}>{`- ${location.name}`}</li>
                ))
            }

        </ul>
    )
}

export default FilterList