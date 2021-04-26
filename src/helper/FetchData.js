import axios from 'axios'

const {REACT_APP_BASE_URL, REACT_APP_DUMMY_API_KEY} = process.env;

export const FetchData=async(path)=> {
    
    const {data} = await axios.get(`${REACT_APP_BASE_URL}${path}`, {
        headers : {
            "app-id" : REACT_APP_DUMMY_API_KEY
        }
    });
    return data;
        
   
}


