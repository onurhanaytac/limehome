import React, { useCallback, useEffect, useRef } from "react";
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

  const debounce = (func: any, timeout = 600) => {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const refs = data.reduce((acc: any, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

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

  useEffect(() => {
    if (!activeMarker) return;

    const { current } = refs[activeMarker];

    current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeMarker]);

  return (
    <>
      <ScrollContainer
        innerRef={scrollRef}
        onScroll={debounce(() => onScrollList())}
        data-testid={testId}
        className={classes.root}
      >
        {data.map((item) => {
          return (
            <div className={classes.card} key={uuidv4()} ref={refs[item.id]}>
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
