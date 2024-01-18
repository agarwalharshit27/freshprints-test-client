import React, { useEffect, useState } from "react";
import { IHistory } from "../../util/interface";
import { clearSearchHistory, getSearchHistory } from "../../util/util";

const HistoryView: React.FC = () => {
  const [searchHistory, setSearchHistory] = useState<IHistory[]>([]);

  useEffect(() => {
    setSearchHistory(getSearchHistory())
  }, [])

  return (
    <div className="tableDiv">
      <div className="infohead">
        <h4>Your Search History</h4>
      </div>
      <table>
        <thead>
          <tr>
            <th>Search Item</th>
            <th colSpan={3}>Search Results</th>
          </tr>
        </thead>
        <tbody>
          
          {searchHistory.length > 0 ? searchHistory.map((item: IHistory, idx: number) => {
            return (
              <tr key={idx}>
                <td>{item.searchterm}</td>
                <td colSpan={3}>
                  {item.found ? <div className="resultDiv" onClick={() => {
                        window.open(item.html_url)
                      }}>
                    <img src={item.avatar_url} height={50} width={50} />
                    <div className="usernameDiv">
                      <h3>Github UserName</h3>
                      <h4>{item.login}</h4>
                    </div>
                  </div> : 
                  <p>Search result not found</p>
                  }
                </td>
              </tr>
            )
          }) : <p>Search History not found</p>}
        </tbody>
      </table>
      <button
        className="clearBtn"
        onClick={() => {
          clearSearchHistory()
          setSearchHistory([])
        }}
      >
        Clear Search History
      </button>
    </div>
  )
}

export default HistoryView;