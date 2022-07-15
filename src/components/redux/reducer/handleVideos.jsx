import { createSlice} from "@reduxjs/toolkit";

const handleVideos = createSlice({
    name: 'videos',
    initialState: {
        videos: []
    },
    reducers: {
        FILTER: (state, action) => {
             state.videos = action.payload
        
         },
        UPDATE: (state, action) => {
            state.videos = action.payload
            
        }
    },
    
})
export const { UPDATE, FILTER } = handleVideos.actions
export default handleVideos
/* const videos = [];
const handleVideos = (state = videos, action) => {
    const data = action.payload;
    switch (action.type) {
        case 'FILTER':
            console.log(data);
            return data;
        case 'SEARCH':
            console.log(action.payload);
            return action.payload
        case 'UPDATE':
            console.log(data);
            return data;
        default:
            return state;
    }
}

export default handleVideos */