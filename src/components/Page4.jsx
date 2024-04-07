import { useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import React from "react";
import "./Page4.css";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

export default function Page4() {
  let { nameOfOrg } = useParams();
  const [post, setpost] = useState("");
  const handleChange = (e) => {
    setpost(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log("hi")
    const data = {
      "nameOfOrg":nameOfOrg ,
      "feed": {
        "post": post,
        "support": 0,
        "id": uuid(),
        "likedby": []
      }
    };
    console.log(data);
    axios.post('http://localhost:3000/addFeed', data)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });

  };
  return (
    <>
      <div className="a">
        <div className="b my-4 text-white">
          <h2>
            <u>Create Issue</u>
          </h2>
        </div>
        <div className="c text-white">
          <form action="#">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Write your issue
            </label>
            <textarea
              className="form-control "
              id="exampleFormControlTextarea1"
              rows="15" value={post} onChange={handleChange}
            ></textarea>

            <button onClick={handleSubmit}  className="d" type="submit">
              
            <Link to={`/${nameOfOrg}`}> Post</Link> 
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
