import React, {ReactElement, useState} from 'react';
import './RewardsModal.css';
import {Item} from "../../items";
import FlippableShard from "./FlippableShard";

interface RewardsModalProps {
  onClose: () => void;
  rewards: Item[];
}

const RewardsModal = (props: RewardsModalProps): ReactElement => {
  const {onClose, rewards} = props;

  const [cardsFlipped, setCardsFlipped] = useState(rewards.map(() => false));
  const [allCardsFlipped, setAllCardsFlipped] = useState(false);

  const handleFlip = (index: number) => {
    if (index < cardsFlipped.length && !cardsFlipped[index]) {
      const updatedCardsFlipped = cardsFlipped;
      updatedCardsFlipped[index] = true;

      // If all cards are flipped
      if (cardsFlipped.reduce((acc, flipped) => acc && flipped, true)) {
        setAllCardsFlipped(true);
      }
      setCardsFlipped(updatedCardsFlipped);
    }
  }

  return (
    <main className="RewardsModal">
      <ul className="RewardsModal-list">
        {rewards.map((reward, index) =>
          <FlippableShard
            key={index}
            itemName={reward.name}
            image={reward.image}
            onFlip={() => handleFlip(index)}
          />
        )}
      </ul>
      <button
        className="RewardsModal-claim"
        onClick={onClose}
        disabled={!allCardsFlipped}
      >
        Claim Rewards
      </button>
    </main>
  );
}

export default RewardsModal;
