import React, { useCallback, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { v4 as uuidv4 } from "uuid";

import { IBase } from "@/types";

import Card from "../Card";
import useStyles from "./SliderList.styles";
import { SliderListProps } from "./SliderList.types";

const SliderList: React.FC<SliderListProps & IBase> = ({
  testId,
  data,
  activeMarker,
  onChangeFocus,
  onClickBook,
  onClickCard,
}: SliderListProps & IBase) => {
  const classes = useStyles();
  const scrollRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);

  const onScrollList = useCallback(() => {
    const slidingEl: any = scrollRef.current;
    const [cartEl]: any = slidingEl.children;

    if (
      slidingEl.offsetWidth + slidingEl.scrollLeft - slidingEl.scrollWidth >
      -60
    ) {
      return (x.current = data.length - 1);
    }

    if (slidingEl.scrollLeft === slidingEl.scrollWidth) {
      return (x.current = data.length - 1);
    }

    const current = Math.floor(slidingEl.scrollLeft / cartEl.clientWidth);

    if (x.current === current) {
      return;
    }

    x.current = current;

    if (!onChangeFocus) return;

    onChangeFocus(current);
  }, []);

  return (
    <>
      <ScrollContainer
        innerRef={scrollRef}
        onScroll={onScrollList}
        data-testid={testId}
        className={classes.root}
      >
        {data.map((item) => {
          return (
            <div className={classes.card} key={uuidv4()}>
              <Card
                className={activeMarker === item.id ? classes.active : ""}
                onClickCard={onClickCard}
                info={item}
                onClickBook={() => onClickBook(item)}
              />
            </div>
          );
        })}
      </ScrollContainer>
    </>
  );
};

export default React.memo(SliderList);
