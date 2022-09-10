import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Users/UserSlice";
import movieReducer from "../features/movies/movieSlice"


export default configureStore({
    reducer: {
        user: userReducer,  
        movie: movieReducer,
      },
});


