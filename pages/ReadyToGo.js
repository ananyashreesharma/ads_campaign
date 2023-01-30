import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ChangeImgs from "../components/ChangeImgs";
import PortalPopup from "../components/PortalPopup";
import ChangeTxt from "../components/ChangeTxt";

const ReadyToGo = () => {
  const [isChangeImgsPopupOpen, setChangeImgsPopupOpen] = useState(false);
  const [isChangeTxtPopupOpen, setChangeTxtPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openChangeImgsPopup = useCallback(() => {
    setChangeImgsPopupOpen(true);
  }, []);

  const closeChangeImgsPopup = useCallback(() => {
    setChangeImgsPopupOpen(false);
  }, []);

  const openChangeTxtPopup = useCallback(() => {
    setChangeTxtPopupOpen(true);
  }, []);

  const closeChangeTxtPopup = useCallback(() => {
    setChangeTxtPopupOpen(false);
  }, []);

  const onGroupButton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="relative bg-ghostwhite w-full h-[928px] overflow-hidden text-left text-xl text-black font-eudoxus-sans">
        <b className="absolute top-[calc(50%_-_5234px)] left-[2498px] text-2xl tracking-[10px] leading-[32px] uppercase font-libertinus-serif">
          Scube
        </b>
        <div className="absolute top-[-5px] left-[0px] bg-gray-300 w-[82px] h-[949px]" />
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[46px] left-[19px] w-[46px] h-[46px] overflow-hidden"
          to="/"
        >
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
            src="../vector9.svg"
          />
          <img
            className="absolute h-[15.48%] w-[15.35%] top-[19.78%] right-[19.7%] bottom-[64.74%] left-[64.95%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector10.svg"
          />
        </Link>
        <div className="absolute top-[-8px] left-[82px] bg-white box-border w-[1373px] h-20 border-[1px] border-solid border-lavender" />
        <div className="absolute top-[20px] left-[1174px] w-[179px] h-9 text-base text-steelblue">
          <div className="absolute top-[8px] left-[44px] w-[135px] h-[18px]">
            <div className="absolute top-[0px] left-[0px]">
              Mukund cake shop
            </div>
            <img
              className="absolute top-[9px] left-[130px] w-[5px] h-[4.5px]"
              alt=""
              src="../vector11.svg"
            />
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-9 h-9"
            alt=""
            src="../group-58861.svg"
          />
        </div>
        <img
          className="absolute top-[28.25px] left-[1368.25px] w-[21.5px] h-[21.5px]"
          alt=""
          src="../group-166331.svg"
        />
        <img
          className="absolute top-[29px] left-[1138px] w-5 h-5"
          alt=""
          src="../vuesaxlinearnotification1.svg"
        />
        <b className="absolute top-[112px] left-[132px] text-2xl leading-[32px]">
          Your Ad Campaign
        </b>
        <div className="absolute top-[142px] left-[132px] leading-[32px] text-gray-600">
          Launch your ad in just 3 easy steps
        </div>
        <div className="absolute top-[344px] left-[132px] rounded-base bg-white box-border w-[1258px] h-[480px] border-[1px] border-solid border-lavender" />
        <section className="absolute top-[427.51px] left-[164px] w-[288.94px] h-[366.49px] text-left text-base text-black font-gilroy-medium">
          <div className="absolute top-[366.49px] left-[288.94px] rounded-large box-border w-[288.94px] h-[366.49px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1.5px] border-solid border-royalblue-200" />
          <div className="absolute top-[19.12px] left-[19.12px] w-[250.7px] h-[275.13px]">
            <div className="absolute top-[53.11px] left-[0px] leading-[20px] inline-block w-[250.7px] h-[63.74px]">
              We are the best bakery around you. Please like my page to get
              updates on exciting offers and discounts
            </div>
            <div className="absolute top-[0px] left-[0px] w-[203.96px] h-[42.49px] text-xl text-darkblue font-gilroy-semibold">
              <div className="absolute top-[0px] left-[50.99px] leading-[23px] inline-block w-[152.97px] h-[24.43px]">
                Mukund Cake Shop
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[42.49px] h-[42.49px] object-cover"
                alt=""
                src="../unsplashiskck0kl210@2x.png"
              />
              <div className="absolute top-[21.25px] left-[50.99px] w-[63.74px] h-[21.25px] text-3xs text-gray-100 font-gilroy-medium">
                <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block w-[53.11px] h-[21.25px]">
                  Sponsored
                </div>
                <img
                  className="absolute top-[10.68px] left-[56.3px] w-[7.44px] h-[8.35px]"
                  alt=""
                  src="../path-38.svg"
                />
              </div>
            </div>
            <img
              className="absolute top-[127.47px] left-[0px] w-[250.7px] h-[147.66px] object-cover"
              alt=""
              src="../unsplash4cuz3ls1bci@2x.png"
            />
            <div className="absolute top-[239.01px] left-[0px] w-[250.7px] h-[36.12px] text-3xs text-dimgray-200 font-helvetica-neue">
              <img
                className="absolute top-[0px] left-[0px] w-[250.7px] h-[36.12px]"
                alt=""
                src="../rectangle-76.svg"
              />
              <div className="absolute top-[6.11px] left-[12.75px] w-[211.39px] h-[24.7px]">
                <div className="absolute top-[0px] left-[152.2px] w-[59.19px] h-[23.68px]">
                  <img
                    className="absolute top-[-0.04px] left-[-0.04px] w-[59.28px] h-[23.77px]"
                    alt=""
                    src="../rectangle-57.svg"
                  />
                  <div className="absolute top-[5.46px] left-[28.23px] font-medium inline-block w-[20.95px] h-[13.66px]">
                    Like
                  </div>
                  <img
                    className="absolute top-[5.88px] left-[10.05px] w-[11.55px] h-[11.55px]"
                    alt=""
                    src="../thumb.svg"
                  />
                </div>
                <div className="absolute top-[0.27px] left-[0px] text-2xs leading-[23px] font-gilroy-semibold text-darkblue inline-block w-[105.17px] h-[24.43px]">
                  Mukund Cake Shop
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute top-[428px] left-[466px] w-[289px] h-[316px] text-base font-gilroy-medium">
          <div className="absolute top-[316px] left-[289px] rounded-large box-border w-[289px] h-[316px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1.5px] border-solid border-whitesmoke-200" />
          <div className="absolute top-[18.63px] left-[18.81px] w-[250.7px] h-[275.13px]">
            <div className="absolute top-[53.11px] left-[0px] leading-[20px] inline-block w-[250.7px] h-[63.74px]">
              We are the best bakery around you. Please like my page to get
              updates on exciting offers and discounts
            </div>
            <div className="absolute top-[0px] left-[0px] w-[203.96px] h-[66.88px] text-xl text-darkblue font-gilroy-semibold">
              <div className="absolute top-[0px] left-[50.99px] leading-[23px] inline-block w-[152.97px] h-[24.43px]">
                Mukund Cake Shop
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[42.49px] h-[42.49px] object-cover"
                alt=""
                src="../unsplashiskck0kl2101@2x.png"
              />
              <div className="absolute top-[21.25px] left-[50.99px] w-[63.74px] h-[45.64px] text-3xs text-gray-100 font-gilroy-medium">
                <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block w-[53.11px] h-[21.25px]">
                  Sponsored
                </div>
                <img
                  className="absolute top-[36.26px] left-[56.3px] w-[7.44px] h-[9.37px]"
                  alt=""
                  src="../path-381.svg"
                />
              </div>
            </div>
            <img
              className="absolute top-[127.47px] left-[0px] w-[250.7px] h-[147.66px] object-cover"
              alt=""
              src="../unsplashpgm4sjt-bdq@2x.png"
            />
            <div className="absolute top-[239.01px] left-[0px] w-[250.7px] h-[36.12px] text-3xs text-dimgray-200 font-helvetica-neue">
              <img
                className="absolute top-[0px] left-[0px] w-[250.7px] h-[36.12px]"
                alt=""
                src="../rectangle-761.svg"
              />
              <div className="absolute top-[6.11px] left-[12.75px] w-[211.39px] h-[24.7px]">
                <div className="absolute top-[0px] left-[152.2px] w-[59.19px] h-[23.68px]">
                  <img
                    className="absolute top-[-0.04px] left-[-0.04px] w-[59.28px] h-[23.77px]"
                    alt=""
                    src="../rectangle-571.svg"
                  />
                  <div className="absolute top-[5.46px] left-[28.23px] font-medium inline-block w-[20.95px] h-[13.66px]">
                    Like
                  </div>
                  <img
                    className="absolute top-[5.88px] left-[10.05px] w-[11.55px] h-[11.55px]"
                    alt=""
                    src="../thumb1.svg"
                  />
                </div>
                <div className="absolute top-[0.27px] left-[0px] text-2xs leading-[23px] font-gilroy-semibold text-darkblue inline-block w-[105.17px] h-[24.43px]">
                  Mukund Cake Shop
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[428px] left-[767px] w-[289px] h-[316px] text-base font-gilroy-medium">
          <div className="absolute top-[316px] left-[289px] rounded-large box-border w-[289px] h-[316px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1.5px] border-solid border-whitesmoke-200" />
          <div className="absolute top-[18.52px] left-[19.49px] w-[250.7px] h-[273.54px]">
            <div className="absolute top-[52.81px] left-[0px] leading-[20px] inline-block w-[250.7px] h-[63.37px]">
              We are the best bakery around you. Please like my page to get
              updates on exciting offers and discounts
            </div>
            <div className="absolute top-[0px] left-[0px] w-[203.96px] h-[66.5px] text-xl text-darkblue font-gilroy-semibold">
              <div className="absolute top-[0px] left-[50.99px] leading-[23px] inline-block w-[152.97px] h-[24.29px]">
                Mukund Cake Shop
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[42.49px] h-[42.25px] object-cover"
                alt=""
                src="../unsplashiskck0kl2102@2x.png"
              />
              <div className="absolute top-[21.12px] left-[50.99px] w-[63.74px] h-[45.37px] text-3xs text-gray-100 font-gilroy-medium">
                <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block w-[53.11px] h-[21.12px]">
                  Sponsored
                </div>
                <img
                  className="absolute top-[36.06px] left-[56.3px] w-[7.44px] h-[9.32px]"
                  alt=""
                  src="../path-382.svg"
                />
              </div>
            </div>
            <img
              className="absolute top-[126.74px] left-[0px] w-[250.7px] h-[146.81px] object-cover"
              alt=""
              src="../unsplashvnm6-liirj0@2x.png"
            />
            <div className="absolute top-[237.63px] left-[0px] w-[250.7px] h-[35.91px] text-3xs text-dimgray-200 font-helvetica-neue">
              <img
                className="absolute top-[0px] left-[0px] w-[250.7px] h-[35.91px]"
                alt=""
                src="../rectangle-762.svg"
              />
              <div className="absolute top-[6.07px] left-[12.75px] w-[211.39px] h-[24.56px]">
                <div className="absolute top-[0px] left-[152.2px] w-[59.19px] h-[23.54px]">
                  <img
                    className="absolute top-[-0.05px] left-[-0.04px] w-[59.28px] h-[23.64px]"
                    alt=""
                    src="../rectangle-572.svg"
                  />
                  <div className="absolute top-[5.43px] left-[28.23px] font-medium inline-block w-[20.95px] h-[13.58px]">
                    Like
                  </div>
                  <img
                    className="absolute top-[5.85px] left-[10.05px] w-[11.55px] h-[11.49px]"
                    alt=""
                    src="../thumb2.svg"
                  />
                </div>
                <div className="absolute top-[0.27px] left-[0px] text-2xs leading-[23px] font-gilroy-semibold text-darkblue inline-block w-[105.17px] h-[24.29px]">
                  Mukund Cake Shop
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[428px] left-[1069px] w-[289px] h-[316px] text-base font-gilroy-medium">
          <div className="absolute top-[316px] left-[289px] rounded-large box-border w-[289px] h-[316px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1.5px] border-solid border-whitesmoke-200" />
          <div className="absolute top-[18.63px] left-[19.18px] w-[250.7px] h-[275.13px]">
            <div className="absolute top-[53.11px] left-[0px] leading-[20px] inline-block w-[250.7px] h-[63.74px]">
              We are the best bakery around you. Please like my page to get
              updates on exciting offers and discounts
            </div>
            <div className="absolute top-[0px] left-[0px] w-[203.96px] h-[66.88px] text-xl text-darkblue font-gilroy-semibold">
              <div className="absolute top-[0px] left-[50.99px] leading-[23px] inline-block w-[152.97px] h-[24.43px]">
                Mukund Cake Shop
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[42.49px] h-[42.49px] object-cover"
                alt=""
                src="../unsplashiskck0kl2103@2x.png"
              />
              <div className="absolute top-[21.25px] left-[50.99px] w-[63.74px] h-[45.64px] text-3xs text-gray-100 font-gilroy-medium">
                <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block w-[53.11px] h-[21.25px]">
                  Sponsored
                </div>
                <img
                  className="absolute top-[36.26px] left-[56.3px] w-[7.44px] h-[9.37px]"
                  alt=""
                  src="../path-383.svg"
                />
              </div>
            </div>
            <img
              className="absolute top-[127.47px] left-[0px] w-[250.7px] h-[147.66px] object-cover"
              alt=""
              src="../unsplashsxivqaksdfe@2x.png"
            />
            <div className="absolute top-[239.01px] left-[0px] w-[250.7px] h-[36.12px] text-3xs text-dimgray-200 font-helvetica-neue">
              <img
                className="absolute top-[0px] left-[0px] w-[250.7px] h-[36.12px]"
                alt=""
                src="../rectangle-763.svg"
              />
              <div className="absolute top-[6.11px] left-[12.75px] w-[211.39px] h-[24.7px]">
                <div className="absolute top-[0px] left-[152.2px] w-[59.19px] h-[23.68px]">
                  <img
                    className="absolute top-[-0.04px] left-[-0.04px] w-[59.28px] h-[23.77px]"
                    alt=""
                    src="../rectangle-573.svg"
                  />
                  <div className="absolute top-[5.46px] left-[28.23px] font-medium inline-block w-[20.95px] h-[13.66px]">
                    Like
                  </div>
                  <img
                    className="absolute top-[5.88px] left-[10.05px] w-[11.55px] h-[11.55px]"
                    alt=""
                    src="../thumb3.svg"
                  />
                </div>
                <div className="absolute top-[0.27px] left-[0px] text-2xs leading-[23px] font-gilroy-semibold text-darkblue inline-block w-[105.17px] h-[24.43px]">
                  Mukund Cake Shop
                </div>
              </div>
            </div>
          </div>
        </div>
        <b className="absolute top-[363px] left-[164px] leading-[32px]">
          Ready to go
        </b>
        <img
          className="absolute top-[399.25px] left-[163.25px] w-[1195.5px] h-[1.5px]"
          alt=""
          src="../vector-16.svg"
        />
        <img
          className="absolute top-[419px] left-[432px] w-[25px] h-[26px]"
          alt=""
          src="../vuesaxbulktickcircle1.svg"
        />
        <Button
          className="w-[121.09964752197266px] absolute top-[737.69px] left-[183.12px] cursor-pointer"
          variant="primary"
          onClick={openChangeImgsPopup}
        >
          Change image
        </Button>
        <Button
          className="w-[121.09964752197266px] absolute top-[737.69px] left-[312.72px] cursor-pointer"
          variant="primary"
          onClick={openChangeTxtPopup}
        >
          Edit text
        </Button>
        <Button
          className="w-[237px] absolute top-[848px] left-[1153px] cursor-pointer"
          variant="primary"
          onClick={onGroupButton2Click}
        >
          Start campaign
        </Button>
        <div className="absolute top-[152px] left-[0px] w-[82px] h-[257px] text-3xs text-white">
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[18px] left-[28px] leading-[32px] text-[inherit]"
            to="/"
          >
            Home
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[33px] w-[21px] h-[21px]"
            to="/"
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vuesaxlinearhouse.svg"
            />
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[140px] left-[21px] w-11 h-12 text-[inherit]"
            to="/"
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
              src="../vuesaxoutlinebag1.svg"
            />
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[211px] left-[17px] w-[53px] h-[46px] text-[inherit]"
            to="/"
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
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[62px] left-[0px] w-[82px] h-[58px] text-[inherit]"
            to="/"
          >
            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-royalblue-400 w-[82px] h-[58px]" />
            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-royalblue-100 w-[5px] h-[58px]" />
            <div className="absolute top-[8px] left-[18px] w-[50px] h-[47px]">
              <div className="absolute top-[15px] left-[0px] leading-[32px] font-medium">
                Campaign
              </div>
              <img
                className="absolute top-[0px] left-[15px] w-[21px] h-[21px]"
                alt=""
                src="../vuesaxboldvolumehigh1.svg"
              />
            </div>
          </Link>
        </div>
        <img
          className="absolute top-[247.36px] left-[223px] w-[1108px] h-[3px]"
          alt=""
          src="../vector-201.svg"
        />
        <img
          className="absolute top-[242.5px] left-[189.5px] w-[1119px] h-[13px]"
          alt=""
          src="../vector-21.svg"
        />
        <div className="absolute top-[214px] left-[1262px] w-[89px] h-[93px] text-gray-200">
          <div className="absolute top-[73px] left-[0px] tracking-[-0.02em] font-medium">
            Ready to go
          </div>
          <img
            className="absolute top-[0px] left-[12px] w-[64.57px] h-[64.57px]"
            alt=""
            src="../group-17280.svg"
          />
        </div>
        <div className="absolute top-[216px] left-[519px] w-[122px] h-[90px] text-gray-200">
          <div className="absolute top-[70px] left-[0px] tracking-[-0.02em] font-medium">
            Choose product
          </div>
          <img
            className="absolute top-[0px] left-[30px] w-[62px] h-[62px]"
            alt=""
            src="../group-17278.svg"
          />
        </div>
        <div className="absolute top-[216px] left-[891px] w-[140px] h-[91px] text-gray-200">
          <div className="absolute top-[71px] left-[0px] tracking-[-0.02em] font-medium">
            Campaign settings
          </div>
          <img
            className="absolute top-[0px] left-[39px] w-[62px] h-[62px]"
            alt=""
            src="../group-17279.svg"
          />
        </div>
        <div className="absolute top-[286px] left-[132px] tracking-[-0.02em] font-medium text-gray-200">
          What you want to do
        </div>
        <img
          className="absolute top-[219px] left-[172px] w-[62px] h-[62px]"
          alt=""
          src="../group-13830.svg"
        />
        <img
          className="absolute top-[235px] left-[189px] w-7 h-7"
          alt=""
          src="../vuesaxboldlampcharge.svg"
        />
        <img
          className="absolute top-[234px] left-[566px] w-7 h-7"
          alt=""
          src="../vuesaxboldbag.svg"
        />
        <div className="absolute top-[364px] left-[264px] text-base leading-[32px] text-gray-600">
          (Step 4 of 4)
        </div>
        <div className="absolute top-[21px] left-[857px] w-[265px] h-[34px] text-xs text-gray-700">
          <img
            className="absolute top-[8px] left-[245px] w-[21px] h-5"
            alt=""
            src="../vuesaxlineargift1.svg"
          />
          <div className="absolute top-[0px] left-[0px] w-[225px] h-[34px]">
            <div className="absolute top-[0px] left-[0px] leading-[32px]">
              Free trial ends in 2 days
            </div>
            <div className="absolute top-[2px] left-[137px] w-[88px] h-8 text-darkorange">
              <div className="absolute top-[0px] left-[0px] w-[88px] h-8">
                <div className="absolute top-[0px] left-[0px] w-[88px] h-8">
                  <div className="absolute top-[0px] left-[0px] rounded-small bg-orange w-[88px] h-8" />
                </div>
                <div className="absolute top-[8px] left-[31px] w-[49px] h-[15px]">
                  <div className="absolute top-[0px] left-[0px] w-[49px] h-[15px]">
                    <div className="absolute top-[0px] left-[0px] w-[49px] h-[15px]">
                      <div className="absolute top-[0px] left-[0px] font-medium">
                        Buy Plan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[7px] left-[10px] w-4 h-[15px] overflow-hidden"
                alt=""
                src="../444-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {isChangeImgsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangeImgsPopup}
        >
          <ChangeImgs onClose={closeChangeImgsPopup} />
        </PortalPopup>
      )}
      {isChangeTxtPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangeTxtPopup}
        >
          <ChangeTxt onClose={closeChangeTxtPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ReadyToGo;
