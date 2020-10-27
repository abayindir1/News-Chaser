import React, { useEffect, useState } from "react";
import Matches from "../Matches/Matches";
import Table from "../Table/Table";

export default function MobileResponsiveTables() {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="responsive-tables">
      <button className="responsive-button">
        <i class="fas fa-angle-double-up"></i> Tables{" "}
        <i class="fas fa-angle-double-up"></i>
      </button>

      <div className={hidden ? "responsive-content-hidden" : "responsive-content"}>
        <div className="matches-responsive">
          <Matches />
        </div>

        <div className="standings-responsive">
            <Table/>
        </div>
      </div>
    </div>
  );
}
