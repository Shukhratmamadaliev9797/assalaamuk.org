import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNews, listNews } from "../../actions/newsActions";
import MainLoader from "../../components/MainLoader";
import CreateNews from "../../modals/CreateNews";
import Delete from "../../modals/Delete";
import EditNews from "../../modals/EditNews";

export default function News() {
  const [createNewsModal, setCreateNewsModal] = useState(false);
  const [deleteNewsModal, setDeleteNewsModal] = useState(false);
  const [editNewsModal, setEditNewsModal] = useState(false);

  const dispatch = useDispatch();
  const newsCreate = useSelector((state) => state.newsCreate);
  const [news, setNews] = useState();
  const { loading, error, success } = newsCreate;

  const newsLists = useSelector((state) => state.newsLists);
  const { loading: listLoading, error: listError, newsList } = newsLists;

  const newsDelete = useSelector((state) => state.newsDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = newsDelete;

  const newsUpdate = useSelector((state) => state.newsUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = newsUpdate;
  useEffect(() => {
    dispatch(listNews());
    if (success) {
      setCreateNewsModal(false);
    }
    if (successDelete) {
      setDeleteNewsModal(false);
    }
    if (newsUpdate) {
      setEditNewsModal(false);
    }
  }, [success, dispatch, successDelete, newsUpdate]);

  const projectDeleteHandler = (project) => {
    dispatch(deleteNews(news._id));
  };
  return (
    <>
      {createNewsModal ? (
        <CreateNews
          closeModal={() => {
            setCreateNewsModal(false);
          }}
        />
      ) : (
        ""
      )}

      {deleteNewsModal ? (
        <Delete
          heading="Delete News"
          body="Are you sure to delete news?"
          closeModal={() => setDeleteNewsModal(false)}
          deleteHandler={() => projectDeleteHandler(news)}
        />
      ) : (
        ""
      )}
      {editNewsModal ? (
        <EditNews closeModal={() => setEditNewsModal(false)} news={news} />
      ) : (
        ""
      )}
      <div className="news">
        <div className="news__container">
          <div className="activities__title">
            <h1>News</h1>
            <button
              onClick={() => {
                setCreateNewsModal(true);
              }}
            >
              Compose News
            </button>
          </div>
          <div className="activities__cards">
            {listLoading ? (
              <MainLoader />
            ) : listError ? (
              <div>{listError}</div>
            ) : (
              newsList.map((news) => {
                return (
                  <div className="activities__activity">
                    <div className="activities__activity-image">
                      <img src={news.image} alt={news.title} />
                    </div>
                    <div className="activities__activity-title">
                      {news.title.substring(0, 60)}
                    </div>

                    <div className="activities__activity-paragraph">
                      {news.paragraph1.substring(0, 300)}
                    </div>

                    <div className="activities__activity-action">
                      <button
                        onClick={() => {
                          setEditNewsModal(true);
                          setNews(news);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setDeleteNewsModal(true);
                          setNews(news);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
