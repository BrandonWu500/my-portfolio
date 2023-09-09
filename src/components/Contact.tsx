import Image from 'next/image';

import SectionTitle from '@/components/SectionTitle';
import { mySocialLinks } from '@/constants/data';

type Props = {};
const Contact = (props: Props) => {
  return (
    <div
      id="contact"
      className="w-screen bg-neutral-900 px-8 py-4 text-neutral-50"
    >
      <SectionTitle title="Contact Me" />
      <div className="mx-auto flex max-w-[250px] flex-col items-center gap-8 font-body">
        <p className="font-medium">
          The best way to reach me is to send me an email.
        </p>
        <div className="flex items-center gap-3">
          <Image src={mySocialLinks.email.icon} alt="mail icon" />
          <p className="font-semibold">brandonwu500@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
