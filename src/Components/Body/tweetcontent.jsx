import TweetActions from "./tweet-action";
import TweetBody from "./tweet-body";


export default function TwitteContent(){
    return (
        <div className="tweet-content">
            <TweetBody/>
            <TweetActions/>
        </div>
    )
}