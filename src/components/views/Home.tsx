import React, { useEffect, useState } from "react";
import { getSearchHistory, updateSearchHistory } from "../../util/util";
import { IHistory } from "../../util/interface";

const Home: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [fetchedUser, setFetchedUser] = useState<any>();
  const [resultFetched, setResultFetched] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setResultFetched(false)
  }, [])

  const fetchUser = async () => {
    setResultFetched(false)
    setLoading(true);
    setFetchedUser(null);
    const searchHistory: IHistory[] = getSearchHistory();
    const url = `https://api.github.com/users/${name}`
    const res = await fetch(url);
    const data = await res.json();
    if (data?.id) {
      setFetchedUser(data)
      searchHistory.push({
        searchterm: name,
        found: true,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        login: data.login
      })
    } else {
      searchHistory.push({
        searchterm: name,
        found: false,
        avatar_url: "",
        html_url: "",
        login: ""
      })
    }
    setResultFetched(true)
    setLoading(false)
    updateSearchHistory(searchHistory)
    console.log(data)
  }
  return (
    <div className="mainDiv">
      <div className="infohead">
        <h4>Search Github User</h4>
      </div>
      <div className="input-icons">
        <i className="fa fa-search icon"></i>
        <input
          className="nameInput"
          placeholder="Enter username"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        ></input>
      </div>
      <button className="submitBtn" onClick={fetchUser} disabled={loading}>
        {loading ? "Fetching User..." : "Submit"}
      </button>
      {resultFetched && <div>
          {fetchedUser?.id ?
             <div className="resultDiv" onClick={() => {
              window.open(fetchedUser.html_url)
             }}>
                <img src={fetchedUser.avatar_url} height={100} width={100} />
                <div className="usernameDiv">
                  <h3>Github UserName</h3>
                  <h4>{fetchedUser.login}</h4>
                </div>
             </div> : 
             <div>
                <h4>User Not Found!</h4>
             </div>
          }
      </div>}
    </div>
  )
}

export default Home;