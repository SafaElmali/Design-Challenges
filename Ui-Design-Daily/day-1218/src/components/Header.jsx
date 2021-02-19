import * as Icons from "./icons";

const Header = () => {
  return (
    <section className="header">
      <div className="header__title">
        <p>
          A collective list of free APIs for use in software and web
          development.
        </p>
        <div className="header__input-wrapper">
          <input
            type="text"
            placeholder="Find development, games,images APIs"
          />
          <Icons.Search style={{ width: "1.5em" }} />
        </div>
      </div>
    </section>
  );
};

export default Header;
