import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const ChangeImgs = ({ onClose }) => {
  return (
    <div className="relative w-[682px] h-[491px] overflow-hidden max-w-full max-h-full text-left text-xl text-black font-eudoxus-sans">
      <div className="absolute top-[0px] left-[0px] w-[682px] h-[491px]">
        <div className="absolute top-[0px] left-[0px] rounded-base bg-white w-[666px] h-[491px]" />
        <div
          className="absolute top-[13px] left-[627px] w-6 h-6 cursor-pointer"
          onClick={onClose}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vuesaxlinearclosecircle.svg"
          />
        </div>
        <b className="absolute top-[59px] left-[32px] text-2xl leading-[32px]">
          Change ad images
        </b>
        <div className="absolute top-[89px] left-[32px] leading-[32px] text-gray-600 flex items-center w-[650px]">{`search and select image from zocket library or upload from your device `}</div>
        <div className="absolute top-[152px] left-[32px] w-[602px] h-[213px]">
          <div className="absolute top-[9px] left-[43px] leading-[32px] text-gray-600 flex items-center w-[157px] h-[31.27px]">
            Search for the image
          </div>
          <div className="absolute top-[127.02px] left-[25px] leading-[32px] font-medium flex items-center w-[85px] h-[31.27px]">
            Doughnuts
          </div>
          <div className="absolute top-[127.02px] left-[164px] leading-[32px] font-medium flex items-center w-[70px] h-[31.27px]">
            Crackers
          </div>
          <div className="absolute top-[127.02px] left-[287px] leading-[32px] font-medium flex items-center w-[47px] h-[31.27px]">
            Bread
          </div>
          <div className="absolute top-[181.73px] left-[293px] leading-[32px] font-medium text-silver flex items-center w-[25px] h-[31.27px]">
            OR
          </div>
          <div className="absolute top-[127.02px] left-[387px] leading-[32px] font-medium flex items-center w-[99px] h-[31.27px]">{`Coffee & Tea`}</div>
          <Form.Group className="w-[559px] [border:none] bg-[transparent] absolute top-[0px] left-[43px]">
            <Form.Control type="text" placeholder="Search for the image" />
          </Form.Group>
          <a
            className="[text-decoration:none] absolute top-[64.49px] left-[0px] w-[93px] h-[43.97px] text-[inherit]"
            target="_blank"
          >
            <div className="absolute top-[6.84px] left-[26px] leading-[32px] font-medium flex items-center w-[41px] h-[31.27px]">
              Cake
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-base box-border w-[93px] h-[43.97px] border-[1.5px] border-solid border-whitesmoke-500" />
          </a>
          <a className="[text-decoration:none] absolute top-[120.18px] left-[0px] rounded-base box-border w-[131px] h-[43.97px] border-[1.5px] border-solid border-whitesmoke-500" />
          <a className="[text-decoration:none] absolute top-[120.18px] left-[143px] rounded-base box-border w-[111px] h-[43.97px] border-[1.5px] border-solid border-whitesmoke-500" />
          <a className="[text-decoration:none] absolute top-[120.18px] left-[266px] rounded-base box-border w-[88px] h-[43.97px] border-[1.5px] border-solid border-whitesmoke-500" />
          <a className="[text-decoration:none] absolute top-[120.18px] left-[366px] rounded-base box-border w-[139px] h-[43.97px] border-[1.5px] border-solid border-whitesmoke-500" />
          <a className="[text-decoration:none] absolute top-[64.49px] left-[105px] w-[127px] h-[43.97px] text-[inherit]">
            <div className="absolute top-[6.84px] left-[23px] leading-[32px] font-medium flex items-center w-[81px] h-[31.27px]">
              Chocolate
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-base box-border w-[127px] h-[43.97px] border-[1.5px] border-solid border-whitesmoke-500" />
          </a>
          <a className="[text-decoration:none] absolute top-[64.49px] left-[244px] w-[106px] h-[43.97px] text-[inherit]">
            <div className="absolute top-[6.84px] left-[21px] leading-[32px] font-medium flex items-center w-16 h-[31.27px]">
              Cookies
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-base box-border w-[106px] h-[43.97px] border-[1.5px] border-solid border-whitesmoke-500" />
          </a>
          <a className="[text-decoration:none] absolute top-[64.49px] left-[362px] w-[93px] h-[43.97px] text-[inherit]">
            <div className="absolute top-[6.84px] left-[16px] leading-[32px] font-medium flex items-center w-[61px] h-[31.27px]">
              Biscuits
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-base box-border w-[93px] h-[43.97px] border-[1.5px] border-solid border-whitesmoke-500" />
          </a>
          <a className="[text-decoration:none] absolute top-[64.49px] left-[467px] w-[103px] h-[43.97px] text-[inherit]">
            <div className="absolute top-[6.84px] left-[16px] leading-[32px] font-medium flex items-center w-[71px] h-[31.27px]">
              Pasteries
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-base box-border w-[103px] h-[43.97px] border-[1.5px] border-solid border-whitesmoke-500" />
          </a>
          <img
            className="absolute top-[12.7px] left-[14px] w-6 h-[23.45px]"
            alt=""
            src="../vuesaxlinearsearchnormal1.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[353.25px] left-[37.25px] w-[279.5px] h-[1.5px]"
        alt=""
        src="../vector-23.svg"
      />
      <img
        className="absolute top-[353.25px] left-[358.25px] w-[276.5px] h-[1.5px]"
        alt=""
        src="../vector-24.svg"
      />
      <input
        className="absolute top-[382px] left-[38px] w-[598px] h-[66px]"
        type="file"
      />
    </div>
  );
};

export default ChangeImgs;
