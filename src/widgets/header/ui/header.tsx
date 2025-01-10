import PromoHeader from "./promo-header";
import HeaderNav from "./header-nav";
const Header = () => {
  return (
    <header>
      <PromoHeader />
      <div className={"bg-bgHeader top-0 py-4 sticky w-full z-50"}>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
