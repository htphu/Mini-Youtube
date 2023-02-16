import React, {useState}from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';

const InputSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [hiddenSearchInput, setHiddenSearchInput] = useState(true);

    const navigate =useNavigate()
    const handleClickButtonSearch=()=>{
        if(!searchValue.trim()){
            setHiddenSearchInput(prev=>{return !prev});
            return
        }
        navigate('/Mini-Youtube/Search/'+searchValue);
        setSearchValue("");
        setHiddenSearchInput(prev=>{return !prev});
    }
    return (
        <div className={hiddenSearchInput ? "input hiddenSearchInput" : "input"}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <input type="text" placeholder="Tìm kiếm" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}  />
                {searchValue && <CloseIcon className="close" onClick={()=>{ setSearchValue('') }}/>}
            </div>
            <Tooltip title="Tìm kiếm">
                <div className="input-search" onClick={()=>{handleClickButtonSearch()}}>
                    <SearchIcon />
                </div>
            </Tooltip>
        </div>
    )
}

export default InputSearch