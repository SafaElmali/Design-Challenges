import data from "../../data/data";
import ApiListItem from "./components/ApiListItem";

const Content = () => {
  return (
    <section class="content">
      <div class="content__title">
        <p>Featured APIs of this week</p>
      </div>
      <div class="content__list">
        {data.map((item) => {
          return <ApiListItem item={item} />;
        })}
      </div>
    </section>
  );
};

export default Content;
