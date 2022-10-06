import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Request from "../helper/Request";

const Home = () => {
  return (
    <div>
      <Hero />
      <Row rowID="1" title="Up Coming" fetchURL={Request.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={Request.requestPopular} />
      <Row rowID="3" title="Top Rated" fetchURL={Request.requestTopRated} />
      <Row rowID="4" title="Trending" fetchURL={Request.requestTrending} />
      <Row rowID="5" title="Horror Movies" fetchURL={Request.requestHorror} />
    </div>
  );
};

export default Home;
