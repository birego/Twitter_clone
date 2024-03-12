import TweetEditor from "./composants/TweetEditor/TweetEditor.jsx";
import Header from "./composants/Header/Header.jsx";
import Tweets from "./composants/Tweets/tweets.jsx";
import Trend from "./Trend.jsx";
import Sidebar from "./Sidebar.jsx";

function Timeline() {
  return (
    <>
      <Sidebar />
      <div className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
      </div>
      <Trend />
    </>
  );
}
export default Timeline;
