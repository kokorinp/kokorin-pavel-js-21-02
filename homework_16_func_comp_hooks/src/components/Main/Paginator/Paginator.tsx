import React from "react";

import "./Paginator.css";
import Page from "./Page/Page";
import Paginatorselect from "./Paginatorselect/Paginatorselect";

interface Props {
  page: number;
  limit: number;
  total: number;
  setNewPage: (page: number) => void;
  setNewLimit: (limit: number) => void;
}

const Paginator = ({ page, limit, total, setNewPage, setNewLimit }: Props) => {
  const AllPages: Array<number> = [];
  for (let i = 1; i <= (total + 1) / limit; i += 1) {
    AllPages.push(i);
  }
  if ((total + 1) % limit > 0) {
    AllPages.push(AllPages.length + 1);
  }

  return (
    <div className="paginator">
      <div className="pages">
        {AllPages.map((e: number) => (
          <Page
            key={e}
            num={e}
            active={e === page + 1}
            setNewPage={setNewPage}
          />
        ))}
      </div>
      <Paginatorselect limit={limit} setNewLimit={setNewLimit} />
    </div>
  );
};

export default Paginator;
