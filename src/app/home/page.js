import "./home.module.css";

import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Infolabel from "@/components/info/Info";

export default function Home() {
  return (
    <>
      <main className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mainContent">
          <header>
            <div className="heading-welcome"> <Infolabel /></div>
          </header>
          <div className="body">
            <div className="background-border">
             
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
