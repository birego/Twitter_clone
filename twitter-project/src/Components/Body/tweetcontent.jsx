import TweetActions from "./tweet-action";
import TweetBody from "./tweet-body";


export default function TwitteContent({content, actions, avatars}){

    return (
        <div className="tweet-content">
            <TweetBody text={content} avatar={avatars}/>
            <TweetActions actions={actions}/>
        </div>
    )
}