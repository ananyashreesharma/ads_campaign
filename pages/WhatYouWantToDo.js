import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const WhatYouWantToDo = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/choose-product");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full h-[900px] overflow-hidden text-left text-sm text-gray-500 font-eudoxus-sans">
      <b className="absolute top-[calc(50%_-_5234px)] left-[2498px] text-2xl tracking-[10px] leading-[32px] uppercase font-libertinus-serif text-black">
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
          src="../vector3.svg"
        />
        <img
          className="absolute h-[15.48%] w-[15.35%] top-[19.78%] right-[19.7%] bottom-[64.74%] left-[64.95%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector4.svg"
        />
      </Link>
      <Form.Check className="absolute top-[-8px] left-[82px]" type="radio" />
      <div className="absolute top-[20px] left-[1174px] w-[179px] h-9 text-base text-steelblue">
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
          src="../group-58864.svg"
        />
      </div>
      <img
        className="absolute top-[28.25px] left-[1368.25px] w-[21.5px] h-[21.5px]"
        alt=""
        src="../group-166334.svg"
      />
      <img
        className="absolute top-[29px] left-[1138px] w-5 h-5"
        alt=""
        src="../vuesaxlinearnotification4.svg"
      />
      <div className="absolute top-[112px] left-[132px] w-64 h-[62px] text-2xl text-black">
        <b className="absolute top-[0px] left-[0px] leading-[32px]">
          Your Ad Campaign
        </b>
        <div className="absolute top-[30px] left-[0px] text-xl leading-[32px] text-gray-600">
          Launch your ad in just 4 easy steps
        </div>
      </div>
      <div className="absolute top-[338px] left-[132px] rounded-base bg-white box-border w-[1258px] h-[374px] border-[1px] border-solid border-lavender" />
      <Button
        className="w-[237px] absolute top-[736px] left-[1152px] cursor-pointer"
        variant="primary"
        onClick={onGroupButtonClick}
      >
        Continue
      </Button>
      <b className="absolute top-[357px] left-[164px] text-xl leading-[32px] text-black">
        What you want to do?
      </b>
      <img
        className="absolute top-[393.25px] left-[163.25px] w-[1195.5px] h-[1.5px]"
        alt=""
        src="../vector-16.svg"
      />
      <Form.Check className="absolute top-[418px] left-[164px]" type="radio" />
      <Form.Check className="absolute top-[418px] left-[565px]" type="radio" />
      <Form.Check className="absolute top-[510px] left-[162px]" type="radio" />
      <Form.Check className="absolute top-[602px] left-[162px]" type="radio" />
      <Form.Check className="absolute top-[510px] left-[565px]" type="radio" />
      <Form.Check className="absolute top-[602px] left-[565px]" type="radio" />
      <Form.Check className="absolute top-[510px] left-[966px]" type="radio" />
      <Form.Check className="absolute top-[602px] left-[966px]" type="radio" />
      <Form.Check className="absolute top-[418px] left-[966px]" type="radio" />
      <div className="absolute top-[437px] left-[225px] w-[293px] h-[41px] text-xl text-gray-200">
        <div className="absolute top-[0px] left-[0px] tracking-[-0.02em] font-medium">
          Get Leads as calls
        </div>
        <div className="absolute top-[25px] left-[0px] text-sm tracking-[-0.02em] text-gray-400">
          Reach broad audience and get leads through calls
        </div>
      </div>
      <div className="absolute top-[448px] left-[624px] w-[251px] h-[21px]">
        <div className="absolute top-[5px] left-[0px] tracking-[-0.02em]">
          Get more FB messages from Leads
        </div>
        <div className="absolute top-[0px] left-[0px] text-xl tracking-[-0.02em] text-gray-200">
          Get Leads as Facebook messages
        </div>
      </div>
      <div className="absolute top-[528px] left-[225px] w-[214px] h-[41px]">
        <div className="absolute top-[25px] left-[0px] tracking-[-0.02em]">
          Encourage customers to take action
        </div>
        <div className="absolute top-[0px] left-[0px] text-xl tracking-[-0.02em] text-gray-200">
          Get Customer Leads
        </div>
      </div>
      <div className="absolute top-[621px] left-[225px] w-[302px] h-[41px]">
        <div className="absolute top-[25px] left-[0px] tracking-[-0.02em]">{`Drive visits to local stores, restaurants & Dealerships`}</div>
        <div className="absolute top-[0px] left-[0px] text-xl tracking-[-0.02em] text-gray-200">
          Increase Live store traffic
        </div>
      </div>
      <div className="absolute top-[528px] left-[628px] w-[293px] h-[41px]">
        <div className="absolute top-[25px] left-[0px] tracking-[-0.02em]">{`Increase organic views by obtaining user attention `}</div>
        <div className="absolute top-[0px] left-[0px] text-xl tracking-[-0.02em] text-gray-200">
          Get more youtube views
        </div>
      </div>
      <div className="absolute top-[621px] left-[628px] w-[247px] h-[41px]">
        <div className="absolute top-[25px] left-[0px] tracking-[-0.02em]">
          Get more installs, interactions for your app
        </div>
        <div className="absolute top-[0px] left-[0px] text-xl tracking-[-0.02em] text-gray-200">
          Increase your App installs
        </div>
      </div>
      <div className="absolute top-[528px] left-[1029px] w-[237px] h-[41px]">
        <div className="absolute top-[25px] left-[0px] tracking-[-0.02em]">
          Get the right people to visit your website
        </div>
        <div className="absolute top-[0px] left-[0px] text-xl tracking-[-0.02em] text-gray-200">
          Get more website traffic
        </div>
      </div>
      <div className="absolute top-[621px] left-[1029px] w-[305px] h-[41px]">
        <div className="absolute top-[25px] left-[0px] tracking-[-0.02em]">
          Drive the sales of your catalogue and get more leads
        </div>
        <div className="absolute top-[0px] left-[0px] text-xl tracking-[-0.02em] text-gray-200">
          Increase the catalogue sales
        </div>
      </div>
      <div className="absolute top-[436px] left-[1029px] w-[246px] h-[41px]">
        <div className="absolute top-[25px] left-[0px] tracking-[-0.02em]">
          Encourage customers to follow your page
        </div>
        <div className="absolute top-[0px] left-[0px] text-xl tracking-[-0.02em] text-gray-200">
          Increase page followers
        </div>
      </div>
      <div className="absolute top-[152px] left-[0px] w-[82px] h-[257px] text-3xs text-white">
        <div className="absolute top-[18px] left-[28px] leading-[32px]">
          Home
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[33px] w-[21px] h-[21px]"
          to="/"
        >
          <Link
            className="cursor-pointer [text-decoration:none] absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
            to="/"
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vuesaxlinearhouse.svg"
            />
          </Link>
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[140px] left-[21px] w-11 h-12 text-[inherit]"
          to="/"
        >
          <div className="absolute top-[16px] left-[0px] leading-[32px]">
            Products
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[10px] w-[21px] h-[21px]"
            to="/choose-product"
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vuesaxoutlinebag.svg"
            />
          </Link>
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[211px] left-[17px] w-[53px] h-[46px] text-[inherit]"
          to="/"
        >
          <div className="absolute top-[14px] left-[0px] leading-[32px]">
            Customers
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[16px] w-[21px] h-[21px]"
            to="/choose-product"
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vuesaxoutlineprofile2user.svg"
            />
          </Link>
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
      <div className="absolute top-[358px] left-[341px] text-base leading-[32px] text-gray-600">
        (Step 1 of 4)
      </div>
      <img
        className="absolute top-[247.36px] left-[223px] w-[1108px] h-[3px]"
        alt=""
        src="../vector-201.svg"
      />
      <img
        className="absolute top-[242.36px] left-[189.5px] w-[274px] h-[13px]"
        alt=""
        src="../vector-213.svg"
      />
      <div className="absolute top-[214px] left-[1262px] w-[80.19px] h-[91.64px] text-base text-lightsteelblue">
        <div className="absolute top-[72.9px] left-[0px] tracking-[-0.02em] inline-block w-[80.19px] h-[18.75px]">
          Ready to go
        </div>
        <img
          className="absolute top-[0px] left-[8.33px] w-[64.57px] h-[64.57px]"
          alt=""
          src="../group-172803.svg"
        />
      </div>
      <div className="absolute top-[216.08px] left-[526px] w-[107px] h-[88.82px] text-base text-lightsteelblue">
        <div className="absolute top-[70.82px] left-[0px] tracking-[-0.02em]">
          Choose product
        </div>
        <img
          className="absolute top-[0px] left-[21.9px] w-[64.57px] h-[64.57px]"
          alt=""
          src="../group-172783.svg"
        />
      </div>
      <div className="absolute top-[217.12px] left-[897.82px] w-[127.05px] h-[89.56px] text-base text-lightsteelblue">
        <div className="absolute top-[70.82px] left-[0px] tracking-[-0.02em] inline-block w-[127.05px] h-[18.75px]">
          Campaign settings
        </div>
        <img
          className="absolute top-[0px] left-[31.24px] w-[64.57px] h-[64.57px]"
          alt=""
          src="../group-172794.svg"
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
        src="../vuesaxboldlampcharge3.svg"
      />
      <img
        className="absolute top-[234px] left-[566px] w-7 h-7"
        alt=""
        src="../vuesaxboldbag3.svg"
      />
      <img
        className="absolute h-[2.83%] w-[1.77%] top-[49.81%] right-[57.38%] bottom-[47.36%] left-[40.85%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector30.svg"
      />
      <img
        className="absolute h-[2.73%] w-[1.71%] top-[59.73%] right-[29.58%] bottom-[37.54%] left-[68.71%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../group-17374.svg"
      />
      <img
        className="absolute top-[538px] left-[185px] w-6 h-6"
        alt=""
        src="../users.svg"
      />
      <img
        className="absolute top-[447px] left-[186px] w-[22px] h-[22px]"
        alt=""
        src="../phonecallreceive.svg"
      />
      <div className="absolute top-[478px] left-[942px] w-[22px] h-[22px]" />
      <img
        className="absolute h-[2.83%] w-[1.77%] top-[49.47%] right-[29.46%] bottom-[47.69%] left-[68.77%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector31.svg"
      />
      <img
        className="absolute top-[538px] left-[589px] w-6 h-6"
        alt=""
        src="../eye.svg"
      />
      <img
        className="absolute h-[2.66%] w-[1.77%] top-[70.03%] right-[85.43%] bottom-[27.32%] left-[12.8%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../vector32.svg"
      />
      <img
        className="absolute top-[630.25px] left-[592.25px] w-[24.75px] h-[27.75px]"
        alt=""
        src="../group-17389.svg"
      />
      <img
        className="absolute top-[630px] left-[990px] w-6 h-6"
        alt=""
        src="../group-17377.svg"
      />
      <Button
        className="w-[265px] absolute top-[21px] left-[857px]"
        variant="outline-primary"
      >
        Free trial ends in 2 days
      </Button>
    </div>
  );
};

export default WhatYouWantToDo;
