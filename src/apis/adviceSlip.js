import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.adviceslip.com/advice',
    params:{
        offset:10
    }
    
   
   
});