import axios from 'axios';
 
export default axios.create({
baseURL:'http://springbootappnew-env.eba-hnmh9pyq.us-east-2.elasticbeanstalk.com/pos',
headers:{
    'Authorization':'application/json'
}

 });