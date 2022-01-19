import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { getNewsList } from "store/actionCreators/news";

export const News = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.news);
  const message = useSelector((state) => state.news.message);

  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  const renderNewsList = useCallback(() => {
    return newsList.map((news) => {
      return (
        <li key={news.id}>
          <p>{news.title}</p>
          <p>{news.text}</p>
        </li>
      );
    });
  }, [newsList]);

  if (newsList) {
    return (
      <div className="news">
        <div className="news__section">
          <p className="news__item">Total news: {newsList.length}</p>
          <ul className="news__list">{renderNewsList()}</ul>
        </div>

        <div className="news__section">
          <p className="news__item">Links:</p>
          <ul className="news__list">{renderNewsList()}</ul>
        </div>
      </div>
    );
  } else if (!newsList && message) {
    return (
      <div className="news__section">
        <p className="news__item">{message}</p>
      </div>
    );
  }
  return (
    <div className="news__section">
      <p className="news__item">Loading...</p>
    </div>
  );
};
