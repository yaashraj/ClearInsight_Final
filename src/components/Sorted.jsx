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
          let temp = res.data;
          temp.sort(function(a, b){
            if (a.support < b.support) {
              return 1;
            } else if (a.support > b.support) {
              return -1;
            } else {
              return 0;
            }
          });
          setRecords(temp);
          setIsDataLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsDataLoading(false);
        });
    }
  }, [isAuthLoading, nameOfOrg]);

  if (isAuthLoading || isDataLoading) {
    return <div>Loading...</div>;
  }

  
  console.log(data);
  return (
  <>
  <Login/>
  <div className="all">
  <h1 className="head text-center text-white">{nameOfOrg}</h1>
  <h4 className="head text-center text-white">
 
</h4>
  {records.map((item, index) => (
    <div className="post" key={index}>
      <div className="post-header">
        <h1>{item.post}</h1>
      </div>
      <div className="post-body">
        <h2>Support : {item.support}</h2>
        {/* <button data-buttonid={item.id} className="support-button" onClick={handleSupport}>Support</button> */}
      </div>
    </div>
  ))}
</div>


  </>


  );
}
export default home;

// export default App;