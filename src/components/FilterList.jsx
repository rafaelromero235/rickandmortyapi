import React from 'react'

const FilterList = ({suggestedList,setsearchInput}) => {
  
  
  const handleclick=(id)=>{
    setsearchInput(id);

  }
  
    return (
    <ul>
        {
            suggestedList?.map(location=>(
                <li onClick={ ()=>handleclick(location.id)} key={location.id}>
                    {location.name}
                </li>

            ))
        }
    </ul>
  )
}

export default FilterList