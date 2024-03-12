import Tweet from './tweet.jsx';
import {data}  from '../Data/Data.jsx';

export default function Tweets (){
    
    return (<div className="tweets">

        {data.map(el => (
            <Tweet key={el.id} tableau={el}/>
        ))}

    </div>)}