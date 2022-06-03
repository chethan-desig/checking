// import logo from './logo.svg';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  startpostingposition,
  startpostingpositionupdate,
} from "../../action/positions/positionsAction";

import "./Acc.css";
const App = (props) => {
  const {
    id,
    positionTypes,
    clients,
    skillSets,
    JodDescriptions,
    numberOfPositionss,
    earliestStartDates,
    targetDates,
    releventExperiences,
    projectLocations,
    assigned_TA_SPOCs,
    immediateBIllingImpacts,
    billingCurrencys,
    BillingRates,
    practices,
    prioritys,
    statuss,
  } = props;

  const [positiontype, setPositiontype] = useState(
    positionTypes ? positionTypes : ""
  );
  const [client, setClient] = useState(clients ? clients : "");
  const [skillset, setSkillset] = useState(skillSets ? skillSets : "");
  const [jobdescription, setJobdescription] = useState(
    JodDescriptions ? JodDescriptions : ""
  );
  const [numberOfPositions, setNumberOfpositions] = useState(
    numberOfPositionss ? numberOfPositionss : ""
  );
  const [earlieststartdate, setEarlieststartdate] = useState(
    earliestStartDates ? earliestStartDates : ""
  );
  const [targetdate, setTargetdate] = useState(targetDates ? targetDates : "");
  const [relevantexperience, setRelevantexperience] = useState(
    releventExperiences ? releventExperiences : ""
  );
  const [projectlocation, setProjectlocation] = useState(
    projectLocations ? projectLocations : ""
  );
  const [Assigned_TA_SPOC, setAssigned_TA_SPOC] = useState(
    assigned_TA_SPOCs ? assigned_TA_SPOCs : ""
  );
  const [immediatebillingimpact, setImmediatebillingimpact] = useState(
    immediateBIllingImpacts ? immediateBIllingImpacts : undefined
  );
  const [Billingcurrency, setBillingcurrence] = useState(
    billingCurrencys ? billingCurrencys : ""
  );
  const [Billingrate, setBillingrate] = useState(
    BillingRates ? BillingRates : ""
  );
  const [practice, setPractice] = useState(practices ? practices : "");
  const [priority, setPriority] = useState(prioritys ? prioritys : "");
  const [status, setStatus] = useState(statuss ? statuss : "");
  const [dateformate, setDateformate] = useState(true);
  const [dateformate2, setDateformate2] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [formserror, setFormserror] = useState({});

  const errors = {};

  const handleChange = (e) => {
    if (e.target.id === "stragic") {
      setPositiontype(e.target.value);
    }
    if (e.target.id === "project") {
      setPositiontype(e.target.value);
    }
    if (e.target.name === "client") {
      setClient(e.target.value);
    }
    if (e.target.name === "skillset") {
      setSkillset(e.target.value);
    }
    if (e.target.name === "jobdescription") {
      setJobdescription(e.target.value);
    }
    if (e.target.name === "numberofposition") {
      setNumberOfpositions(e.target.value);
    }
    if (e.target.name === "earlieststartdate") {
      setEarlieststartdate(e.target.value);
    }
    if (e.target.name === "targetdatechange") {
      setTargetdate(e.target.value);
    }
    if (e.target.name === "relevantexperience") {
      setRelevantexperience(e.target.value);
    }
    if (e.target.name === "projectlocation") {
      setProjectlocation(e.target.value);
    }
    if (e.target.name === "assignedtaspoc") {
      setAssigned_TA_SPOC(e.target.value);
    }
    if (e.target.id === "yes") {
      setImmediatebillingimpact(true);
    }
    if (e.target.id === "NO") {
      setImmediatebillingimpact(false);
    }
    if (e.target.name === "billingcurrency") {
      setBillingcurrence(e.target.value);
    }
    if (e.target.name === "billingrate") {
      setBillingrate(e.target.value);
    }
    if (e.target.name === "practice") {
      setPractice(e.target.value);
    }
    if (e.target.name === "priority") {
      setPriority(e.target.value);
    }
    if (e.target.name === "status") {
      setStatus(e.target.value);
    }
  };
  const dispatch = useDispatch();

  const runvalidation = () => {
    if (positiontype.trim().length === 0) {
      errors.positiontype = "fill the positiontype";
    }
    if (client.trim().length === 0) {
      errors.client = "fill the client";
    }
    if (skillset.trim().length === 0) {
      errors.skillSet = "fill the skillset";
    }
    if (jobdescription.trim().length === 0) {
      errors.jobdescription = "fill the jobdescription";
    }
    if (numberOfPositions.trim().length === 0) {
      errors.numberOfPositions = "fill the numberofposition";
    }
    if (earlieststartdate.trim().length === 0) {
      errors.earliestStartDate = "fill the earlieststartdate";
    }
    if (targetdate.trim().length === 0) {
      errors.targetDate = "fill the targetdate";
    }
    if (relevantexperience.trim().length === 0) {
      errors.relevantexperience = "fill the relevantexperience";
    }
    if (projectlocation.trim().length === 0) {
      errors.projectLocation = "fill the projectlocation";
    }
    if (Assigned_TA_SPOC.trim().length === 0) {
      errors.Assigned_TA_SPOC = "fill the Assigned_TA_SPOC";
    }
    if (immediatebillingimpact === undefined) {
      errors.immediatebillingimpact = "fill the immediateBillingimpact";
    }
    if (Billingcurrency.trim().length === 0) {
      errors.Billingcurrency = "fill the Billingcurrency";
    }
    if (Billingrate.trim().length === 0) {
      errors.BillingRate = "fill the BillingRate";
    }
    if (practice.trim().length === 0) {
      errors.practice = "fill the practice";
    }
    if (priority.trim().length === 0) {
      errors.priority = "fill the priority";
    }
    if (status.trim().length === 0) {
      errors.status = "fill the status";
    }
  };
  useEffect(() => {
    if (positiontype === "") {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [submit]);
  const handleChangedate = () => {
    setDateformate(false);
  };
  const handleChangedate2 = () => {
    setDateformate2(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    runvalidation();

    if (Object.keys(errors).length === 0) {
      setFormserror({});
      const formdata = {
        positionType: positiontype,
        client: client,
        skillSet: skillset,
        JodDescription: jobdescription,
        numberOfPositions: numberOfPositions,
        earliestStartDate: earlieststartdate,
        targetDate: targetdate,
        releventExperience: relevantexperience,
        projectLocation: projectlocation,
        assigned_TA_SPOC: Assigned_TA_SPOC,
        immediateBIllingImpact: immediatebillingimpact,
        billingCurrency: Billingcurrency,
        BillingRate: Billingrate,
        practice: practice,
        priority: priority,
        status: status,
      };

      const redirect = () => {
        props.history.push("/");
        window.location.reload();
      };
      dispatch(startpostingposition(formdata, redirect));
    } else {
      setFormserror(errors);
    }
  };
  const handleSave = (e) => {
    e.preventDefault();
    const formdata = {
      positionType: positiontype,
      client: client,
      skillSet: skillset,
      JodDescription: jobdescription,
      numberOfPositions: numberOfPositions,
      earliestStartDate: earlieststartdate,
      targetDate: targetdate,
      releventExperience: relevantexperience,
      projectLocation: projectlocation,
      assigned_TA_SPOC: Assigned_TA_SPOC,
      immediateBIllingImpact: immediatebillingimpact,
      billingCurrency: Billingcurrency,
      BillingRate: Billingrate,
      practice: practice,
      priority: priority,
      status: status,
    };
    const redirect = () => {
      window.location.reload();
      
    };
    dispatch(startpostingpositionupdate(formdata, id, redirect));
  };
  return (
    <div>
      <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand text-light">create new position</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  {/* <td>
                    <input type="radio" name="fruit" value="apple" />
                    Apple
                    <input type="radio" name="fruit" value="orange" />
                    Orange
                    <input type="radio" name="fruit" value="watermelon" />
                    Watermelon
                  </td> */}
                  <td>
                    position type{" "}
                    {formserror.positiontype && (
                      <span>-{formserror.positiontype}</span>
                    )}
                  </td>
                  <td>
                    <input
                      type="radio"
                      id="stragic"
                      name="positiontype"
                      value="stragic"
                      checked={positiontype === "stragic"}
                      onChange={handleChange}
                    />
                    <label>stragic</label>
                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      id="project"
                      name="positiontype"
                      value="project"
                      checked={positiontype === "project"}
                      onChange={handleChange}
                    />
                    <label>project</label>
                  </td>
                  <td>
                    {/* <input
                       type="radio"
                      id="project"
                      name="project"
                      value="project"
                      onChange={handleChange}
                    />
                    <label>project</label> */}
                  </td>
                </tr>
                <tr>
                  <td>
                    client{" "}
                    {formserror.client && <span>-{formserror.client}</span>}
                  </td>

                  <td>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        value={client}
                        onChange={handleChange}
                        name="client"
                        class="form-control background"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    skillset{" "}
                    {formserror.skillSet && <span>-{formserror.skillSet}</span>}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        value={skillset}
                        onChange={handleChange}
                        name="skillset"
                        class="form-control background"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    job description{" "}
                    {formserror.jobdescription && (
                      <span>-{formserror.jobdescription}</span>
                    )}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        type="text"
                        value={jobdescription}
                        onChange={handleChange}
                        name="jobdescription"
                        class="form-control background"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Number of position{" "}
                    {formserror.numberOfPositions && (
                      <span>-{formserror.numberOfPositions}</span>
                    )}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        value={numberOfPositions}
                        onChange={handleChange}
                        name="numberofposition"
                        class="form-control background"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Earliest start date{" "}
                    {formserror.earliestStartDate && (
                      <span>-{formserror.earliestStartDate}</span>
                    )}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      {dateformate ? (
                        <input
                          type="text"
                          value={earlieststartdate}
                          class="form-control background"
                          onClick={() => {
                            handleChangedate();
                          }}
                        />
                      ) : (
                        <input
                          type="date"
                          value={earlieststartdate}
                          onChange={handleChange}
                          name="earlieststartdate"
                          class="form-control background"
                        />
                      )}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Target date{" "}
                    {formserror.targetDate && (
                      <span>-{formserror.targetDate}</span>
                    )}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      {dateformate2 ? (
                        <input
                          type="text"
                          value={targetdate}
                          name="targetdatechange"
                          class="form-control background"
                          onClick={() => {
                            handleChangedate2();
                          }}
                        />
                      ) : (
                        <input
                          type="date"
                          value={targetdate}
                          onChange={handleChange}
                          name="targetdatechange"
                          class="form-control background"
                        />
                      )}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Relevant experience(xp){" "}
                    {formserror.relevantexperience && (
                      <span>-{formserror.relevantexperience}</span>
                    )}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        value={relevantexperience}
                        onChange={handleChange}
                        name="relevantexperience"
                        class="form-control background"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    project location{" "}
                    {formserror.projectLocation && (
                      <span>-{formserror.projectLocation}</span>
                    )}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        value={projectlocation}
                        onChange={handleChange}
                        name="projectlocation"
                        class="form-control background"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Assigned_TA_SPOC{" "}
                    {formserror.Assigned_TA_SPOC && (
                      <span>-{formserror.Assigned_TA_SPOC}</span>
                    )}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        value={Assigned_TA_SPOC}
                        onChange={handleChange}
                        name="assignedtaspoc"
                        class="form-control background"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Immediate billing impact{" "}
                    {formserror.immediatebillingimpact && (
                      <span>-{formserror.immediatebillingimpact}</span>
                    )}
                  </td>
                  <td>
                    <input
                      type="radio"
                      id="yes"
                      name="immediatebillingimpact"
                      onChange={handleChange}
                      checked={immediatebillingimpact === true}
                    />
                    <label>Yes</label>
                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      id="NO"
                      name="immediatebillingimpact"
                      onChange={handleChange}
                      checked={immediatebillingimpact === false}
                    />
                    <label>No</label>
                  </td>

                  <td>
                    {/* <input
                      type="radio"
                      id="No"
                      name="NO"
                      onChange={handleChange}
                    />
                    <label>No</label> */}
                  </td>
                </tr>
                <tr>
                  <td>
                    Billing currency{" "}
                    {formserror.Billingcurrency && (
                      <span>-{formserror.Billingcurrency}</span>
                    )}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        value={Billingcurrency}
                        onChange={handleChange}
                        name="billingcurrency"
                        class="form-control background"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Billing rate{" "}
                    {formserror.BillingRate && (
                      <span>-{formserror.BillingRate}</span>
                    )}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        value={Billingrate}
                        onChange={handleChange}
                        name="billingrate"
                        class="form-control background"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    practice{" "}
                    {formserror.practice && <span>-{formserror.practice}</span>}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        value={practice}
                        onChange={handleChange}
                        name="practice"
                        class="form-control background"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    priority{" "}
                    {formserror.priority && <span>-{formserror.priority}</span>}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      <select
                        value={priority}
                        class="form-control background"
                        name="priority"
                        onChange={handleChange}
                      >
                        <option value="high">high</option>
                        <option value="medium">medium</option>
                        <option value="low">low</option>
                      </select>
                      {/* <input
                        type="text"
                        value={priority}
                        onChange={handleChange}
                        name="priority"
                        class="form-control"
                      /> */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    status{" "}
                    {formserror.status && <span>-{formserror.status}</span>}
                  </td>
                  <td>
                    <div class="input-group mb-3">
                      <select
                        value={status}
                        class="form-control background"
                        name="status"
                        onChange={handleChange}
                      >
                        <option value="open">open</option>
                        <option value="inprogress">inprogress</option>
                        <option value="closed">closed</option>
                      </select>
                      {/* <input
                        type="text"
                        value={status}
                        onChange={handleChange}
                        name="status"
                        class="form-control"
                      /> */}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            {submit ? (
              <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                  <a class="navbar-brand"></a>
                  <div class="d-flex">
                    <button className="btn btn-light">cancel</button>
                    <input
                      type="submit"
                      value="submit"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </nav>
            ) : (
              <button onClick={handleSave}>save</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(App);
