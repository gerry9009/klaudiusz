import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card.component";
import { cards_container, card_list } from "../styles/cardList.module.css";

const CardList = ({ pages }) => {
  return (
    <div className={cards_container}>
      <div className={card_list}>
        {pages.map((page) => {
          return <Card page={page} key={uuidv4()} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
