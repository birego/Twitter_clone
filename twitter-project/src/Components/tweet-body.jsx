import TweetImage from "./tweet-image";
import TweetText from "./tweet-text";
import TweetTitle from "./tweet-title";
export default function TweetBody(){
    return(
        <div className="tweet-body">
            <TweetTitle/>
            <TweetText/>
            <TweetImage/>
        </div>
 
 )
}