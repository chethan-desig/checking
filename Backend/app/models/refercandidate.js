// const mongoose = require("mongoose");

// const task = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, "mandatory"],
//   },
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
//   duedate: {
//     type: Date,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Task = mongoose.model("Task", task);

// module.exports = Task;

const mongoose = require("mongoose");

const Refercandidate = new mongoose.Schema({
  skillSet: {
    type: String,
    required: [true, "fill the required skillset"],
  },
  candidatename: {
    type: String,
    required: [true, "fill the candidatename"],
  },
  emailaddress: {
    type: String,
    required: [true, "fill the emailaddress"],
  },
  contactnumber: {
    type: String,
    required: [true, "fil the contactnumber"],
  },
  highestqualification: {
    type: String,
    required: [true, "fill the highestqualification "],
  },
  otherqualification: {
    type: String,
    required: [true, "fill the otherqualification"],
  },
  universitycollege: {
    type: String,
    required: [true, "fill the university college"],
  },
  currentemployer: {
    type: String,
    required: [true, "fill the currentemployer"],
  },
  currentjobtittle: {
    type: String,
    required: [true, "fill the currentjobtittle"],
  },
  currentctc: {
    type: String,
    required: [true, "fill the currentctc"],
  },
  expectedctc: {
    type: String,
    required: [true, "fill the expectedctc"],
  },
  currentvariablepay: {
    type: String,
    required: [true, "fill the currentvariablepay"],
  },
  noticeperiod: {
    type: String,
    required: [true, "fill the noticeperiod"],
  },
  currentaddress: {
    type: String,
    required: [true, "fill the currentaddress"],
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: String,
    required: [true, "fill the zipcode"],
  },
  permanentaddress: {
    type: String,
    required: [true, "fill the permanentaddress"],
  },
  permanentcountry: {
    type: String,
  },
  permanentstate: {
    type: String,
  },
  permanentzipcode: {
    type: String,
    required: [true, "fill the zipcode"],
  },
  pancard: {
    type: String,
    required: [true, "fill the pancard"],
  },
  aadharcard: {
    type: String,
    required: [true, "fill the aadharcard"],
  },
  linkedinprofile: {
    type: String,
    required: [true, "fill the linkedinprofile"],
  },
  website: {
    type: String,
    required: [true, "fill the website"],
  },
});

const Refering = mongoose.model("refercandidate", Refercandidate);

module.exports = Refering;
