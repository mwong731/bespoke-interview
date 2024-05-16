import React from "react";
import { useLocation } from 'react-router-dom';
import { Block, Title } from "../styles/member.styled";
import MemberForm from "./MemberForm";

const Edit = () => {
    const location = useLocation()

    return (
      <Block>
        <Title>
          <h1>{location.state?.member? "Edit" : "Add"} Member</h1>
        </Title>

        <MemberForm member={location.state?.member? location.state.member : null}/>
        
      </Block>
    );
  };
  
  export default Edit;
  