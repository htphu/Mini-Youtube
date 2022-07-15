import { configureStore} from '@reduxjs/toolkit'
import handleVideo from './reducer/handleVideos';

const store = configureStore({
    reducer: {
        dataVideo: handleVideo.reducer,
    },
})
export default store