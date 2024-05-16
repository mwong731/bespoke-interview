import styled from 'styled-components';


export const Block = styled.div`
  padding: 20px;
  max-width: 880px;
  margin: auto
`;

export const Filters = styled.div`
  display: flex;
  border-radius: 15px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  flex-direction: row;
  align-items:center;
  width: 100%;
  margin: 1rem 0;
  > input {
    max-width: 10rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 10px 0 0 10px;
  border: 1px solid #ccc
`;

export const Table = styled.table`
  min-width: 100%;
  padding: 0 5rem;
  max-width: 100%;
  background: #fff;
  border-radius: 15px;
  border-collapse: collapse;
  box-shadow: 0px 1px 5px 2px #d3d1d1;
  >tbody{
    position: relative
  }
`;

export const Thead = styled.thead`
  background: lightgrey;
  border-radius: 10px 10px 0 0
`;

export const TH = styled.th`
  padding: 1rem;
  text-align: left;
`;

export const TR = styled.tr`
    border-bottom: 1px solid #ccc;
    &:last-child{
        border-bottom: none
    }
`

export const Cell = styled.td`
  padding: 1rem;
  text-align: left;
`;

export const IconButton = styled.span`
  padding: 0 5px;
  margin-right: 10px;
  cursor: pointer;
  color: ${props => props.$isactive == 1 ? "#2E4562":"#818FA0"};
  &:last-child{
    margin-right: 0;
  }
  &:hover{
    color: #4D73A4
  }
`;

export const SearchForm = styled.form`
  display: flex;
  margin-right: 10px;
`

export const SearchButton = styled.button`
  background-color: #2E4562;
  color: #fff;
  border-radius: 0 10px 10px 0;
  outline: none;
  padding: 0 10px
`

export const Button = styled.button`
  background-color: #01377d;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover, &:focus  {
    background-color: #4D73A4;
  }
`;


export const ButtonOutline = styled.button`
  background-color:#fff;
  border-radius: 8px;
  border: 1px solid #01377d;
  box-sizing: border-box;
  color:  #01377d;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover, &:focus  {
    background-color: #eee;
  }
  margin-left: 10px
`;

export const EmptyRow = styled.td`
  padding: 40px 20px;
  width: 100%;
  text-align: center;
  color: #aaa
`

export const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:center
`

export const Loader = styled.td`
    padding: 40px 20px;
    width: 100%;
    min-height 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(255,255,255,0.6);
    text-align: center;
    font-size: 2rem
`


export const SelectButton = styled.button`
    border: 1px solid #ccc;
    border-radius: 15px;
`

export const FilterContainer = styled.div`
  position: relative
`

export const Dropdown = styled.div`
  display: ${props=>props.$isOpen ? 'block':'none'};
  position: absolute;
  top:45px;
  right:0;
  background-color: #fff;
  min-width: 200px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  z-index:10;
  max-height: 500px;
  overflow: auto;
  >span{
    display: block
  }
  input{
    cursor: pointer
  }
`

export const DropdownTitle = styled.p`
    margin-bottom: 5px;
    font-weight: bold
`

export const FormContainer = styled.div`
  padding: 40px;
  background-color: #fff;
  border-radius: 15px;
  
`
export const FormRow = styled.div`

  margin-bottom : 20px;
  >input{
    width: 200px;
    border: 1px solid #ccc
  }
  ${SearchForm}{
    max-width: 200px
  }
`
export const Label = styled.span`
  display:block;
  margin-bottom: 10px;
  width: 100px;
  margin-right: 10px
`
export const Select = styled.div`
  >select{
    height: 40px;
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 100px;
    padding: 0 10px
  }

`

export const Input = styled.input`
    padding: 0.5rem;
    border-radius: 10px 
`

export const Activity = styled.div`
    padding: 5px 10px;
    border: 1px solid #4D73A4;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    max-width: 100%;
    line-break: anywhere;
`

export const ActivityRow = styled.div`
  display: flex;
  flex-wrap: wrap
`

export const Error = styled.p`
    margin-bottom:10px;
    color:red;
`
export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255,255,255,0.5);
  position: absolute;
  top:0;
  left:0;
  z-index: 10;
  font-size: 3rem;
  display: flex;
  align-items:center;
  justify-content: center
`