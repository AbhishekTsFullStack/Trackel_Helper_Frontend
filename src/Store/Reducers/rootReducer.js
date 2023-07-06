import { combineReducers } from "redux";
import SeviceAddReducer from "./Dashboard/ServiceAddReducer";
import GetAllServicesReducer from "./Dashboard/GetAllServicesReducer";
import ImageUploadReducer from "./ImageUploadReducers";
import GetLogInReducers from "./LandingPage/AuthReducer";
import DeleterTheServiceReducer from "./Dashboard/DeleteServiceReducer";


const rootReducer = combineReducers({
    SeviceAddReducer: SeviceAddReducer,
    GetAllServicesReducer: GetAllServicesReducer,
    ImageUploadReducer: ImageUploadReducer,
    DeleterTheServiceReducer: DeleterTheServiceReducer,

    // Landing Page 
    GetLogInReducers: GetLogInReducers,
})



export default rootReducer