import React from 'react';

const ShowSplits = (props) => (
  <li
    onClick={() => props.updateSplit(props.time)}
    className= { props.currentSplit === props.time ? "toggled" : "notToggled" }
    >{`${props.time}`}
  </li>
);

export default ShowSplits;
