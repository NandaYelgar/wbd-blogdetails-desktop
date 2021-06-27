import React from "react";
import Group893 from "../Group893";
import Twitter3 from "../Twitter3";
import Button11 from "../Button11";
import TextInputsNormal42 from "../TextInputsNormal42";
import TextInputsNormal22 from "../TextInputsNormal22";
import Footer32 from "../Footer32";
import HeaderWithBackground22 from "../HeaderWithBackground22";
import "./X09BlogsDetailsPageDesktop.css";

function X09BlogsDetailsPageDesktop(props) {
  const {
    text146,
    group182,
    address,
    text147,
    rectangle97,
    rectangle98,
    followUs,
    f1,
    overlapGroup2,
    vector2,
    line56,
    ellipse105,
    spanText,
    spanText2,
    text149,
    line57,
    leaveAReply,
    group89Props,
    twitter3Props,
    button11Props,
    textInputsNormal42Props,
    textInputsNormal22Props,
    textInputsNormal222Props,
    textInputsNormal223Props,
    footer32Props,
    headerWithBackground22Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x09-blogs-details-page-desktop screen">
        <div className="overlap-group">
          <div className="frame-1596">
            <div className="overlap-group">
              <h1 className="text-1 valign-text-middle">{text146}</h1>
              <img className="group-182" src={group182} />
              <div className="group-196">
                <div className="address valign-text-middle typographybody16-regular">{address}</div>
                <p className="text-2">{text147}</p>
              </div>
              <Group893
                line4={group89Props.line4}
                line5={group89Props.line5}
                line6={group89Props.line6}
                line7={group89Props.line7}
                line8={group89Props.line8}
              />
              <img className="rectangle-97" src={rectangle97} />
              <img className="rectangle-98" src={rectangle98} />
              <div className="group-198">
                <div className="follow-us valign-text-middle">{followUs}</div>
                <div className="frame-1561">
                  <div className="facebook-app-symbol">
                    <img className="f-1" src={f1} />
                  </div>
                  <div className="instagram">
                    <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                      <img
                        className="vector"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-160@2x.svg"
                      />
                      <img className="vector-1" src={vector2} />
                    </div>
                  </div>
                  <Twitter3 src={twitter3Props.src} />
                </div>
              </div>
              <div className="frame-200">
                <img className="line-56" src={line56} />
                <div className="frame-1646">
                  <img className="ellipse-105" src={ellipse105} />
                  <div className="frame-199">
                    <div className="text-3 valign-text-middle">
                      <span>
                        <span className="span0 ">{spanText}</span>
                        <span className="span1 ">{spanText2}</span>
                      </span>
                    </div>
                    <p className="text-4 typographybodycaption-14-semi-bold">{text149}</p>
                  </div>
                </div>
                <img className="line-57" src={line57} />
              </div>
              <Button11>{button11Props.children}</Button11>
              <div className="frame-1649">
                <div className="leave-a-reply valign-text-middle typographyheadlineh2-extrabold-40">{leaveAReply}</div>
                <div className="frame-1648">
                  <TextInputsNormal42>{textInputsNormal42Props.children}</TextInputsNormal42>
                  <div className="frame-1647">
                    <TextInputsNormal22>{textInputsNormal22Props.children}</TextInputsNormal22>
                    <TextInputsNormal22 className={textInputsNormal222Props.className}>
                      {textInputsNormal222Props.children}
                    </TextInputsNormal22>
                    <TextInputsNormal22 className={textInputsNormal223Props.className}>
                      {textInputsNormal223Props.children}
                    </TextInputsNormal22>
                  </div>
                </div>
              </div>
              <Footer32
                group32Props={footer32Props.group32Props}
                frame5Props={footer32Props.frame5Props}
                frame6Props={footer32Props.frame6Props}
                frame7Props={footer32Props.frame7Props}
              />
            </div>
          </div>
          <HeaderWithBackground22 {...headerWithBackground22Props} />
        </div>
      </div>
    </div>
  );
}

export default X09BlogsDetailsPageDesktop;
