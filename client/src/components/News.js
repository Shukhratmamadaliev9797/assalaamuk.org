import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listNews } from "../actions/newsActions";
import MainLoader from "./MainLoader";
import Title from "./Title";

export default function News() {
  const newsLists = useSelector((state) => state.newsLists);
  const { loading: listLoading, error: listError, newsList } = newsLists;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listNews());
  }, [dispatch]);
  return (
    <div className="newsComponent">
      <div className="newsComponent__container">
        <Title>The Latest News</Title>
        <div className="newsComponent__newsList">
          {listLoading ? (
            <MainLoader />
          ) : listError ? (
            listError
          ) : (
            newsList.map((news) => {
              return (
                <div className="newsComponent__news">
                  <div className="newsComponent__news-image">
                    <img src="./images/modal/login.jpeg" alt={news.title} />
                  </div>
                  <div className="newsComponent__news-title">
                    <h1>{news.title.substring(0, 55)}...</h1>
                  </div>
                  <div className="newsComponent__news-paragraph">
                    <p>{news.paragraph1.substring(0, 250)}...</p>
                  </div>
                  <div className="newsComponent__news-action">
                    <Link to={`/news/${news._id}`}>Read More...</Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="projectsComponent__all">
          <Link to="/news">
            View all news <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
