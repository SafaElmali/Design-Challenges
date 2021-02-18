import * as Icons from "./icons";

const Header = () => {
  return (
    <section class="header">
      <div class="header__title">
        <p>
          A collective list of free APIs for use in software and web
          development.
        </p>
        <div class="header__input-wrapper">
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
