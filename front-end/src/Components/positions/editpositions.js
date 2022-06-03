import Positioncandidate from "./positioncandidate";
import { useSelector } from "react-redux";

const Editpositions = (props) => {
  const { id } = props;

  const state = useSelector((state) => {
    return state.positions;
  });

  const filter = state.filter((ele) => {
    return ele._id === id;
  });

  return (
    <div>
      {filter.map((ele) => {
        return (
          <Positioncandidate
            id={ele._id}
            positionTypes={ele.positionType}
            clients={ele.client}
            skillSets={ele.skillSet}
            JodDescriptions={ele.JodDescription}
            numberOfPositionss={ele.numberOfPositions}
            earliestStartDates={ele.earliestStartDate}
            targetDates={ele.targetDate}
            releventExperiences={ele.releventExperience}
            projectLocations={ele.projectLocation}
            assigned_TA_SPOCs={ele.assigned_TA_SPOC}
            immediateBIllingImpacts={ele.immediateBIllingImpact}
            billingCurrencys={ele.billingCurrency}
            BillingRates={ele.BillingRate}
            practices={ele.practice}
            prioritys={ele.priority}
            statuss={ele.status}
          />
        );
      })}
    </div>
  );
};
export default Editpositions;
