import React, {useState}from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';

const InputSearch = () => {
    const [searchValue, setSearchValue] = useState('')
    const navigate =useNavigate()
    const handleSearch=()=>{
        if(!searchValue.trim()){
            return
        }
        navigate('/Mini-Youtube/Search/'+searchValue)
    }
    return (
        <div className="input">
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <input type="text" placeholder="Tìm kiếm" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}  />
                {searchValue && <CloseIcon className="close" onClick={()=>{ setSearchValue('') }}/>}
            </div>
            <Tooltip title="Tìm kiếm">
                <div className="input-search" onClick={()=>{handleSearch()}}>
                    <SearchIcon />
                </div>
            </Tooltip>
        </div>
    )
}

export default InputSearch