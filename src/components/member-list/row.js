import {Cell, IconButton, TR} from "../styles/member.styled"
import { Link } from "react-router-dom";

const Row = ({ id, age, name, activities, rating, handleDelete }) => (

    <TR key={id}>
      <Cell>{name}</Cell>
      <Cell>{age}</Cell>
      <Cell>{rating}</Cell>
      <Cell>
        {activities.map((activity, i) => (
          <div key={i}>{activity}</div>
        ))}
      </Cell>
      <Cell>
        <Link
            to='/edit'
            state={{ member: {id, age, name, activities, rating}}}
        >
            <IconButton $isactive={true}>
      
                <i className="fa-solid fa-pen"></i>
            </IconButton>
        </Link>
        <IconButton $isactive={true} onClick={()=>handleDelete(id)}> 
            <i className="fa-solid fa-trash"></i>
        </IconButton>
      </Cell>
    </TR>
)

export default Row;