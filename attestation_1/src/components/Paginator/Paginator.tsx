import React from "react";

import "./Paginator.css";
import Page from "./Page/Page";
import Paginatorselect from "./Paginatorselect/Paginatorselect";
// import GetID from "../../utils/GetID/GetID";

interface Props {
  page: number;
  limit: number;
  total: number;
  setNewPage: (page: number) => void;
  setNewLimit: (limit: number) => void;
}

const Paginator = ({ page, limit, total, setNewPage, setNewLimit }: Props) => {
  const AllPages: Array<number> = [];
  for (let i = 1; i <= total / limit; i += 1) {
    if (
      i <= 3 ||
      i >= total / limit - 2 ||
      i === page ||
      i === page + 1 ||
      i === page + 2
    ) {
      AllPages.push(i);
    } else {
      AllPages.push(-1);
    }
  }

  if (total % limit > 0) {
    AllPages.push(AllPages.length + 1);
  }

  const resultAllPages = AllPages.filter(
    (e: number, i: number, arr: number[]) => {
      if (i === arr.length - 1) {
        return true;
      }
      return e !== arr[i + 1];
    }
  );

  return (
    <div className="paginator">
      <div className="pages">
        {resultAllPages.map((e: number, i: number, arr: Array<number>) => {
          const dotted: boolean = e === -1;
          const eee: number =
            e === -1
              ? Math.floor(arr[i - 1] + (arr[i + 1] - arr[i - 1]) / 2)
              : e;
          return (
            <Page
              key={eee}
              num={eee}
              active={eee === page + 1}
              setNewPage={setNewPage}
              dotted={dotted}
            />
          );
        })}
      </div>
      <Paginatorselect limit={limit} setNewLimit={setNewLimit} />
    </div>
  );
};

export default Paginator;
