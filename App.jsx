import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X09BlogsDetailsPageDesktop from "./components/X09BlogsDetailsPageDesktop";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|09-blogs-details-page-desktop)">
          <X09BlogsDetailsPageDesktop {...x09BlogsDetailsPageDesktopData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group893Data = {
    line4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-6@1x.svg",
    line5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-6@1x.svg",
    line6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-6@1x.svg",
    line7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-6@1x.svg",
    line8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-5@1x.svg",
};

const twitter3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-162@2x.svg",
};

const button11Data = {
    children: "POST COMMENT",
};

const textInputsNormal42Data = {
    children: "Comment",
};

const textInputsNormal22Data = {
    children: "Name",
};

const textInputsNormal222Data = {
    children: "Email",
    className: "text-inputs-normal-1-1",
};

const textInputsNormal223Data = {
    children: "Phone Number",
    className: "text-inputs-normal-1",
};

const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-88@2x.svg",
};

const group86222Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-10@2x.svg",
    whiteProps: whiteData,
};

const facebookAppSymbol3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-4@2x.svg",
};

const twitter32Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-97@2x.svg",
};

const frame15783Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-94@2x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-95@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-96@2x.svg",
    group86222Props: group86222Data,
    facebookAppSymbol3Props: facebookAppSymbol3Data,
    twitter3Props: twitter32Data,
};

const frame4Data = {
    text41: "About Us",
    text42: "Projects",
    text43: "Videos",
    text44: "Packages",
    text45: "Insights",
    text46: "Blogs",
    text47: "FAQ’s",
};

const frame53Data = {
    text40: "Quick Links",
    frame4Props: frame4Data,
};

const frame42Data = {
    text49: "Construction",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
};

const frame422Data = {
    text49: "Interior",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
    className: "frame-5-1",
};

const frame6Data = {
    text48: "Packages",
    frame42Props: frame42Data,
    frame422Props: frame422Data,
};

const frame43Data = {
    text41: "BBEMP",
    text42: "BWSSB",
    text43: "BESCOM",
    text44: "Procedure",
    text45: "Vaastu",
    text46: "Bye Laws",
    text47: "Tips & Ideas",
};

const frame7Data = {
    text56: "Insights",
    frame4Props: frame43Data,
};

const footer32Data = {
    group32Props: frame15783Data,
    frame5Props: frame53Data,
    frame6Props: frame6Data,
    frame7Props: frame7Data,
};

const white2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85@2x.svg",
    whiteProps: white2Data,
};

const getAQuoteButton222Data = {
    children: "GET A QUOTE",
};

const headerWithBackground22Data = {
    unselectedI2601273: "HOME",
    unselectedI26012732: "ABOUT US",
    unselectedI26012733: "PROJECTS",
    unselectedI26012734: "VIDEOS",
    unselectedI26012735: "INSIGHTS",
    text127: "BLOGS",
    unselectedI26012736: "FAQ’S",
    unselectedI26012737: "CONTACT US",
    group86Props: group86Data,
    getAQuoteButton22Props: getAQuoteButton222Data,
};

const x09BlogsDetailsPageDesktopData = {
    text146: "Lorem Ipsum passages of Lorem Ipsum available",
    group182: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d5732641e2212c658d387b/img/group-182-1@2x.jpg",
    address: "5 June 2021",
    text147: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo, ac tincidunt sem pharetra nec. Nunc faucibus ipsum vel metus aliquam, interdum feugiat massa viverra. Donec velit magna, sodales sed convallis eu, egestas vel nisl. Etiam fermentum felis ac risus scelerisque, ac euismod diam finibus. Suspendisse lacus sem, gravida vestibulum ligula et, pulvinar mattis purus.<br /><br />Etiam fermentum felis ac risus scelerisque, ac euismod diam finibus. Suspendisse lacus sem, gravida vestibulum ligula et, pulvinar mattis purus. Phasellus mollis molestie ante sed rhoncus.<br /><br />Sed eu faucibus libero. Nunc at libero eget massa lobortis consectetur vel eu ligula. Suspendisse est mauris, fermentum id pellentesque ut, pharetra quis risus. Aliquam placerat orci turpis, quis venenatis massa lobortis a. Integer nec magna erat. Nullam vel dui vel purus consequat fermentum. Donec rhoncus convallis erat sit amet vestibulum. Duis lacinia, purus eget fermentum volutpat, justo ipsum mattis risus, a efficitur sapien nisi nec augue.</>,
    rectangle97: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d5732641e2212c658d387b/img/rectangle-97@2x.jpg",
    rectangle98: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d5732641e2212c658d387b/img/rectangle-98@2x.jpg",
    followUs: "Share:",
    f1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1@2x.svg",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-161@2x.svg",
    line56: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-56@1x.svg",
    ellipse105: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/ellipse-105@2x.png",
    spanText: "Written by:",
    spanText2: " Darlene Robertson",
    text149: "Donec vitae mi metus. Vestibulum ac aliquam ligula. Sed vestibulum eu mi in finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    line57: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-56@1x.svg",
    leaveAReply: "Leave a reply",
    group89Props: group893Data,
    twitter3Props: twitter3Data,
    button11Props: button11Data,
    textInputsNormal42Props: textInputsNormal42Data,
    textInputsNormal22Props: textInputsNormal22Data,
    textInputsNormal222Props: textInputsNormal222Data,
    textInputsNormal223Props: textInputsNormal223Data,
    footer32Props: footer32Data,
    headerWithBackground22Props: headerWithBackground22Data,
};

