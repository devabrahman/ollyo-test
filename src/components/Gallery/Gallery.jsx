import React, { useState, memo, useEffect } from "react";
const Gallery = () => {
  const [imageArray, setImageArray] = useState([
    { id: " imgList01", url: "/assets/images/image-1.webp" },
    { id: " imgList02", url: "/assets/images/image-2.webp" },
    { id: " imgList03", url: "/assets/images/image-3.webp" },
    { id: " imgList04", url: "/assets/images/image-4.webp" },
    { id: " imgList05", url: "/assets/images/image-5.webp" },
    { id: " imgList06", url: "/assets/images/image-6.webp" },
    { id: " imgList07", url: "/assets/images/image-7.webp" },
    { id: " imgList08", url: "/assets/images/image-8.webp" },
    { id: " imgList09", url: "/assets/images/image-9.webp" },
    { id: " imgList10", url: "/assets/images/image-10.jpeg" },
    { id: " imgList11", url: "/assets/images/image-11.jpeg" },
  ]);
  const allGalleryId = [];
  const [selectItems, setSelectItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckAllItem, setIsCheckAllItem] = useState(false);

  const pushRemoveItem = (id) => {
    if (!selectItems.includes(id)) {
      setSelectItems((oldId) => [...oldId, id]);
    } else {
      const currentSelect = selectItems.filter((thumbId) => {
        return thumbId !== id;
      });
      setSelectItems(currentSelect);
    }
  };

  const checkAllItem = () => {
    if (!isCheckAllItem) {
      setSelectItems(allGalleryId);
      setIsCheckAllItem(true);
    } else {
      setIsCheckAllItem(false);
      setSelectItems([]);
    }
  };
  useEffect(() => {
    allGalleryId.map((id) => {
      if (!selectItems.includes(id)) {
        setIsCheckAllItem(false);
        return;
      }
    });
  }, [selectItems]);

  const deleteSelected = () => {
    setIsLoading(true);
    const remainImg = imageArray.filter(
      (imginfo) => !selectItems.includes(imginfo.id)
    );
    setImageArray(remainImg);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <form action="">
        <div className="select-item">
          <p className="select-file">
            <label htmlFor="allSelect">
              <input
                checked={isCheckAllItem}
                onChange={() => checkAllItem()}
                type="checkbox"
                id="allSelect"
              />{" "}
              {selectItems.length} Files Select
            </label>
          </p>
          <button
            className="btn"
            disabled={isLoading}
            onClick={() => deleteSelected()}
            type="button"
          >
            Delete File
          </button>
        </div>
        <ul className="gallery-list">
          {imageArray.map((item, i) => {
            const id = item.id;
            allGalleryId.push(id);
            return (
              <li key={i} className="gallery-item">
                <label htmlFor={id}>
                  <span
                    className={`overlay ${
                      selectItems.includes(id) ? `zindex` : ""
                    }`}
                  ></span>
                  <input
                    checked={selectItems.includes(id)}
                    type="checkbox"
                    onChange={() => pushRemoveItem(id)}
                    id={id}
                    className={selectItems.includes(id) ? `zindex` : ""}
                  />
                  <img src={item.url} alt="..." />
                </label>
              </li>
            );
          })}

          <li className="gallery-item add-img"></li>
        </ul>
      </form>
    </div>
  );
};

export default memo(Gallery);
