import React, {ReactElement, useState} from 'react';
import './FlippableShard.css';
import Shard from "../../Shard/Shard";

interface FlippableShardProps {
  itemName: string;
  image: string;
  cardBackImage: string;
  onFlip: () => void;
}

const FlippableShard = (props: FlippableShardProps): ReactElement => {
  const {itemName, image, cardBackImage, onFlip} = props;

  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    onFlip();
    setFlipped(!flipped)
  }

  return (
    <div className='FlippableShard'>
      <Shard
        itemName={itemName}
        image={image}
        className={`FlippableShard-front ${flipped ? 'FlippableShard-front--flipped' : ''}`}
        onClick={handleFlip}
      />
      <Shard
        itemName=''
        type=''
        image={cardBackImage}
        hasInfo={false}
        className={`FlippableShard-back ${flipped ? 'FlippableShard-back--flipped' : ''}`}
        onClick={handleFlip}
      />
    </div>
  );
};

export default FlippableShard;
