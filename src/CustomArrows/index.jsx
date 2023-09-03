import React from "react";
import "../styles/index.css";

function CustomArrows({items, currentIndex, next, previous}) {
  return (
    <div className="custom-container">
      <div>
        <button className="paginate-buttons" onClick={previous}>{'<'}</button>
      </div>
      <div className="dots-container">
        {
          items.map((ele, i) => {
            return(
              <div className="dot" style={{backgroundColor: currentIndex === i ? 'grey' : '#80808033'}}>
                </div>
            )
          })
        }
      </div>
      <div>
        <button className="paginate-buttons" onClick={next}>{'>'}</button>
      </div>
    </div>
  );
}

export default CustomArrows;
