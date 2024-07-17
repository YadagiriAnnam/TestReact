import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList } from "./Posts";

function App() {
  const authProvider = {
    // authentication
    login: (params: any) => Promise.resolve(/* ... */),
    checkError: (error: any) => Promise.resolve(/* ... */),
    checkAuth: (params: any) => Promise.resolve(/* ... */),
    logout: () => Promise.resolve(/* ... */),
    // authorization
    getPermissions: () => Promise.resolve("admin"),
  };
  return (
    <div className="App">
      <Admin
        dataProvider={jsonServerProvider(
          "https://jsonplaceholder.typicode.com"
        )}
        authProvider={authProvider}
      >
        <Resource name="posts" list={PostList}  />
      </Admin>
    </div>
  );
}

export default App;
