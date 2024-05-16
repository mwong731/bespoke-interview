import React, { useState } from "react";
import {FormContainer, Input, FormRow, Label, Select, Button, SearchForm, SearchButton, SearchInput, IconButton, Activity, ActivityRow, ButtonOutline, Error, Loading} from "../styles/member.styled"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MemberForm = ({member}) => {
  const navigate = useNavigate()

  const [name, setName] = useState(member ? member.name : '')
  const [age, setAge] = useState(member ? member.age : '')
  const [rating, setRating] = useState(member? member.rating: 1)
  const [activityName, setActivityName] = useState('')
  const [activities, setActivities] = useState(member? member.activities: [])
  const [loading, setLoading] = useState(false)

  const [nameError, setNameError] = useState()

  const handleNameChange = (name) =>{
    setNameError(null)
    setName(name)
  }

  const handleDeleteActivity = (index) =>{
    setActivities([...activities].filter((item, i) => i !== index))
  }

  const addActivity = (e) =>{
    e.preventDefault()
    if(activityName === '') return
    setActivities([...activities, activityName])
    setActivityName('')
  }

  const handleSubmit = async () =>{
    //check if name is not empty
    if(name === '' || !name){
        setNameError('Name is required.')
        return
    }
    setLoading(true)

    let data = {
            id: member?.id ? member.id : null,
            name,
            rating,
            age,
            activities
    }

    if(member?.id){
        try {
            const res = await axios.patch(`http://localhost:4444/members/${member.id}`, {body:data});
            navigate('/')
          } catch(err)  {
            console.log('ERROR', err);
          }
    }else{
        try {
            const res = await axios.post(`http://localhost:4444/members/`, {body:data});
            navigate('/')
          } catch(err)  {
            console.log('ERROR', err);
          }
    }

        
    setLoading(false)
  }


  return(
   <FormContainer>
        <FormRow>
            <Label>Name*: </Label> 
            <Input
            name = "Name"
            onChange = {(e)=>handleNameChange(e.target.value)}
            value = {name}
            />
        </FormRow>
        {nameError ? <Error>{nameError}</Error> : ''}
        <FormRow>
            <Label>Age: </Label> 
            <Input
            name = "Age"
            type = "number"
            min = {0}
            onChange = {(e)=>setAge(e.target.value)}
            value = {age}
            />
        </FormRow>
        <FormRow>
            <Label>Rating: </Label> 
            <Select>
            <select onChange={(e)=>setRating(e.target.value)} value={rating}>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
            </select>
            </Select>
        </FormRow>
        <FormRow>
            <Label>Activities:</Label>
            <div>
                <ActivityRow>
                    {activities.map((activity, i)=>(
                        <Activity key={i}>
                            {activity}
                            <IconButton onClick={()=>handleDeleteActivity(i)}><i className="fa-solid fa-xmark"></i></IconButton>
                        </Activity>
                    ))}
                </ActivityRow>
                <SearchForm onSubmit={addActivity}>
                    <SearchInput
                    type="text"
                    name="Activity Name"
                    value={activityName}
                    onChange={(e)=>setActivityName(e.target.value)}
                    placeholder="Add an Activity"
                    />
                    <SearchButton type="submit" aria-label="Search">
                        <i className="fa-solid fa-plus"></i> 
                    </SearchButton>
                </SearchForm>
            </div>
            
        </FormRow>

        <Button onClick={handleSubmit}>Submit</Button>
        <Link to="/"><ButtonOutline> Cancel </ButtonOutline></Link>
        
        {loading ? <Loading><i className="fa-solid fa-circle-notch fa-spin"></i></Loading>: ''}
   </FormContainer>
  )
};

export default MemberForm;