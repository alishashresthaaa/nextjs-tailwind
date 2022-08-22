import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import {
  companyDetails,
  ContactDetailsType,
  footerServiceLinks,
  LinkTypes,
} from "./footer.data";

const FooterComponent = (props: any) => {
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-white">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between p-6 border-b border-gray-300">
        <div className="text-md">Get connected with us on social networks:</div>
        <div className="flex mt-4 lg:mt-0">
          <a
            target="_blank"
            href="https://facebook.com/"
            rel="noopener noreferrer"
            className="transition ease-in duration-700  hover:-translate-y-1 hover:text-sky-900"
          >
            <FaFacebook className="text-2xl mr-4 cursor-pointer" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/"
            rel="noopener noreferrer"
            className="transition ease-in duration-700  hover:-translate-y-1 hover:text-sky-600"
          >
            <FaTwitter className="text-2xl mr-4 cursor-pointer" />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/"
            rel="noopener noreferrer"
            className="transition ease-in duration-700  hover:-translate-y-1 hover:text-amber-900"
          >
            <FaInstagram className="text-2xl mr-4 cursor-pointer" />
          </a>
          <a
            target="_blank"
            href="https://titktok.com/"
            rel="noopener noreferrer"
            className="transition ease-in duration-700  hover:-translate-y-1 hover:text-red-800"
          >
            <FaTiktok className="text-2xl mr-4 cursor-pointer" />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/"
            rel="noopener noreferrer"
            className="transition ease-in duration-700  hover:-translate-y-1 hover:text-sky-600"
          >
            <FaLinkedinIn className="text-2xl mr-4 cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6  lg:max-w-7xl">
        {/* Footer Section */}
        <div className="py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Address */}
            <section>
              {companyDetails.map((item: ContactDetailsType, index: number) => {
                return (
                  <div key={index}>
                    <p className="uppercase font-semibold flex items-center justify-center md:justify-start mb-2">
                      {item.country}
                    </p>
                    {item.address.map(
                      (singleAddress: string, index: number) => {
                        return (
                          <p
                            className="flex items-center justify-center md:justify-start mb-2 "
                            key={index}
                          >
                            {singleAddress}
                          </p>
                        );
                      }
                    )}
                    <p className="flex items-center justify-center md:justify-start mb-4">
                      {item.phone}
                    </p>
                  </div>
                );
              })}
            </section>

            {/* Services */}
            <section>
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Services
              </h6>
              {footerServiceLinks.map((item: LinkTypes, index: number) => {
                return (
                  <p
                    className="mb-4 transition ease-in duration-700  hover:-translate-y-1 "
                    key={index}
                  >
                    <a href="#">{item.label}</a>
                  </p>
                );
              })}
            </section>

            {/* Developers */}
            <div>
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Hire Dedicated Developers
              </h6>
              {footerServiceLinks.map((item: LinkTypes, index: number) => {
                return (
                  <p
                    className="mb-4 transition ease-in duration-700  hover:-translate-y-1 "
                    key={index}
                  >
                    <a href="#">{item.label}</a>
                  </p>
                );
              })}
            </div>

            {/* Company */}
            <div>
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Quick Links
              </h6>
              {footerServiceLinks.map((item: LinkTypes, index: number) => {
                return (
                  <p
                    className="mb-4 transition ease-in duration-700  hover:-translate-y-1 "
                    key={index}
                  >
                    <a href="#">{item.label}</a>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Copyright section */}
      <div className="text-center p-6 bg-gray-200 text-gray-600  dark:bg-slate-900 dark:text-white">
        <span>© 2021 Copyright</span>
        <a
          className=" font-semibold mx-2"
          href="https://tailwind-elements.com/"
        >
          LogicaBeans
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
