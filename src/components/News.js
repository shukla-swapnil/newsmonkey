import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    document.title = `NewsMonkey - ${props.capitalizeFirstLetter(
      props.category
    )}`;
  }, []);

  const handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${
    //   props.category
    // }&apiKey=325d133c725d497b9018ea4d143f80b5&page=${
    //   page - 1
    // }&pageSize=${props.pageSize}`;
    // setLoading(true);
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // setPage(page - 1);
    // setArticles(parsedData.articles);
    // setLoading(false);
    setPage(--page);
    updateNews();
  };

  const handleNextClick = async () => {
    // if (
    //   page + 1 >
    //   Math.ceil(totalResults / props.pageSize)
    // ) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     props.country
    //   }&category=${
    //     props.category
    //   }&apiKey=325d133c725d497b9018ea4d143f80b5&page=${
    //     page + 1
    //   }&pageSize=${props.pageSize}`;
    // setLoading(true);
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    // setPage(page + 1);
    // setArticles(parsedData.articles);
    // setLoading(false);
    // }
    setPage(++page);
    updateNews();
  };

  const fetchMoreData = async () => {
    setPage(++page);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "70px 0 20px 0" }}>
        NewsMonkey - Top {props.capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={
                      element.urlToImage ??
                      "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/02/Ford-EV-pickup-platform-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"
                    }
                    newsUrl={element.url}
                    author={element.author ?? "Unknown"}
                    date={new Date(element.publishedAt).toGMTString()}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </>
  );
};

News.defaultProps = {
  pageSize: 5,
  country: "in",
  category: "general",
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
