import AvatarImage from '../../assets/pro.png';
export default function TwitteAvatar(){
    return(
        <div>
            <img className="tweet-avatar" src={AvatarImage} alt=""/>
        </div>
    )
}