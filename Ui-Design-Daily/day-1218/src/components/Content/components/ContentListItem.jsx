import * as Icons from "../../icons";

const ContentListItem = ({ item }) => {
  return (
    <div className="content__item">
      <div className="content__item-body">
        <div className="item__logo">{item.src}</div>
        <div className="item__detail">
          <p className="item__title">{item.title}</p>
          <p className="item__category">{item.category}</p>
          <p className="item__info">{item.info}</p>
        </div>
      </div>
      <div className="content__item-footer">
        <button className="btn bookmark__btn">
          <Icons.Bookmark />
          <span>Bookmark</span>
        </button>
        <button className="btn docs__btn">
          API docs
          <Icons.Arrow />
        </button>
      </div>
    </div>
  );
};

export default ContentListItem;
