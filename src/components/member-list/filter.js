import React, { useState, useEffect, useRef } from "react";
import {Button, FilterContainer, Dropdown, DropdownTitle} from "../styles/member.styled"

const Filter = ({activities, result, setMembers}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ratingFilter, setRatingFilter] = useState([1,2,3,4,5])
  const [activitiesFilter, setActivitiesFilter] = useState([...activities])

  const ref = useRef(null);

  const handleClick = (filter, val) =>{
    if(filter === 'rating'){
      let newRatingFilter = 
        ratingFilter.indexOf(val) > -1 ? //check if rating exists in chosen options
        [...ratingFilter].filter((el)=>el !== val) : //if yes, remove option
        [...ratingFilter, val] //else, add option
      setRatingFilter(newRatingFilter)
      //filter out members that have ratings outside of chosen options
      setMembers( [...result].filter((member)=> newRatingFilter.indexOf(member.rating) > -1))
    }else{
      let newActivityFilter = 
        activitiesFilter.indexOf(val) > -1 ? 
        [...activitiesFilter].filter((el)=>el !== val) : 
        [...activitiesFilter, val]
      setActivitiesFilter(newActivityFilter)
      //filter out members that have activities outside of chosen options
      setMembers( [...result].filter((member)=> newActivityFilter.some(act=> member.activities.includes(act))))
    }
  }

  //Close dropdown if click outside
  const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
      }
  };

  useEffect(() => {
    //Detect clicks outside dropdown
      document.addEventListener('click', handleClickOutside, true);
      return () => {
          document.removeEventListener('click', handleClickOutside, true);
      };
  }, []);

  useEffect(() => {
    setActivitiesFilter([...activities])
}, [activities]);

  return(
    <FilterContainer >
      <Button onClick={()=>setIsOpen(!isOpen)} >
          <i className="fa-solid fa-filter"></i> Filters
      </Button>
      <Dropdown $isOpen={isOpen} ref={ref}>
        <DropdownTitle>Rating</DropdownTitle>
        {[1,2,3,4,5].map((option,i)=>(
          <span key={`rating${i}`} >
              <input type="checkbox" checked={ratingFilter.indexOf(option) > -1} onChange={()=>handleClick('rating', option)} />&nbsp;
              {option}
            </span>
        ))}
        <DropdownTitle>Activities</DropdownTitle>
        {activities.map((option,i)=>(
          <span key={`rating${i}`}>
              <input type="checkbox" checked={activitiesFilter.indexOf(option) > -1} onChange={()=>handleClick('activities', option)}/>&nbsp;
              {option}
            </span>
        ))}
          
     
      </Dropdown>
    </FilterContainer>
  )
};

export default Filter;