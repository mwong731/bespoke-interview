import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Block, Button, Filters, Title } from "../styles/member.styled";
import SearchBar from "./searchBar";
import List from './list';
import Filter from './filter'

const MemberList = () => {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState([])
  const [members, setMembers] = useState([])
  const [activities, setActivities] = useState([])
  

  const getData = async (params) => {
    setLoading(true)
    let url = 'http://localhost:4444/members';
    if(params){
      url += '?';
      for (const key in params){
        url += `${key}=${params[key]}`
      }
    }
    try {
      const res = await axios.get(url);
      setMembers(res.data);
      setResult(res.data);

      // set activity list
      let activityMap = {}
      res.data.forEach((member) => {
        member.activities.forEach((activity)=>{
          if(!(activity in activityMap)){
            activityMap[activity] = true
          }
        })
      })

      setActivities(Object.keys(activityMap))

      setLoading(false)
    } catch(err)  {
      console.log('ERROR', err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleNewSearch = (params) => {
    getData(params);
  }

  const handleDelete = async (id) =>{
    try {
      const res = await axios.delete(`http://localhost:4444/members/${id}`);
      getData()
    } catch(err)  {
      console.log('ERROR', err);
    }
  }

  return (
    <Block>
      <Title>
        <h1>My Club's Members</h1>
        <Link to={'/edit'}><Button><i className="fa-solid fa-plus"></i> Add Member</Button></Link>
      </Title>
      
      <Filters>
        <SearchBar handleNewSearch={handleNewSearch}/>
        <Filter activities={activities} result={result} setMembers={setMembers}/>
      </Filters>

      <List members={members} result={result} setMembers={setMembers} setResult={setResult} loading={loading} handleDelete={handleDelete}/>
    </Block>
  );
};

export default MemberList;
