import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FormControlLabel,
  Switch,
  TextField,
  Icon,
  Box,
  Slider,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Form, Button as BsButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const CmapignSettings = () => {
  const [groupDateTimePicker2Value, setGroupDateTimePicker2Value] =
    useState(null);
  const [groupDateTimePicker3Value, setGroupDateTimePicker3Value] =
    useState(null);
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/ready-to-go");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-ghostwhite w-full h-[1236px] overflow-hidden text-left text-xs text-dimgray-100 font-eudoxus-sans">
        <b className="absolute top-[calc(50%_-_5140px)] left-[2498px] text-2xl tracking-[10px] leading-[32px] uppercase font-libertinus-serif text-black">
          Scube
        </b>
        <div className="absolute top-[-5px] left-[0px] bg-gray-300 w-[82px] h-[1761px]" />
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
            src="../group-58862.svg"
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
        <b className="absolute top-[112px] left-[132px] text-2xl leading-[32px] text-black">
          Your Ad Campaign
        </b>
        <div className="absolute top-[142px] left-[132px] text-xl leading-[32px] text-gray-600">
          Launch your ad in just 3 easy steps
        </div>
        <div className="absolute top-[344px] left-[132px] rounded-base bg-white box-border w-[899px] h-[784px] border-[1px] border-solid border-lavender" />
        <div className="absolute top-[563px] left-[199px] leading-[32px] font-medium">
          Start date
        </div>
        <div className="absolute top-[563px] left-[578px] leading-[32px] font-medium">
          End date
        </div>
        <FormControlLabel
          className="absolute top-[836px] left-[196px]"
          label="Location/Radius"
          control={<Switch color="primary" size="medium" />}
        />
        <img
          className="absolute top-[448.47px] left-[171.47px] w-[2.06px] h-[2.06px]"
          alt=""
          src="../vector-34.svg"
        />
        <img
          className="absolute top-[466px] left-[172.25px] w-[1.5px] h-80"
          alt=""
          src="../vector-35.svg"
        />
        <Form.Group className="w-[744px] [border:none] bg-[transparent] absolute top-[931px] left-[199px]">
          <Form.Control type="text" />
        </Form.Group>
        <div className="absolute top-[898px] left-[199px] leading-[32px] font-medium flex items-center w-24">
          Select Location
        </div>
        <div className="absolute top-[504px] left-[194px] leading-[32px] font-medium flex items-center w-24">
          Budget Timeline
        </div>
        <div className="absolute top-[809px] left-[199px] leading-[32px] font-medium flex items-center w-24">
          Location type
        </div>
        <div className="absolute top-[429px] left-[194px] text-base [text-decoration:underline] leading-[32px] font-medium text-black">
          Budget and dates info
        </div>
        <div className="absolute top-[764px] left-[194px] text-base [text-decoration:underline] leading-[32px] font-medium text-black">
          Location info
        </div>
        <div className="absolute top-[428px] left-[161px] w-6 h-8 text-white">
          <img
            className="absolute top-[5px] left-[0px] w-6 h-6"
            alt=""
            src="../group-17300.svg"
          />
          <b className="absolute top-[0px] left-[8px] leading-[32px]">1</b>
        </div>
        <div className="absolute top-[763px] left-[161px] w-6 h-8 text-white">
          <img
            className="absolute top-[5px] left-[0px] w-6 h-6"
            alt=""
            src="../group-17300.svg"
          />
          <b className="absolute top-[0px] left-[8px] leading-[32px]">2</b>
        </div>
        <b className="absolute top-[363px] left-[164px] text-xl leading-[32px] text-black">
          Campaign Settings
        </b>
        <div className="absolute top-[364px] left-[320px] text-base leading-[32px] text-gray-600">
          (Step 3 of 4)
        </div>
        <img
          className="absolute top-[399.25px] left-[163.25px] w-[798.5px] h-[1.5px]"
          alt=""
          src="../vector-161.svg"
        />
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
            <div className="absolute top-[16px] left-[0px] leading-[32px]">
              Products
            </div>
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
            <div className="absolute top-[14px] left-[0px] leading-[32px]">
              Customers
            </div>
            <img
              className="absolute top-[0px] left-[16px] w-[21px] h-[21px]"
              alt=""
              src="../vuesaxoutlineprofile2user.svg"
            />
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[62px] left-[0px] w-[82px] h-[58px] text-[inherit]"
            to="/what-you-want-to-do"
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
          className="absolute top-[242.5px] left-[189.5px] w-[898px] h-[13px]"
          alt=""
          src="../vector-211.svg"
        />
        <div className="absolute top-[214px] left-[1262px] w-[80.19px] h-[91.64px] text-base text-lightsteelblue">
          <div className="absolute top-[72.9px] left-[0px] tracking-[-0.02em] inline-block w-[80.19px] h-[18.75px]">
            Ready to go
          </div>
          <img
            className="absolute top-[0px] left-[8.33px] w-[64.57px] h-[64.57px]"
            alt=""
            src="../group-172801.svg"
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
        <div className="absolute top-[219px] left-[891px] w-[140px] h-[88px] text-xl text-gray-200">
          <div className="absolute top-[68.66px] left-[0px] tracking-[-0.02em] font-medium inline-block w-[140px] h-[19.34px]">
            Campaign settings
          </div>
          <img
            className="absolute top-[0px] left-[39px] w-[62px] h-[59.96px]"
            alt=""
            src="../group-172791.svg"
          />
        </div>
        <div className="absolute top-[219px] left-[192px] w-[839px] h-[437px] text-xl text-gray-200">
          <div className="absolute top-[68.66px] left-[699px] tracking-[-0.02em] font-medium inline-block w-[140px] h-[19.34px]">
            Campaign settings
          </div>
          <img
            className="absolute top-[0px] left-[738px] w-[62px] h-[59.96px]"
            alt=""
            src="../group-172791.svg"
          />
          <div className="absolute top-[370px] left-[381px]">
            <MuiDatePicker
              value={groupDateTimePicker2Value}
              onChange={(newValue) => {
                setGroupDateTimePicker2Value(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  variant="standard"
                  size="medium"
                  helperText=""
                />
              )}
            />
          </div>
          <div className="absolute top-[370px] left-[0px]">
            <MuiDatePicker
              value={groupDateTimePicker3Value}
              onChange={(newValue) => {
                setGroupDateTimePicker3Value(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  variant="standard"
                  size="medium"
                  helperText=""
                />
              )}
            />
          </div>
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
        <div className="absolute top-[662px] left-[199px] leading-[32px] font-medium">
          Enter campaign budget
        </div>
        <div className="absolute top-[710px] left-[199px] leading-[32px] font-medium">
          100
        </div>
        <div className="absolute top-[1040px] left-[199px] leading-[32px] font-medium">
          1
        </div>
        <div className="absolute top-[710px] left-[881px] leading-[32px] font-medium">
          1,00,000
        </div>
        <div className="absolute top-[1040px] left-[921px] leading-[32px] font-medium">
          30
        </div>
        <div className="absolute top-[997px] left-[199px] leading-[32px] font-medium">
          Select target radius
        </div>
        <div className="absolute top-[669px] left-[880px] w-[58px] h-[18px] text-2xs text-black">
          <img
            className="absolute top-[0px] left-[0px] w-6 h-[18px]"
            alt=""
            src="../group-16906.svg"
          />
          <img
            className="absolute top-[6px] left-[51px] w-[7px] h-[7px]"
            alt=""
            src="../vuesaxlineararrowdown.svg"
          />
          <div className="absolute top-[2px] left-[28px] leading-[15px] font-medium">
            INR
          </div>
        </div>
        <Box className="absolute top-[694px] left-[199px]" sx={{ width: 738 }}>
          <Slider color="primary" orientation="horizontal" />
        </Box>
        <Box className="absolute top-[1029px] left-[199px]" sx={{ width: 738 }}>
          <Slider color="primary" orientation="horizontal" />
        </Box>
        <iframe
          className="[border:none] absolute top-[936px] left-[890px] w-[37px] h-8"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973691488!2d75.65047106998001!3d26.885141678366416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1675026836718!5m2!1sen!2sin"
        />
        <BsButton
          className="w-[237px] absolute top-[1062px] left-[1153px] cursor-pointer"
          variant="primary"
          onClick={onGroupButtonClick}
        >
          Continue
        </BsButton>
        <div className="absolute top-[21px] left-[857px] w-[265px] h-[34px] text-gray-700">
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
                src="../444-11.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CmapignSettings;
