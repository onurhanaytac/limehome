import React, { useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import { IBase } from "@/types";

import Card from "../Card";
import useStyles from "./SliderList.styles";
import { SliderListProps } from "./SliderList.types";

const SliderList: React.FC<SliderListProps & IBase> = ({
  testId,
  data,
  onChangeFocus,
  onClickBook,
  onClickCard,
}: SliderListProps & IBase) => {
  const classes = useStyles();
  const x = useRef(0);

  const onScrollList = useCallback((e: any) => {
    if (
      e.target.offsetWidth + e.target.scrollLeft - e.target.scrollWidth >
      -60
    ) {
      return (x.current = data.length - 1);
    }

    if (e.target.scrollLeft === e.target.scrollWidth) {
      return (x.current = data.length - 1);
    }
    const current = Math.floor(e.target.scrollLeft / 304);
    if (x.current === current) {
      return;
    }

    x.current = current;

    if (!onChangeFocus) return;

    onChangeFocus(current);
  }, []);

  return (
    <>
      <div
        data-testid={testId}
        className={classes.root}
        onScroll={onScrollList}
      >
        {data.map((item) => {
          return (
            <div className={classes.card} key={uuidv4()}>
              <Card
                onClickCard={onClickCard}
                info={item}
                onClickBook={() => onClickBook(item)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(SliderList);
