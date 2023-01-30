import { useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControlLabel, Switch } from "@mui/material";
import {
  Form,
  Dropdown as BsDropdown,
  DropdownButton as BsDropdownButton,
  SplitButton as BsSplitButton,
  Button as BsButton,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onGroupButtonClick = useCallback(() => {
    navigate("/what-you-want-to-do");
  }, [navigate]);

  return (
    <div
      className="relative bg-ghostwhite w-full h-[825px] overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] text-left text-2xl text-black font-libertinus-serif"
      data-animate-on-scroll
    >
      <b className="absolute w-[calc(100%_-_1323px)] top-[calc(50%_-_5233.5px)] left-[2498px] tracking-[10px] leading-[32px] uppercase flex items-center">
        Scube
      </b>
      <nav className="absolute top-[-5px] left-[0px] bg-gray-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[82px] h-[949px]" />
      <div className="absolute top-[-8px] left-[82px] bg-white box-border w-[1373px] h-20 border-[1px] border-solid border-lavender" />
      <div className="absolute top-[-8px] left-[0px] w-[1434px] h-[899px] overflow-hidden text-base font-eudoxus-sans">
        <a className="[text-decoration:none] absolute top-[46px] left-[19px] w-[46px] h-[46px] overflow-hidden">
          <img
            className="absolute h-[98.99%] w-[98.99%] top-[0.51%] right-[0.5%] bottom-[0.5%] left-[0.51%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../group-2199.svg"
          />
          <img
            className="absolute h-[44.32%] w-[44.24%] top-[23.63%] right-[23.5%] bottom-[32.05%] left-[32.26%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector.svg"
          />
          <img
            className="absolute h-[15.82%] w-[15.91%] top-[63.99%] right-[63.97%] bottom-[20.19%] left-[20.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector1.svg"
          />
          <img
            className="absolute h-[11.61%] w-[18.71%] top-[38.94%] right-[61.59%] bottom-[49.45%] left-[19.7%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector2.svg"
          />
          <img
            className="absolute h-[18.27%] w-[11.4%] top-[61.96%] right-[39.14%] bottom-[19.77%] left-[49.46%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector3.svg"
          />
          <img
            className="absolute h-[15.48%] w-[15.35%] top-[19.78%] right-[19.7%] bottom-[64.74%] left-[64.95%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector4.svg"
          />
        </a>
        <b className="absolute top-[112px] left-[132px] text-2xl leading-[32px]">
          Your Campaigns
        </b>
        <div className="absolute top-[142px] left-[132px] text-xl leading-[32px] text-gray-600">{`Check the list of campigns you created `}</div>
        <div className="absolute top-[152px] left-[0px] w-[82px] h-[257px] text-3xs text-white">
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[18px] left-[28px] leading-[32px] text-[inherit]"
            to="/what-you-want-to-do"
          >
            Home
          </Link>
          <a className="[text-decoration:none] absolute top-[0px] left-[33px] w-[21px] h-[21px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vuesaxlinearhouse.svg"
            />
          </a>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[140px] left-[21px] w-11 h-12 text-[inherit]"
            to="/what-you-want-to-do"
          >
            <Link
              className="cursor-pointer [text-decoration:none] absolute top-[16px] left-[0px] leading-[32px] text-[inherit]"
              to="/what-you-want-to-do"
            >
              Products
            </Link>
            <img
              className="absolute top-[0px] left-[10px] w-[21px] h-[21px]"
              alt=""
              src="../vuesaxoutlinebag.svg"
            />
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[211px] left-[17px] w-[53px] h-[46px] text-[inherit]"
            to="/what-you-want-to-do"
          >
            <Link
              className="cursor-pointer [text-decoration:none] absolute top-[14px] left-[0px] leading-[32px] text-[inherit]"
              to="/what-you-want-to-do"
            >
              Customers
            </Link>
            <img
              className="absolute top-[0px] left-[16px] w-[21px] h-[21px]"
              alt=""
              src="../vuesaxoutlineprofile2user.svg"
            />
          </Link>
          <div className="absolute top-[62px] left-[0px] w-[82px] h-[58px]">
            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-royalblue-400 w-[82px] h-[58px]" />
            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-royalblue-100 w-[5px] h-[58px]" />
            <div className="absolute top-[8px] left-[18px] w-[50px] h-[47px]">
              <div className="absolute top-[15px] left-[0px] leading-[32px] font-medium">
                Campaign
              </div>
              <img
                className="absolute top-[0px] left-[15px] w-[21px] h-[21px]"
                alt=""
                src="../vuesaxboldvolumehigh.svg"
              />
            </div>
          </div>
        </div>
        <main className="absolute top-[200px] left-[160px] rounded-base bg-white box-border w-[1250px] h-[590px] border-[1px] border-solid border-lavender" />
        <FormControlLabel
          className="absolute top-[386px] left-[218px]"
          label=""
          control={<Switch color="primary" size="medium" />}
        />
        <div className="absolute top-[371px] left-[374px] leading-[32px] font-medium">
          Bluberry cake Campaign
        </div>
        <div className="absolute top-[388px] left-[374px] text-xs leading-[32px] text-gray-700">
          Created on 14 july
        </div>
        <div className="absolute top-[474px] left-[373px] text-xs leading-[32px] text-gray-700">
          Created on 20 Jan
        </div>
        <div className="absolute top-[560px] left-[373px] text-xs leading-[32px] text-gray-700">
          Created on 12 Jun
        </div>
        <div className="absolute top-[646px] left-[373px] text-xs leading-[32px] text-gray-700">
          Created on 28 feb
        </div>
        <div className="absolute top-[732px] left-[373px] text-xs leading-[32px] text-gray-700">
          Created on 10 Jul
        </div>
        <div className="absolute top-[452px] left-[373px] leading-[32px] font-medium">
          Chocolate cake campaign
        </div>
        <div className="absolute top-[538px] left-[374px] leading-[32px] font-medium">
          Browine cake campaign
        </div>
        <div className="absolute top-[624px] left-[374px] leading-[32px] font-medium">
          Pumpkin cake camapign
        </div>
        <div className="absolute top-[710px] left-[374px] leading-[32px] font-medium">
          Cup cakes campaign
        </div>
        <div className="absolute top-[376px] left-[851px] leading-[32px]">
          INR.3,400
        </div>
        <div className="absolute top-[376px] left-[957px] leading-[32px]">
          Chennai
        </div>
        <div className="absolute top-[462px] left-[957px] leading-[32px]">
          Coimbatore
        </div>
        <div className="absolute top-[546px] left-[957px] leading-[32px]">
          Erode
        </div>
        <div className="absolute top-[634px] left-[957px] leading-[32px]">
          Coimbatore
        </div>
        <div className="absolute top-[721px] left-[957px] leading-[32px]">
          Coimbatore
        </div>
        <div className="absolute top-[376px] left-[572px] leading-[32px]">
          25 jul 2020 - 01 Aug 2020
        </div>
        <div className="absolute top-[464px] left-[572px] leading-[32px]">
          25 jul 2020 - 01 Aug 2020
        </div>
        <div className="absolute top-[552px] left-[572px] leading-[32px]">
          25 jul 2020 - 01 Aug 2020
        </div>
        <div className="absolute top-[635px] left-[572px] leading-[32px]">
          25 jul 2020 - 01 Aug 2020
        </div>
        <div className="absolute top-[721px] left-[572px] leading-[32px]">
          25 jul 2020 - 01 Aug 2020
        </div>
        <div className="absolute top-[462px] left-[851px] leading-[32px]">
          INR.3,400
        </div>
        <div className="absolute top-[548px] left-[851px] leading-[32px]">
          INR.3,400
        </div>
        <div className="absolute top-[634px] left-[851px] leading-[32px]">
          INR.3,400
        </div>
        <div className="absolute top-[720px] left-[851px] leading-[32px]">
          INR.3,400
        </div>
        <Form.Check className="absolute top-[385px] left-[189px]" />
        <Form.Check className="absolute top-[471px] left-[189px]" />
        <Form.Check className="absolute top-[557px] left-[189px]" />
        <Form.Check className="absolute top-[643px] left-[189px]" />
        <Form.Check className="absolute top-[729px] left-[189px]" />
        <img
          className="absolute top-[366px] left-[274px] rounded-small w-[58px] h-[54px] object-cover"
          alt=""
          src="../unsplashs2jw81lfrg0@2x.png"
        />
        <img
          className="absolute top-[452px] left-[272px] rounded-small w-[58px] h-[54px] object-cover"
          alt=""
          src="../unsplashkpxsqugnexq@2x.png"
        />
        <img
          className="absolute top-[538px] left-[274px] rounded-small w-[58px] h-[54px] object-cover"
          alt=""
          src="../unsplash5k5nc3agf1w@2x.png"
        />
        <img
          className="absolute top-[624px] left-[272px] rounded-small w-[58px] h-[54px] object-cover"
          alt=""
          src="../unsplasht5kptbbk-e@2x.png"
        />
        <img
          className="absolute top-[710px] left-[274px] rounded-small w-[58px] h-[54px] object-cover"
          alt=""
          src="../unsplashnxkwln8y9qe@2x.png"
        />
        <img
          className="absolute top-[435.25px] left-[177.25px] w-[1168.5px] h-[1.5px]"
          alt=""
          src="../vector-17.svg"
        />
        <img
          className="absolute top-[521.25px] left-[177.25px] w-[1168.5px] h-[1.5px]"
          alt=""
          src="../vector-17.svg"
        />
        <img
          className="absolute top-[607.25px] left-[177.25px] w-[1168.5px] h-[1.5px]"
          alt=""
          src="../vector-17.svg"
        />
        <img
          className="absolute top-[693.25px] left-[177.25px] w-[1168.5px] h-[1.5px]"
          alt=""
          src="../vector-17.svg"
        />
        <img
          className="absolute top-[383px] left-[1264px] w-[21px] h-[21px]"
          alt=""
          src="../vuesaxlinearedit2.svg"
        />
        <img
          className="absolute top-[468px] left-[1264px] w-[21px] h-[21px]"
          alt=""
          src="../vuesaxlinearedit2.svg"
        />
        <img
          className="absolute top-[555px] left-[1264px] w-[21px] h-[21px]"
          alt=""
          src="../vuesaxlinearedit2.svg"
        />
        <img
          className="absolute top-[640px] left-[1264px] w-[21px] h-[21px]"
          alt=""
          src="../vuesaxlinearedit2.svg"
        />
        <img
          className="absolute top-[727px] left-[1264px] w-[21px] h-[21px]"
          alt=""
          src="../vuesaxlinearedit2.svg"
        />
        <img
          className="absolute top-[383px] left-[1303px] w-[21px] h-[21px]"
          alt=""
          src="../vuesaxlineartrash.svg"
        />
        <img
          className="absolute top-[468px] left-[1303px] w-[21px] h-[21px]"
          alt=""
          src="../vuesaxlineartrash.svg"
        />
        <img
          className="absolute top-[555px] left-[1303px] w-[21px] h-[21px]"
          alt=""
          src="../vuesaxlineartrash.svg"
        />
        <img
          className="absolute top-[640px] left-[1303px] w-[21px] h-[21px]"
          alt=""
          src="../vuesaxlineartrash.svg"
        />
        <img
          className="absolute top-[727px] left-[1303px] w-[21px] h-[21px]"
          alt=""
          src="../vuesaxlineartrash.svg"
        />
        <div className="absolute top-[232px] left-[210px] text-xl leading-[32px] text-gray-600">
          Search for the campaign
        </div>
        <div className="absolute top-[234px] left-[850px] text-xl leading-[32px] text-gray-600">
          Status:
        </div>
        <div className="absolute top-[225px] left-[615px] text-xl leading-[32px] text-gray-600">
          Platform:
        </div>
        <Form.Group className="w-[274px] [border:none] bg-[transparent] absolute top-[224px] left-[205px]">
          <Form.Control type="text" placeholder="Search for the campaign" />
        </Form.Group>
        <BsDropdownButton
          className="w-[121px] flex flex-col absolute top-[221px] left-[899px]"
          title="All Status"
          variant="primary"
          align="start"
          drop="down"
        >
          <BsDropdown.Item>All Status</BsDropdown.Item>
          <BsDropdown.Item>Live now</BsDropdown.Item>
          <BsDropdown.Item>Paused</BsDropdown.Item>
          <BsDropdown.Item>Exhausted</BsDropdown.Item>
        </BsDropdownButton>
        <BsDropdownButton
          className="w-[138px] flex flex-col absolute top-[222px] left-[693px]"
          title="All Platform"
          variant="primary"
          align="start"
          drop="down"
        >
          <BsDropdown.Item>All Platform</BsDropdown.Item>
          <BsDropdown.Item>Facebook</BsDropdown.Item>
          <BsDropdown.Item>Instagram</BsDropdown.Item>
          <BsDropdown.Item>Google</BsDropdown.Item>
          <BsDropdown.Item>Youtube</BsDropdown.Item>
        </BsDropdownButton>
        <BsDropdownButton
          className="w-[145px] flex flex-col absolute top-[226px] left-[1026px]"
          title="Last 30 days"
          variant="primary"
          align="start"
          drop="down"
        >
          <BsDropdown.Item>Last 30 days</BsDropdown.Item>
          <BsDropdown.Item>Last 15 Days</BsDropdown.Item>
          <BsDropdown.Item>Last 5 Days</BsDropdown.Item>
        </BsDropdownButton>
        <img
          className="absolute top-[237px] left-[178px] w-6 h-6"
          alt=""
          src="../vuesaxlinearsearchnormal.svg"
        />
        <div className="absolute top-[296px] left-[164px] rounded-base bg-whitesmoke-100 box-border w-[1191px] h-12 border-[1.5px] border-solid border-whitesmoke-400" />
        <div className="absolute top-[304px] left-[248px] leading-[32px] font-medium text-gray-600">{`Campaign `}</div>
        <div className="absolute top-[306px] left-[176px] leading-[32px] font-medium text-gray-600">
          On/Off
        </div>
        <div className="absolute top-[306px] left-[572px] leading-[32px] font-medium text-gray-600">
          Date Range
        </div>
        <div className="absolute top-[304px] left-[851px] leading-[32px] font-medium text-gray-600">
          Budget
        </div>
        <div className="absolute top-[304px] left-[957px] leading-[32px] font-medium text-gray-600">
          Location
        </div>
        <div className="absolute top-[304px] left-[1052px] leading-[32px] font-medium text-gray-600">
          Platform
        </div>
        <div className="absolute top-[304px] left-[1135px] leading-[32px] font-medium text-gray-600">
          Status
        </div>
        <div className="absolute top-[304px] left-[1265px] leading-[32px] font-medium text-gray-600">
          Actions
        </div>
        <BsButton
          className="w-[237px] absolute top-[113px] left-[954px] cursor-pointer"
          variant="primary"
          onClick={onGroupButtonClick}
        >
          Create new campaign
        </BsButton>
        <div className="absolute top-[464px] left-[1135px] w-[104px] h-[30px] text-goldenrod">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-cornsilk w-[104px] h-[30px]" />
          <div className="absolute top-[5px] left-[27px] font-medium">
            Paused
          </div>
        </div>
        <div className="absolute top-[548px] left-[1135px] w-[104px] h-[30px] text-tomato">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-mistyrose w-[104px] h-[30px]" />
          <div className="absolute top-[5px] left-[17px] font-medium">
            Exhausted
          </div>
        </div>
        <div className="absolute top-[378px] left-[1135px] w-[104px] h-[30px] text-darkgreen">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-honeydew w-[104px] h-[30px]" />
          <div className="absolute top-[5px] left-[23px] font-medium">
            Live now
          </div>
        </div>
        <div className="absolute top-[636px] left-[1135px] w-[104px] h-[30px] text-darkgreen">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-honeydew w-[104px] h-[30px]" />
          <div className="absolute top-[5px] left-[23px] font-medium">
            Live now
          </div>
        </div>
        <div className="absolute top-[722px] left-[1135px] w-[104px] h-[30px] text-darkgreen">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-honeydew w-[104px] h-[30px]" />
          <div className="absolute top-[5px] left-[23px] font-medium">
            Live now
          </div>
        </div>
        <div className="absolute top-[376px] left-[787px] leading-[32px]">
          300
        </div>
        <div className="absolute top-[463px] left-[787px] leading-[32px]">
          210
        </div>
        <div className="absolute top-[552px] left-[787px] leading-[32px]">
          123
        </div>
        <div className="absolute top-[632px] left-[787px] leading-[32px]">
          435
        </div>
        <div className="absolute top-[721px] left-[787px] leading-[32px]">
          123
        </div>
        <div className="absolute top-[304px] left-[785px] leading-[32px] font-medium text-gray-600">
          Clicks
        </div>
        <img
          className="absolute h-[2.44%] w-[1.53%] top-[42.33%] right-[24.17%] bottom-[55.22%] left-[74.31%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-2.svg"
        />
        <img
          className="absolute h-[2.44%] w-[1.53%] top-[51.89%] right-[24.17%] bottom-[45.67%] left-[74.31%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-17462.svg"
        />
        <img
          className="absolute h-[2.44%] w-[1.53%] top-[61.44%] right-[24.17%] bottom-[36.11%] left-[74.31%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-17463.svg"
        />
        <img
          className="absolute h-[2%] w-[1.78%] top-[71.22%] right-[23.92%] bottom-[26.78%] left-[74.31%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-17459.svg"
        />
        <img
          className="absolute h-[2.22%] w-[1.36%] top-[81%] right-[24.12%] bottom-[16.78%] left-[74.51%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../group-17458.svg"
        />
        <FormControlLabel
          className="absolute top-[560px] left-[218px]"
          label=""
          control={<Switch color="primary" size="medium" />}
        />
        <FormControlLabel
          className="absolute top-[647px] left-[218px]"
          label=""
          control={<Switch color="primary" size="medium" />}
        />
        <FormControlLabel
          className="absolute top-[734px] left-[224px]"
          label=""
          control={<Switch color="primary" size="medium" />}
        />
        <FormControlLabel
          className="absolute top-[473px] left-[223px]"
          label=""
          control={<Switch color="primary" size="medium" />}
        />
        <div className="absolute bottom-[822px] left-[82px] w-[1352px] overflow-hidden flex flex-row py-4 px-[62px] box-border items-center justify-end gap-[12px] text-xs text-gray-700 lg:flex-col lg:items-start lg:justify-start lg:pl-[62px] lg:box-border">
          <div className="relative w-[265px] h-[34px] shrink-0">
            <img
              className="absolute top-[8px] left-[245px] w-[21px] h-5"
              alt=""
              src="../vuesaxlineargift.svg"
            />
            <div className="absolute top-[0px] left-[0px] w-[225px] h-[34px]">
              <div className="absolute top-[0px] left-[0px] leading-[32px]">
                Free trial ends in 2 days
              </div>
              <iframe
                className="absolute top-[2px] left-[137px] w-[88px] h-8"
                src={`https://www.youtube.com/embed/8Bo7Z6f1C8M?rel=0&controls=0`}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
          <img
            className="relative w-5 h-5 shrink-0"
            alt=""
            src="../vuesaxlinearnotification.svg"
          />
          <div className="relative w-48 h-[39px] shrink-0 text-base text-steelblue">
            <div className="absolute top-[8.67px] left-[47.2px] w-[144.8px] h-[19.5px]">
              <div className="absolute top-[0px] left-[0px] inline-block w-[133.01px] h-[19.5px]">
                Mukund cake shop
              </div>
              <img
                className="absolute top-[9.75px] left-[139.44px] w-[5.36px] h-[4.88px]"
                alt=""
                src="../vector5.svg"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[38.61px] h-[39px]"
              alt=""
              src="../group-5886.svg"
            />
          </div>
          <img
            className="relative w-[21.5px] h-[21.5px] shrink-0"
            alt=""
            src="../group-16633.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
