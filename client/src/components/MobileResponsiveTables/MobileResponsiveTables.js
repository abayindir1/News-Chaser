import React, { useEffect, useState } from "react";
import Matches from "../Matches/Matches";
import Table from "../Table/Table";

export default function MobileResponsiveTables() {
  const [hidden, setHidden] = useState(true);

  function changeHidden (){
    if(hidden){
      setHidden(false)
    }else{
      setHidden(true)
    }
  }

  return (
    <div className="responsive-tables">
      <button className="responsive-button" onClick={()=> changeHidden()}>
        {hidden ? (<h3><i class="fas fa-angle-double-up"></i> Tables</h3>) : <h3><i class="fas fa-angle-double-down"></i> Tables</h3>}
      </button>

      <div
        className={hidden ? "responsive-content-hidden" : "responsive-content"}
      >
        <div className="matches-responsive">
          <Matches />
        </div>

        <div className="standings-responsive">
          <Table />
        </div>
      </div>
    </div>
  );
}
