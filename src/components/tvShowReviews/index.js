import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTvShowsReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ tvshow }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getTvShowsReviews(tvshow.id).then(reviews => {
      setReviews(reviews);
    });
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.author}</td>
                <td>{excerpt(r.content)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/reviews/${r.id}`,
                      state: {
                        review: r,
                        tvshow: tvshow
                      }
                    }}
                  >
                    Full Review
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};