import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ChooseProduct = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/cmapign-settings");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full h-[900px] overflow-hidden text-left text-base text-black font-eudoxus-sans">
      <b className="absolute top-[calc(50%_-_5234px)] left-[2498px] text-2xl tracking-[10px] leading-[32px] uppercase font-libertinus-serif">
        Scube
      </b>
      <div className="absolute top-[-5px] left-[0px] bg-gray-300 w-[82px] h-[949px]" />
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[46px] left-[19px] w-[46px] h-[46px] overflow-hidden"
        to="/"
      >
        <Link
          className="cursor-pointer [text-decoration:none] absolute h-[98.99%] w-[98.99%] top-[0.51%] right-[0.5%] bottom-[0.5%] left-[0.51%]"
          to="/"
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../group-2199.svg"
          />
        </Link>
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
      <Form.Check className="absolute top-[-8px] left-[82px]" type="radio" />
      <div className="absolute top-[20px] left-[1174px] w-[179px] h-9 text-steelblue">
        <div className="absolute top-[8px] left-[44px] w-[135px] h-[18px]">
          <div className="absolute top-[0px] left-[0px]">Mukund cake shop</div>
          <img
            className="absolute top-[9px] left-[130px] w-[5px] h-[4.5px]"
            alt=""
            src="../vector11.svg"
          />
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-9 h-9"
          alt=""
          src="../group-58863.svg"
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
      <div className="absolute top-[112px] left-[132px] w-64 h-[62px] text-2xl">
        <b className="absolute top-[0px] left-[0px] leading-[32px]">
          Your Ad Campaign
        </b>
        <div className="absolute top-[30px] left-[0px] text-xl leading-[32px] text-gray-600">
          Launch your ad in just 4 easy steps
        </div>
      </div>
      <div className="absolute top-[394px] left-[143px] rounded-base bg-white box-border w-[1261px] h-[365px] border-[1px] border-solid border-lavender" />
      <Button
        className="w-[237px] absolute top-[737px] left-[1152px] cursor-pointer"
        variant="primary"
        onClick={onGroupButtonClick}
      >
        Continue
      </Button>
      <b className="absolute top-[357px] left-[164px] text-xl leading-[32px]">
        Choose the Product
      </b>
      <img
        className="absolute top-[393.25px] left-[163.25px] w-[1195.5px] h-[1.5px]"
        alt=""
        src="../vector-16.svg"
      />
      <div className="absolute top-[152px] left-[0px] w-[82px] h-[257px] text-3xs text-white">
        <div className="absolute top-[18px] left-[28px] leading-[32px]">
          Home
        </div>
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
        <div className="absolute top-[140px] left-[21px] w-11 h-12">
          <div className="absolute top-[16px] left-[0px] leading-[32px]">
            Products
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[10px] w-[21px] h-[21px]"
            to="/"
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vuesaxoutlinebag1.svg"
            />
          </Link>
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[211px] left-[17px] w-[53px] h-[46px] text-[inherit]"
          to="/"
        >
          <div className="absolute top-[14px] left-[0px] leading-[32px]">
            Customers
          </div>
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
              src="../vuesaxboldvolumehigh1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[358px] left-[328px] leading-[32px] text-gray-600">
        (Step 2 of 4)
      </div>
      <img
        className="absolute top-[247.36px] left-[223px] w-[1108px] h-[3px]"
        alt=""
        src="../vector-201.svg"
      />
      <img
        className="absolute top-[242.5px] left-[189.5px] w-[637px] h-[13px]"
        alt=""
        src="../vector-212.svg"
      />
      <div className="absolute top-[214px] left-[1262px] w-[80.19px] h-[91.64px] text-lightsteelblue">
        <div className="absolute top-[72.9px] left-[0px] tracking-[-0.02em] inline-block w-[80.19px] h-[18.75px]">
          Ready to go
        </div>
        <img
          className="absolute top-[0px] left-[8.33px] w-[64.57px] h-[64.57px]"
          alt=""
          src="../group-172802.svg"
        />
      </div>
      <div className="absolute top-[216px] left-[519px] w-[122px] h-[90px] text-xl text-gray-200">
        <div className="absolute top-[70px] left-[0px] tracking-[-0.02em] font-medium">
          Choose product
        </div>
        <img
          className="absolute top-[0px] left-[30px] w-[62px] h-[62px]"
          alt=""
          src="../group-17278.svg"
        />
      </div>
      <div className="absolute top-[217.12px] left-[897.82px] w-[127.05px] h-[89.56px] text-lightsteelblue">
        <div className="absolute top-[70.82px] left-[0px] tracking-[-0.02em] inline-block w-[127.05px] h-[18.75px]">
          Campaign settings
        </div>
        <img
          className="absolute top-[0px] left-[31.24px] w-[64.57px] h-[64.57px]"
          alt=""
          src="../group-172793.svg"
        />
      </div>
      <div className="absolute top-[286px] left-[132px] text-xl tracking-[-0.02em] font-medium text-gray-200">
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
      <div className="absolute top-[435px] left-[489px] w-[846px] h-[223px]">
        <Form.Check className="absolute top-[189px] left-[0px]" type="radio" />
        <Form.Check className="absolute top-[5px] left-[0px]" type="radio" />
        <Form.Check
          className="absolute top-[183px] left-[809px]"
          type="radio"
          inline
        />
        <Form.Check className="absolute top-[5px] left-[809px]" type="radio" />
        <Form.Check
          className="absolute top-[184px] left-[403px]"
          type="radio"
        />
        <Form.Check className="absolute top-[93px] left-[403px]" type="radio" />
        <Form.Check className="absolute top-[91px] left-[809px]" type="radio" />
        <Form.Check className="absolute top-[0px] left-[403px]" type="radio" />
        <Form.Check className="absolute top-[91px] left-[1px]" type="radio" />
      </div>
      <div className="absolute top-[601px] left-[164px] rounded-base box-border w-[389px] h-20 border-[1.5px] border-solid border-whitesmoke-300" />
      <div className="absolute top-[509px] left-[565px] rounded-base box-border w-[389px] h-20 border-[1.5px] border-solid border-whitesmoke-300" />
      <div className="absolute top-[601px] left-[565px] rounded-base box-border w-[389px] h-20 border-[1.5px] border-solid border-whitesmoke-300" />
      <div className="absolute top-[509px] left-[966px] rounded-base box-border w-[389px] h-20 border-[1.5px] border-solid border-whitesmoke-300" />
      <div className="absolute top-[601px] left-[966px] rounded-base box-border w-[389px] h-20 border-[1.5px] border-solid border-whitesmoke-300" />
      <div className="absolute top-[417px] left-[966px] rounded-base box-border w-[389px] h-20 border-[1.5px] border-solid border-whitesmoke-300" />
      <div className="absolute top-[429px] left-[248px] text-lg leading-[32px] font-medium">
        Bluberry cake with raw toppings
      </div>
      <div className="absolute top-[521px] left-[248px] text-lg leading-[32px] font-medium">
        Ferro rocher cake
      </div>
      <div className="absolute top-[613px] left-[248px] text-lg leading-[32px] font-medium">
        Green cup cakes
      </div>
      <div className="absolute top-[521px] left-[649px] text-lg leading-[32px] font-medium">
        Custurd mixed with fruit cake
      </div>
      <div className="absolute top-[613px] left-[649px] text-lg leading-[32px] font-medium">
        Blueberry topping cakes
      </div>
      <div className="absolute top-[521px] left-[1050px] text-lg leading-[32px] font-medium">
        Best raw topping choco cake
      </div>
      <div className="absolute top-[613px] left-[1050px] text-lg leading-[32px] font-medium">
        Strawberry cakes with blueberry
      </div>
      <div className="absolute top-[429px] left-[649px] text-lg leading-[32px] font-medium">
        Chocolate truffle cake
      </div>
      <div className="absolute top-[429px] left-[1050px] text-lg leading-[32px] font-medium">
        Browine cake with fluffy cream
      </div>
      <div className="absolute top-[453px] left-[248px] leading-[32px] font-medium text-darkgray">
        Rs: 2,290
      </div>
      <div className="absolute top-[545px] left-[248px] leading-[32px] font-medium text-darkgray">
        Rs: 1,234
      </div>
      <div className="absolute top-[637px] left-[248px] leading-[32px] font-medium text-darkgray">
        Rs: 1,234
      </div>
      <div className="absolute top-[545px] left-[649px] leading-[32px] font-medium text-darkgray">
        Rs: 2.456
      </div>
      <div className="absolute top-[637px] left-[649px] leading-[32px] font-medium text-darkgray">
        Rs: 2.456
      </div>
      <div className="absolute top-[545px] left-[1050px] leading-[32px] font-medium text-darkgray">
        Rs: 2,345
      </div>
      <div className="absolute top-[637px] left-[1050px] leading-[32px] font-medium text-darkgray">
        Rs: 2,345
      </div>
      <div className="absolute top-[453px] left-[649px] leading-[32px] font-medium text-darkgray">
        Rs: 2,190
      </div>
      <div className="absolute top-[453px] left-[1050px] leading-[32px] font-medium text-darkgray">
        Rs: 1,222
      </div>
      <img
        className="absolute top-[430px] left-[177px] rounded-small w-[58px] h-[54px] object-cover"
        alt=""
        src="../unsplashs2jw81lfrg01@2x.png"
      />
      <img
        className="absolute top-[522px] left-[177px] rounded-small w-[58px] h-[54px] object-cover"
        alt=""
        src="../unsplash6iqplkqeae0@2x.png"
      />
      <img
        className="absolute top-[614px] left-[177px] rounded-small w-[58px] h-[54px] object-cover"
        alt=""
        src="../unsplashao09kk2ovb0@2x.png"
      />
      <img
        className="absolute top-[522px] left-[578px] rounded-small w-[58px] h-[54px] object-cover"
        alt=""
        src="../unsplashax-ljooywjy@2x.png"
      />
      <img
        className="absolute top-[614px] left-[578px] rounded-small w-[58px] h-[54px] object-cover"
        alt=""
        src="../unsplash1pjgja8u0s8@2x.png"
      />
      <img
        className="absolute top-[522px] left-[979px] rounded-small w-[58px] h-[54px] object-cover"
        alt=""
        src="../unsplashztpurmxu4aw@2x.png"
      />
      <img
        className="absolute top-[614px] left-[979px] rounded-small w-[58px] h-[54px] object-cover"
        alt=""
        src="../unsplash4rfvl3nngra@2x.png"
      />
      <img
        className="absolute top-[430px] left-[578px] rounded-small w-[58px] h-[54px] object-cover"
        alt=""
        src="../unsplashkpxsqugnexq1@2x.png"
      />
      <img
        className="absolute top-[431px] left-[979px] rounded-small w-[58px] h-[54px] object-cover"
        alt=""
        src="../unsplash5k5nc3agf1w1@2x.png"
      />
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
              src="../444-12.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseProduct;
