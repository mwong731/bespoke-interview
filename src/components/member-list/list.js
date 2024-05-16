import Row from "./Row";
import {Table, Thead, TH, IconButton, EmptyRow, Loader, TableContainer} from "../styles/member.styled"
import { useState } from "react";

const List = ({ members, result, setMembers, setResult, loading, handleDelete }) => {
    const [sortBy, setSortBy] = useState()
    const [sortOrder, setSortOrder] = useState('desc')

    const sortArr = (array, key, order ) =>{
        return array.sort((a,b)=>{
            if(order === 'asc'){
                return a[key] > b[key] ? 1:-1
            }else{
                return b[key] > a[key] ? 1:-1
            }
        })
    }

    const handleSort = (columnName) =>{
        let newMembers = [...members]
        let newResult = [...result]
  
        if(sortBy !== columnName){
            setSortBy(columnName)
            setSortOrder('asc')
            newMembers = sortArr(newMembers, columnName, 'asc')
            newResult = sortArr(newResult, columnName, 'asc')
        }else{
            setSortOrder(sortOrder === 'asc' ? 'desc':'asc')
            newMembers = sortArr(newMembers, columnName, sortOrder === 'asc' ? 'desc':'asc')
            newResult = sortArr(newResult, columnName, sortOrder === 'asc' ? 'desc':'asc')
        }

        //Keep 2 sets separate to prevent losing any data when switching between sorting and filtering
        setMembers(newMembers)
        setResult(newResult)
    }

    return(
        <TableContainer>
            <Table>
                <Thead>
                <tr>
                    <TH>
                        Name
                        <IconButton  $isactive={sortBy === 'name' ? true:false} onClick={()=>handleSort('name')}>
                            <i className="fa-solid fa-sort"></i>
                        </IconButton>
                    </TH>
                    <TH>Age</TH>
                    <TH>Member Rating</TH>
                    <TH>Activities
                        <IconButton  $isactive={sortBy === 'activities'? true:false} onClick={()=>handleSort('activities')}>
                            <i className="fa-solid fa-sort"></i>
                        </IconButton>
                    </TH>
                    <TH>Action</TH>
                </tr>
                </Thead>
                <tbody>
                {loading ? 
                    <tr><Loader><i className="fa-solid fa-circle-notch fa-spin"></i></Loader></tr>
                    :''
                }
                {members.map((member) => (
                    <Row {...member} key={member.id} handleDelete={handleDelete}/>
                ))}
                {!loading && members.length === 0 ? 
                    
                    <tr><EmptyRow>No record found</EmptyRow></tr>:''
                    
                }
                </tbody>
            </Table>
        </TableContainer>
    )
    
};

export default List;