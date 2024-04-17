import React, {ReactElement, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CardPack.css';
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {GoldContext} from "../../Main/Main";

interface CardPackProps {
  price: number;
  onPurchase: (price: number) => void;
}

const CardPack = (props: CardPackProps): ReactElement => {
  const {price, onPurchase} = props;

  const gold = useContext(GoldContext);

  return (
    <button
      className="CardPack"
      onClick={() => {
        if (price <= gold) {
          onPurchase(price)
        }
      }}
    >
      <p className="CardPack-cost">
        <FontAwesomeIcon icon={faCoins} />
        {price}
      </p>
    </button>
  );
}

export default CardPack;
