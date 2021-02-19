import data from "../../data/data";
import ContentListItem from "./components/ContentListItem.jsx";

const Content = () => {
  return (
    <section className="content">
      <div className="content__title">
        <p>Featured APIs of this week</p>
      </div>
      <div className="content__list">
        {data.map((item,index) => {
          return <ContentListItem item={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Content;
