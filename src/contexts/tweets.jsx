import { createContext, useEffect, useState } from "react";
import useFetch from '../LocalHooks/UseFetch'
export const Context = createContext(null);

const TweetContext = ({ children }) => {
  const { data: tweetData } = useFetch(
    "http://localhost:3000/tweets"
  );
  const [tweets, setTweets] = useState(null);
  useEffect(() => setTweets(tweetData), [tweetData]);

  const { data: currentData } = useFetch(
    "http://localhost:3000/current-user"
  );
  const [current, setCurrent] = useState(null);
  useEffect(() => setCurrent(currentData), [currentData]);

  const { data: navData } = useFetch(
    "http://localhost:3000/nav"
  );
  const [nav, setNav] = useState(null);
  useEffect(() => setNav(navData), [navData]);

  const { data: trendData } = useFetch(
    "http://localhost:3000/trends"
  );
  const [trends, setTrend] = useState(null);
  useEffect(() => setTrend(trendData), [trendData]);

  return (
    tweets &&
    current &&
    nav &&
    trends && (
      <Context.Provider value={{ tweets, setTweets, current, nav, trends }}>
        {children}
      </Context.Provider>
    )
  );
};
export default TweetContext;
