import { GETALLTASKS } from "../ActionTypes/TaskTypes"

const initialState = {
    tasks : [],
    task : {}
}


const TaskReducer=(state = initialState, action)=>{
    switch (action.type) {
        case GETALLTASKS : return {...state, tasks : action.payload}
        default: return state
    }
}

export default TaskReducer