import clsx from "clsx";
import React from "react";

import Button from "@/components/Button";
import { IBase } from "@/types";

import useStyles from "./Card.styles";
import { CardProps } from "./Card.types";

const Card: React.FC<CardProps & IBase> = ({
  testId,
  style,
  className,
  info,
  onClickBook,
  onClickCard,
}: CardProps & IBase) => {
  const classes = useStyles();

  return (
    <>
      <div
        data-testid={testId}
        style={style}
        className={clsx(classes.root, className)}
        onClick={() => {
          onClickCard(info);
        }}
      >
        <div className={classes.infoWrapper}>
          <div className={classes.infoImg}>
            <img
              className={classes.img}
              src={`https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768`}
            />
          </div>
          <div className={classes.info}>
            <span style={{ fontWeight: "bold" }}>{info.title}</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "bold",
                color: "#878585",
              }}
            >
              {info.distance}
            </span>
            <div className={classes.filler}></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                £{info.price}
              </span>
              <span style={{ fontSize: "13px", color: "darkgray" }}>
                {info.description}
              </span>
            </div>
          </div>
        </div>
        <div>
          <Button wide onClick={onClickBook} label="Book" />
        </div>
      </div>
    </>
  );
};

export default Card;
