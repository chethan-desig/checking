//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  startallproduct,
  startpostingposition,
} from "./action/positions/refercandidateactiomn";
import "bootstrap/dist/css/bootstrap.min.css";
import { connectAdvanced } from "react-redux";

function App() {
  const [skillset, setSkillset] = useState("");
  const [candidatename, setCandidatename] = useState("");
  const [emailaddress, setemailaddress] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [highestqualification, SetHighestqualification] = useState("");
  const [otherquailfication, setQualification] = useState("");
  const [universitycollege, setUniversitycollege] = useState("");
  const [currentemployer, setCurrentemployer] = useState("");
  const [currentjobtitles, setCurrentjobtitle] = useState("");
  const [currentctc, setCurrentctc] = useState("");
  const [expectedctc, setExpected] = useState("");
  const [currentvariablepay, setCurrentvariablepay] = useState("");
  const [noticeperiod, setNoticeperiod] = useState("");
  const [currentaddress, setCurrentaddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [permanentaddress, setPermanentaddress] = useState("");
  const [permanentcountry, setPermanentcountry] = useState("");
  const [permanentstate, setPermanentstate] = useState("");
  const [permanentzipcode, setPermanentzipcode] = useState("");
  const [pancard, setPancard] = useState("");
  const [aadharcard, setAadharcard] = useState("");
  const [linkedinprofile, setLinkedinprofile] = useState("");
  const [website, setWebsite] = useState("");
  const [formerrors, setFormerrors] = useState({});
  const error = {};

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startallproduct());
  }, []);
  const handleChange = (e) => {
    if (e.target.name === "skillset") {
      setSkillset(e.target.value);
    }
    if (e.target.name === "candidatename") {
      setCandidatename(e.target.value);
    }
    if (e.target.name === "emailaddress") {
      setemailaddress(e.target.value);
    }
    if (e.target.name === "contactnumber") {
      setContactnumber(e.target.value);
    }
    if (e.target.name === "highestqualification") {
      SetHighestqualification(e.target.value);
    }
    if (e.target.name === "otherqualification") {
      setQualification(e.target.value);
    }
    if (e.target.name === "universitycollege") {
      setUniversitycollege(e.target.value);
    }
    if (e.target.name === "currentemployer") {
      setCurrentemployer(e.target.value);
    }
    if (e.target.name === "currentjobtitle") {
      setCurrentjobtitle(e.target.value);
    }
    if (e.target.name === "currentctc") {
      setCurrentctc(e.target.value);
    }
    if (e.target.name === "expectedctc") {
      setExpected(e.target.value);
    }
    if (e.target.name === "currentvariablepay") {
      setCurrentvariablepay(e.target.value);
    }
    if (e.target.name === "noticeperiod") {
      setNoticeperiod(e.target.value);
    }
    if (e.target.name === "currentaddress") {
      setCurrentaddress(e.target.value);
    }
    if (e.target.name === "country") {
      setCountry(e.target.value);
    }
    if (e.target.name === "state") {
      setState(e.target.value);
    }
    if (e.target.name === "zipcode") {
      setZipcode(e.target.value);
    }
    if (e.target.name === "permanentaddress") {
      setPermanentaddress(e.target.value);
    }
    if (e.target.name === "permanentcountry") {
      setPermanentcountry(e.target.value);
    }
    if (e.target.name === "permanentstate") {
      setPermanentstate(e.target.value);
    }
    if (e.target.name === "permanentzipcode") {
      setPermanentzipcode(e.target.value);
    }
    if (e.target.name === "pancard") {
      setPancard(e.target.value);
    }
    if (e.target.name === "aadharcard") {
      setAadharcard(e.target.value);
    }
    if (e.target.name === "linkedinprofile") {
      setLinkedinprofile(e.target.value);
    }
    if (e.target.name === "website") {
      setWebsite(e.target.value);
    }
  };
  const runvalidation = () => {
    if (skillset.trim().length === 0) {
      error.skillset = "fill the skillset";
    }
    if (candidatename.trim().length === 0) {
      error.candidatename = "fill the candidatename";
    }
    if (emailaddress.trim().length === 0) {
      error.emailaddress = "fill email";
    }
    if (contactnumber.trim().length === 0) {
      error.contactnumber = "fill the contactnumber";
    }
    if (highestqualification.trim().length === 0) {
      error.highestqualification = "fill the highestqualification";
    }
    if (otherquailfication.trim().length === 0) {
      error.otherquailfication = "fill the otherqualification";
    }
    if (universitycollege.trim().length === 0) {
      error.universitycollege = "fill the universitycollege";
    }
    if (currentemployer.trim().length === 0) {
      error.currentemployer = "fill the currentemployer";
    }
    if (currentjobtitles.trim().length === 0) {
      error.currentjobtitles = "fill the currentjobtitle";
    }
    if (currentctc.trim().length === 0) {
      error.currentctc = "fill the currentctc";
    }
    if (expectedctc.trim().length === 0) {
      error.expectedctc = "fill the expectedctc";
    }
    if (currentvariablepay.trim().length === 0) {
      error.currentvariablepay = "fill the currentvariablepay";
    }
    if (noticeperiod.trim().length === 0) {
      error.noticeperiod = "fill the noticeperiod";
    }
    if (currentaddress.trim().length === 0) {
      error.currentaddress = "fill the currentaddress";
    }
    if (country.trim().length === 0) {
      error.country = "fill the country";
    }
    if (state.trim().length === 0) {
      error.state = "fill the state";
    }
    if (zipcode.trim().length === 0) {
      error.zipcode = "fill the zipcode";
    }
    if (permanentaddress.trim().length === 0) {
      error.permanentaddress = "fill the permanentaddress";
    }
    if (permanentcountry.trim().length === 0) {
      error.permanentcountry = "fill the permanentcountry";
    }
    if (permanentstate.trim().length === 0) {
      error.permanentstate = "fill the permanentstate";
    }
    if (permanentzipcode.trim().length === 0) {
      error.permanentzipcode = "fill the zipcode";
    }
    if (pancard.trim().length === 0) {
      error.pancard = "fill the pancard";
    }
    if (aadharcard.trim().length === 0) {
      error.aadharcard = "fill the aadharcard";
    }
    if (website.trim().length === 0) {
      error.website = "fill the website";
    }
  };
  const handleSave = (e) => {
    e.preventDefault();
    runvalidation();
    if (Object.keys(error).length === 0) {
      setFormerrors({});
      const formdata = {
        skillSet: skillset,
        candidatename: candidatename,
        emailaddress: emailaddress,
        contactnumber: contactnumber,
        highestqualification: highestqualification,
        otherqualification: otherquailfication,
        universitycollege: universitycollege,
        currentemployer: currentemployer,
        currentjobtittle: currentjobtitles,
        currentctc: currentctc,
        expectedctc: expectedctc,
        currentvariablepay: currentvariablepay,
        noticeperiod: noticeperiod,
        currentaddress: currentaddress,
        country: country,
        state: state,
        zipcode: zipcode,
        permanentaddress: permanentaddress,
        permanentcountry: permanentcountry,
        permanentstate: permanentstate,
        permanentzipcode: permanentzipcode,
        pancard: pancard,
        aadharcard: aadharcard,
        linkedinprofile: linkedinprofile,
        website: website,
      };
      const redirect = () => {
        window.location.reload();
      };
      dispatch(startpostingposition(formdata, redirect));
    } else {
      setFormerrors(error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <nav class="navbar navbar-dark bg-primary">
          <span class="navbar-text text-light ms-6 ">Refer Candidate</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            class="bi bi-x-circle"
            viewBox="0 0 20 20"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </nav>

        <br></br>

        <h4 text align="left">
          Hadoop with Pyspark Developer
        </h4>

        <form>
          <div class="form-group  row">
            <label for="name" class="col-sm-2 col-form-label" text align="left">
              Skill Set
              {formerrors.skillset && <span>-{formerrors.skillset}</span>}
            </label>

            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                value={skillset}
                name="skillset"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <hr></hr>

          <div class="form-group  row">
            <label for="name" class="col-sm-2 col-form-label" text align="left">
              Candidate Name*
              {formerrors.candidatename && (
                <span>-{formerrors.candidatename}</span>
              )}
            </label>

            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                value={candidatename}
                name="candidatename"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Email Address"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Email Address*
              {formerrors.emailaddress && (
                <span>-{formerrors.emailaddress}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="user_name@gmail.com"
                value={emailaddress}
                name="emailaddress"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Contact No"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Contact No*
              {formerrors.contactnumber && (
                <span>-{formerrors.contactnumber}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placecholder="+91 12345 67890"
                value={contactnumber}
                name="contactnumber"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <hr></hr>

          <div class="form-group  row">
            <label
              for="Highest Qualification"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Highest Qualification
              {formerrors.highestqualification && (
                <span>-{formerrors.highestqualification}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={highestqualification}
                name="highestqualification"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Other Qualification"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Other Qualification
              {formerrors.otherquailfication && (
                <span>-{formerrors.otherquailfication}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={otherquailfication}
                name="otherqualification"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="University/College"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              University/college
              {formerrors.universitycollege && (
                <span>-{formerrors.universitycollege}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={universitycollege}
                name="universitycollege"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <hr></hr>

          <div class="form-group  row">
            <label
              for="Current Employer"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Current Employer
              {formerrors.currentemployer && (
                <span>-{formerrors.currentemployer}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Gyansys Infotech Pvt Ltd"
                value={currentemployer}
                name="currentemployer"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Current Job Title"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Current Job Title
              {formerrors.currentjobtitles && (
                <span>-{formerrors.currentjobtitles}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="### LPA"
                value={currentjobtitles}
                name="currentjobtitle"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div class="form-group  row">
            <label
              for="Current CTC"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Current CTC
              {formerrors.currentctc && <span>-{formerrors.currentctc}</span>}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="### LPA"
                value={currentctc}
                name="currentctc"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Expected CTC"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Expected CTC
              {formerrors.expectedctc && <span>-{formerrors.expectedctc}</span>}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="### LPA"
                value={expectedctc}
                name="expectedctc"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div class="form-group  row">
            <label
              for="Current variable pay"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Current variable pay
              {formerrors.currentvariablepay && (
                <span>-{formerrors.currentvariablepay}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={currentvariablepay}
                name="currentvariablepay"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Expected CTC"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Notice period
              {formerrors.noticeperiod && (
                <span>-{formerrors.noticeperiod}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={noticeperiod}
                name="noticeperiod"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <hr></hr>

          <div class="form-group  row">
            <label
              for="Current address"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Current address{" "}
              {formerrors.currentaddress && (
                <span>-{formerrors.currentaddress}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={currentaddress}
                name="currentaddress"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Country"
              class="col-sm-1 col-form-label"
              text
              align="left"
            >
              Country
              {formerrors.country && <span>-{formerrors.country}</span>}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={country}
                name="country"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="State"
              class="col-sm-1 col-form-label"
              text
              align="left"
            >
              State
              {formerrors.state && <span>-{formerrors.state}</span>}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={state}
                name="state"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Zip Code"
              class="col-sm-1 col-form-label"
              text
              align="left"
            >
              Zip Code
              {formerrors.zipcode && <span>-{formerrors.zipcode}</span>}
            </label>
            <div class="col-sm-1">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                onChange={handleChange}
                value={zipcode}
                name="zipcode"
              ></input>
            </div>
          </div>

          <div class="form-group  row">
            <label
              for="Permanent address"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Permanent address{" "}
              {formerrors.permanentaddress && (
                <span>-{formerrors.permanentaddress}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={permanentaddress}
                name="permanentaddress"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Country"
              class="col-sm-1 col-form-label"
              text
              align="left"
            >
              Country
              {formerrors.permanentcountry && (
                <span>-{formerrors.permanentcountry}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={permanentcountry}
                name="permanentcountry"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="State"
              class="col-sm-1 col-form-label"
              text
              align="left"
            >
              State
              {formerrors.permanentstate && (
                <span>-{formerrors.permanentstate}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={permanentstate}
                name="permanentstate"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Zip Code"
              class="col-sm-1 col-form-label"
              text
              align="left"
            >
              Zip Code
              {formerrors.permanentzipcode && (
                <span>-{formerrors.permanentzipcode}</span>
              )}
            </label>
            <div class="col-sm-1">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={permanentzipcode}
                name="permanentzipcode"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <hr></hr>

          <div class="form-group  row">
            <label
              for="PAN Card"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              PAN Card
              {formerrors.pancard && <span>-{formerrors.pancard}</span>}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={pancard}
                name="pancard"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Aadhar Card"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Aadhar Card
              {formerrors.aadharcard && <span>-{formerrors.aadharcard}</span>}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={aadharcard}
                name="aadharcard"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div class="form-group  row">
            <label
              for="Linkedln profile"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Lindkedln profile
              {formerrors.linkedinprofile && (
                <span>-{formerrors.linkedinprofile}</span>
              )}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={linkedinprofile}
                name="linkedinprofile"
                onChange={handleChange}
              ></input>
            </div>
            <label
              for="Website"
              class="col-sm-2 col-form-label"
              text
              align="left"
            >
              Website
              {formerrors.website && <span>-{formerrors.website}</span>}
            </label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                placeholder="Type here"
                value={website}
                name="website"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <br></br>
        </form>
        <div class="alert alert-primary" role="alert">
          <div class="row">
            <div class="col-sm" text align="center" style={{ color: "black" }}>
              Employee Name <b>Sneha Mishra</b>
            </div>
            <div class="col-sm" text align="center" style={{ color: "black" }}>
              E-mail address <b>user_name@gmail.com</b>
            </div>
            <div class="col-sm" text align="center" style={{ color: "black" }}>
              Contact no <b>+91 12345 09876</b>
            </div>
          </div>
        </div>

        <div class="d-grid gap-3 d-md-flex justify-content-md-end">
          <button type="button" class="btn btn-outline-dark">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" onClick={handleSave}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
