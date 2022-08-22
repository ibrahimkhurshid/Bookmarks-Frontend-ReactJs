import React from "react";

const BookmarkTable = ({ list }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {list.map((bookmark, id) => {
            return (
              <tr key={id}>
                <td>{bookmark.id}</td>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>{bookmark.title}</td>
                <td>
                  <a href={bookmark.url} target="_blank">
                    {bookmark.url}
                  </a>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    view
                  </button>
                </td>
                <td>
                  <button onClick={(e) => e.preventDefault()}>edit</button>
                </td>
                <td>
                  <button onClick={(e) => e.preventDefault()}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookmarkTable;
