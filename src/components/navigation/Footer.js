import { EnvelopeSimple, MapPin, Phone } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
// data
import { socialIconsSvg } from "../../data/svgData";
const Footer = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5 md:py-10 gap-6 border-b-[1px] border-gray">
        <div className="space-y-6">
          <img className="w-max mx-auto lg:mx-0" src={logo} alt="" />
          <p className="font-mulish font-normal text-gray text-center md:text-left text-sm md:text-base leading-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
          </p>
          <div className="flex justify-center items-center gap-[22px] w-max lg:mx-0 mx-auto">
            {socialIconsSvg.map((item, i) => {
              return (
                <a key={i} href={item.path} target="_blank" className="">
                  <p
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                    className=""
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-mulish font-bold text-base leading-[22px] text-primary text-center md:text-left mb-5 md:mb-10">
            Services
          </h3>
          <Link
            to="#"
            className="font-mulish font-normal text-sm md:text-base leading-5 text-cente text-[#888B96] mb-3 md:mb-[18px]"
          >
            Order Processing
          </Link>
          <Link
            to="#"
            className="font-mulish font-normal text-sm md:text-base leading-5 text-cente text-[#888B96] mb-3 md:mb-[18px]"
          >
            Inventory Quality Control (QC)
          </Link>
          <Link
            to="#"
            className="font-mulish font-normal text-sm md:text-base leading-5 text-cente text-[#888B96] mb-3 md:mb-[18px]"
          >
            Inventory Audit
          </Link>
          <Link
            to="#"
            className="font-mulish font-normal text-sm md:text-base leading-5 text-cente text-[#888B96] mb-3 md:mb-[18px]"
          >
            Marketing & Promotion
          </Link>
          <Link
            to="#"
            className="font-mulish font-normal text-sm md:text-base leading-5 text-cente text-[#888B96] mb-3 md:mb-[18px]"
          >
            Return Inventory Management
          </Link>
          <Link
            to="#"
            className="font-mulish font-normal text-sm md:text-base leading-5 text-cente text-[#888B96] mb-3 md:mb-[18px]"
          >
            Marketplace Solutions
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-mulish font-bold text-base leading-[22px] text-primary text-center md:text-left mb-5 md:mb-10">
            Company
          </h3>
          <Link
            to="#"
            className="font-mulish font-normal text-sm md:text-base leading-5 text-cente text-[#888B96] mb-3 md:mb-[18px]"
          >
            About
          </Link>
          <Link
            to="#"
            className="font-mulish font-normal text-sm md:text-base leading-5 text-cente text-[#888B96] mb-3 md:mb-[18px]"
          >
            Contact us
          </Link>
          <Link
            to="career"
            className="font-mulish font-normal text-sm md:text-base leading-5 text-cente text-[#888B96] mb-3 md:mb-[18px]"
          >
            Careers
          </Link>

          <Link
            to="#"
            className="font-mulish font-normal text-sm md:text-base leading-5 text-cente text-[#888B96] mb-3 md:mb-[18px]"
          >
            F&Q
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-mulish font-bold text-base leading-[22px] text-primary text-center md:text-left mb-5 md:mb-10">
            Contact us
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-[6px] mb-3 md:mb-[18px]">
            <i className="ph-envelope-simple text-xl w-max mx-auto lg:mx-0"></i>
            <EnvelopeSimple
              className="text-xl w-max mx-auto lg:mx-0 text-primary"
              size={20}
            />
            <a
              href="mailto:contact@company.com"
              className="font-mulish font-normal text-sm md:text-base leading-5 text-cente flex justify-center items-center text-[#888B96]"
            >
              contact@company.com
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-[6px] mb-3 md:mb-[18px]">
            <Phone
              className="text-xl w-max mx-auto lg:mx-0 text-primary"
              size={20}
            />
            <Link
              href="tel:(414) 687 - 5892"
              className="font-mulish font-normal text-sm md:text-base leading-5 text-cente flex justify-center items-center text-[#888B96]"
            >
              (414) 687 - 5892
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-[6px] mb-3 md:mb-[18px]">
            <MapPin
              className="text-xl w-max mx-auto lg:mx-0 text-primary"
              size={20}
            />
            <p className="font-mulish font-normal text-sm md:text-base leading-5 text-cente flex justify-center items-center text-[#888B96]">
              794 Mcallister St <br />
              Knoxville, TN
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start py-5 md:py-10">
        <div className="w-max mx-auto md:mx-0 font-mulish font-normal text-sm md:text-lg leading-[30px] text-gray">
          <p>Copyright &copy; 2022 Pickme</p>
        </div>
        <div className="flex flex-wrap divide-x- font-mulish font-normal text-sm md:text-lg text-center  gap- mt-2 md:mt-0">
          <div className="px-1 text-gray">
            <Link to="/legal" className="rightBord">
              All Rights Reserved
            </Link>{" "}
            |
          </div>
          <div className="px-1 text-gray">
            <Link to="/legal" className="border-b">
              Terms and Conditions
            </Link>{" "}
            |
          </div>
          <div className="px-1 text-gray">
            <Link to="/legal" className="border-b">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
