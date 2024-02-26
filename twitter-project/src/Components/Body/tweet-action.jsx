import TweetAction from "./tweet-act"
export default function TweetActions({actions}){

    return(
        
        <div className="tweet-actions">
            <TweetAction actio={actions}/>
        </div>
    )
}