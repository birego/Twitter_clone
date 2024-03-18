import Trend from "./trends/trend"
import Sidebar from "./Sidebar"
import './Style.css'
export default function Profile(){
    return (
        <div className="profile-container">
            <Sidebar />
            <div className="profil">
            <h1>Profil</h1>
            </div>
            <Trend />
        </div>
    )
}