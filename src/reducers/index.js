import usersReducer from "./usersReducer";
import {combineReducers} from "redux";
import skillsReducer from "./skillsReducer";
import formReducer from "./formReducer";

const allReducers = combineReducers({
    users: usersReducer,
    skills: skillsReducer,
    form: formReducer,
})

export default allReducers;