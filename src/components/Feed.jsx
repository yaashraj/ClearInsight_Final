import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import "./Feed.css";
import Login from "./Login";
function home() {
  let { nameOfOrg } = useParams();
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const { user, isLoading: isAuthLoading } = useAuth0();
  const [isDataLoading, setIsDataLoading] = useState(true);
  // const { user } = useAuth0();
  // console.log(user.sub);
  useEffect(() => {
    if (!isAuthLoading) {
      axios.get(`http://localhost:3000/getData/${nameOfOrg}`)
        .then((res) => {
          setData(res.data);
          setRecords(res.data);
          setIsDataLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsDataLoading(false);
        });
    }
  }, [isAuthLoading, nameOfOrg]);

  if (isAuthLoading || isDataLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <button class="btn btn-primary" type="button" disabled>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    </button>
  </div>;
  }

  const handleSupport = async (e) => {
    const id = e.target.dataset.buttonid;
    const userid = user.sub;
  
    try {
      const res = await axios.put(`http://localhost:3000/updateFeed`, { id, userid });
  
      if (res.data === "Support increased") { 
        setRecords(prevRecords => {
          return prevRecords.map(record => {
            if (record.id === id) {
              return { ...record, support: record.support + 1, likedby: [...record.likedby, userid] };
            } else {
              return record;
            }
          });
        });
      } else if (res.data === "Support decreased") {
        setRecords(prevRecords => {
          return prevRecords.map(record => {
            if (record.id === id) {
              return { ...record, support: record.support - 1, likedby: record.likedby.filter(uid => uid !== userid) };
            } else {
              return record;
            }
          });
        });
      } 
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data);
  return (
  <>
  <Login/>
  <div className="all">
  <h1 className="head text-center text-white">{nameOfOrg}</h1>
  <h4 className="head text-center text-white">
  <button className="">
    <Link to={`/addFeed/${nameOfOrg}`}>add issue</Link>
  </button>
  <button>
    <Link to={`/Filtered/${nameOfOrg}`}>Filtered</Link>

  </button>
</h4>
  {records.map((item, index) => (
    <div className="post" key={index}>
      <div className="post-header">
        <h1>{item.post}</h1>
      </div>
      <div className="post-body">
        <h2>{item.support}</h2>
        <button data-buttonid={item.id} className="support-button" onClick={handleSupport}>Support</button>
      </div>
    </div>
  ))}
</div>


  </>


  );
}
export default home;

// export default App;