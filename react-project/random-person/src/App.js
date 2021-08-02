import Card from "./components/Card";
import { useFetch } from "./hooks/useFetch";
import Loading from "./components/Loading";
import React from "react";

const Context = React.createContext();

const url = "https://randomuser.me/api/";
function App() {
  const { loading, data, getData } = useFetch(url);

  return (
    <Context.Provider value>
      <div className="page">
        {loading ? (
          <Loading />
        ) : (
          <Card data={data.results[0]} getData={getData} />
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
