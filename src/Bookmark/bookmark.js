import React, { useEffect, useState } from "react";
import BookmarkTable from "./BookmarkTable";

const HOST = "http://localhost:3001";

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([{}]);

  const fetchBookmarks = () => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((data) => {
        setBookmarks(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    console.log("First render");
    fetchBookmarks();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="http:// - enter a url to quick save"
      ></input>
      <input type="text" placeholder="Search your bookmarks"></input>
      {bookmarks === undefined ? (
        <h2>No bookmark found</h2>
      ) : (
        <BookmarkTable list={bookmarks} />
      )}
    </>
  );
};

export default Bookmark;
