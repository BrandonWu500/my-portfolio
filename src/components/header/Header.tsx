import Image from 'next/image';

import desktopLogo from '/public/desktop-logo.svg';
import mobileLogo from '/public/mobile-logo.svg';

type Props = {};
const Header = (props: Props) => {
  return (
    <div className="sticky top-0 w-screen bg-neutral-900 p-4 text-neutral-50">
      {/* MOBILE LOGO */}
      <Image src={mobileLogo} alt="logo" className="lg:hidden" />
      {/* DESKTOP LOGO */}
      <Image src={desktopLogo} alt="logo" className="hidden lg:block" />
    </div>
  );
};
export default Header;
