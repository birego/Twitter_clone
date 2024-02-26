import TwitteAvatar from './tweetavatar'
import TwitteContent from "./tweetcontent"
export default function Tweet({data}){

    return(
      <div className="tweet">
        <TwitteAvatar avatars={data.user}/>
        <TwitteContent actions={data.actions} content={data.content} avatars={data.user}/>
      </div>  
    )
}