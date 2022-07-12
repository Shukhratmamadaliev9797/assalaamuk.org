import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { detailsNews, listNews } from "../actions/newsActions";
import Footer from "../components/Footer";
import MainLoader from "../components/MainLoader";

export default function NewsPage() {
  const newsId = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsNews(newsId.id));
    dispatch(listNews());
  }, [dispatch, newsId.id]);

  const newsDetails = useSelector((state) => state.newsDetails);
  const { loading, error, news } = newsDetails;

  const newsLists = useSelector((state) => state.newsLists);
  const { loading: listLoading, error: listError, newsList } = newsLists;

  return (
    <div className="newsPage">
      {loading ? (
        <MainLoader />
      ) : error ? (
        error
      ) : (
        <div className="newsPage__container">
          <div className="newsPage__header">
            <div className="newsPage__header-content">
              <div className="newsPage__header-content-left">
                <h1>
                  News <i class="fa-solid fa-circle-play"></i>{" "}
                  <span>{news.title}</span>
                </h1>
              </div>
              <div className="newsPage__header-content-right"></div>
            </div>
          </div>
          <div className="newsPage__main">
            <div className="newsPage__main-left">
              <div className="newsPage__main-left-mainBlock">
                <img src="../images/modal/login.jpeg" alt={news.title} />
              </div>
              <div className="newsPage__main-left-block">
                {news.subtitle1 ? <h3>{news.subtitle1}</h3> : ""}
                <p>{news.paragraph1}</p>
                <img src="../images/modal/login.jpeg" alt={news.title} />
              </div>
              <div className="newsPage__main-left-block">
                {news.subtitle2 ? <h3>{news.subtitle2}</h3> : ""}
                <p>{news.paragraph2}</p>
                {news.image2 ? <img src={news.image2} alt={news.title} /> : ""}
              </div>
              <div className="newsPage__main-left-block">
                {news.subtitle3 ? <h3>{news.subtitle3}</h3> : ""}
                <p>{news.paragraph3}</p>
                {news.image3 ? <img src={news.image3} alt={news.title} /> : ""}
              </div>
              <div className="newsPage__main-left-block">
                {news.subtitle4 ? <h3>{news.subtitle4}</h3> : ""}
                <p>{news.paragraph4}</p>
                {news.image4 ? <img src={news.image4} alt={news.title} /> : ""}
              </div>
              <div className="newsPage__main-left-block">
                {news.subtitle5 ? <h3>{news.subtitle5}</h3> : ""}
                <p>{news.paragraph5}</p>
                {news.image5 ? <img src={news.image5} alt={news.title} /> : ""}
              </div>
              <div className="newsPage__main-left-block">
                {news.subtitle6 ? <h3>{news.subtitle6}</h3> : ""}
                <p>{news.paragraph6}</p>
                {news.image6 ? <img src={news.image6} alt={news.title} /> : ""}
              </div>
            </div>
            <div className="projectPage__main-right">
              <h5>Other News</h5>
              {listLoading ? (
                "loading"
              ) : listError ? (
                listError
              ) : (
                <ul>
                  {newsList.map((news) => {
                    return (
                      <li key={news._id}>
                        <Link to={`/news/${news._id}`}>
                          <h6>{news.title}</h6>
                          {/* <img
                            src="../images/modal/login.jpeg"
                            alt={activity.title}
                          /> */}
                          <p>{news.paragraph1.substring(0, 100)}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
