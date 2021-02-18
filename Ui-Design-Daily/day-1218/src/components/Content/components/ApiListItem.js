import * as Icons from "../../icons";

const ApiListItem = ({ item }) => {
  return (
    <div class="content__list-item">
      <div class="a">
        <div class="item__logo">{item.src}</div>
        <div class="item__detail">
          <p class="item__title">{item.title}</p>
          <p class="item__category">{item.category}</p>
          <p class="item__info">{item.info}</p>
        </div>
      </div>
      <div class="b">
        <button class="btn bookmark__btn">
          <Icons.Bookmark />
          Bookmark
        </button>
        <button class="btn docs__btn">
          API docs
          <Icons.Arrow />
        </button>
      </div>
    </div>
  );
};

export default ApiListItem;
