import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "b14543c397eb43b4bd612a325aeb8f91"
    }
})