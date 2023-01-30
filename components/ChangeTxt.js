import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const ChangeTxt = ({ onClose }) => {
  return (
    <div className="relative w-[666px] h-[565px] overflow-hidden max-w-full max-h-full text-left text-base text-black font-eudoxus-sans">
      <div className="absolute top-[0px] left-[0px] w-[666px] h-[565px] text-2xl">
        <div className="absolute top-[0px] left-[0px] w-[666px] h-[565px]">
          <div className="absolute top-[0px] left-[0px] rounded-base bg-white w-[666px] h-[565px]" />
          <div className="absolute top-[13.78px] left-[627px] w-6 h-[25.44px]">
            <div
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] cursor-pointer"
              onClick={onClose}
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="../closecircle.svg"
              />
            </div>
          </div>
          <b className="absolute top-[62.54px] left-[32px] leading-[32px] flex items-center w-[179px] h-[33.92px]">
            Change ad Text
          </b>
          <div className="absolute top-[94.34px] left-[32px] text-xl leading-[32px] text-gray-600 flex items-center w-[263px] h-[33.92px]">
            Enter text or choose from template
          </div>
        </div>
        <div className="absolute top-[144px] left-[32px] w-[604px] h-[305px] text-xs">
          <Form.Group className="w-[604px] absolute top-[32px] left-[0px]">
            <Form.Control as="textarea" size="sm" />
          </Form.Group>
          <div className="absolute top-[164px] left-[0px] rounded-base box-border w-[193px] h-[141px] border-[1.5px] border-solid border-royalblue-200" />
          <div className="absolute top-[164px] left-[206px] rounded-base box-border w-48 h-[141px] border-[1.5px] border-solid border-whitesmoke-500" />
          <div className="absolute top-[164px] left-[411px] rounded-base box-border w-[193px] h-[141px] border-[1.5px] border-solid border-whitesmoke-500" />
          <b className="absolute top-[0px] left-[0px] leading-[32px] flex items-center w-[216px]">
            Enter text or choose from template
          </b>
          <b className="absolute top-[132px] left-[0px] leading-[32px]">
            Auto Suggestions
          </b>
        </div>
      </div>
      <div className="absolute top-[324px] left-[50px] leading-[22px] flex items-center w-[161px]">{`A sweet, baked, breadlike food, made with or without short ening, and usually containing flour, `}</div>
      <div className="absolute top-[324px] left-[255px] leading-[22px] flex items-center w-[161px]">{`A sweet, baked, breadlike food, made with or without short ening, and usually containing flour, `}</div>
      <div className="absolute top-[324px] left-[459px] leading-[22px] flex items-center w-[161px]">{`A sweet, baked, breadlike food, made with or without short ening, and usually containing flour, `}</div>
      <img
        className="absolute top-[300px] left-[209px] w-[22.3px] h-[22.3px]"
        alt=""
        src="../vuesaxbulktickcircle.svg"
      />
      <Button
        className="w-[189px] absolute top-[475px] left-[443px] cursor-pointer"
        variant="primary"
        onClick={onClose}
      >
        Done
      </Button>
      <img
        className="absolute top-[283px] left-[620px] w-[17px] h-[17px]"
        alt=""
        src="../vuesaxlinearrotateright.svg"
      />
    </div>
  );
};

export default ChangeTxt;
