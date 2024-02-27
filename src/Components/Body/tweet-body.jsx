import TweetImage from "./tweet-image";
import TweetText from "./tweet-text";
import TweetTitle from "./tweet-title";
export default function TweetBody({text, avatar}){
    return(
        <div className="tweet-body">
            <TweetTitle avata={avatar}/>
            <TweetText tex={text.text}/>
            <TweetImage src={text.srcImage}/>
        </div>
    )
}