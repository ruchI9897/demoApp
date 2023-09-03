import React, { useEffect, useRef, useState } from "react";
import "../styles/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MenuItem, {HiddenMenuItem} from "../MenuItem";

function Menu() {
  const menuItems = ['Home', 'Electronics', 'Books', 'Music', 'Movies', 'Clothing', 'Games', 'Furniture', 'Travel', 'Botanical', 'Category Name'];
  const menuRef = useRef(null);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showHiddenItems, setShowHiddenItems] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      const availableSpace = menuRef.current.offsetWidth;
      let totalWidth = 0;
      const itemsToShow = [];
      const itemsToHide = [];

      menuItems.forEach((item) => {
        const itemWidth = getTextWidth(item) + 40;

        if (totalWidth + itemWidth + 60 <= availableSpace) {
          itemsToShow.push(item);
          totalWidth += itemWidth;
        } else {
          itemsToHide.push(item);
        }
      });

      setDisplayedItems(itemsToShow);
      setHiddenItems(itemsToHide);
    }
  }, [windowWidth]);

  const getTextWidth = (text) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '16px Arial';
    const width = context.measureText(text).width;
    return width;
  };

  const showMoreItems = () => {
    if(!showHiddenItems)
        setShowHiddenItems(true)
    else
        setShowHiddenItems(false)
  }

  return (
    <div className="menu-container">
      <div className="menu">
        <div>
          <h1 className="logo">E-COMM</h1>
        </div>
        <div ref={menuRef} className="menu-items">
          {displayedItems.map((item, index) => (
            <MenuItem key={index} index={index} item={item} />
          ))}
          {hiddenItems.length > 0 && <div className="menu-item-container"><button className="more-button" onClick={showMoreItems}>MORE { showHiddenItems ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</button></div>}
          {
            showHiddenItems && 
            <div className="more-items">
                {hiddenItems.map((item, index) => (
                        <HiddenMenuItem key={index} index={index} item={item} />
                ))}
            </div>
          }
        </div>
        <div>
          <div className="search-box">
            <FontAwesomeIcon icon={faMagnifyingGlass} color={'grey'} />
            <input type={'text'} className="search-input" placeholder="Seach Something" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
