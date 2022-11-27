import axios from "../snowpack/pkg/axios.js";
window.addEventListener("load", () => {
  setup();
});
function setup() {
  const form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = getData();
      submitRentalForm(data);
      form.reset();
    });
  }
}
function getData() {
  const data = {
    templateId: "d-2258e2bd67f84eb794cd2bf76c01ac49",
    firstName: getValue("firstName"),
    lastName: getValue("lastName"),
    birthDate: getValue("birthDate"),
    phoneNumber: getValue("phoneNumber"),
    email: getValue("email"),
    coFirstName: getValue("coFirstName"),
    coLastName: getValue("coLastName"),
    curRent: getValue("curRent"),
    lengthOfStay: getValue("lengthOfStay"),
    address: getValue("address"),
    address2: getValue("address2"),
    city: getValue("city"),
    state: getValue("state"),
    zip: getValue("zip"),
    llname: getValue("llname"),
    llphone: getValue("llphone"),
    pllname: getValue("pllname"),
    pllphone: getValue("pllphone"),
    employer: getValue("employer"),
    employerPhone: getValue("employerPhone"),
    businessAddress: getValue("businessAddress"),
    tenure: getValue("tenure"),
    income: getValue("income"),
    priorEmployer: getValue("priorEmployer"),
    priorEmployerPhone: getValue("priorEmployerPhone"),
    priorBusinessAddress: getValue("priorBusinessAddress"),
    priorTenure: getValue("priorTenure"),
    priorIncome: getValue("priorIncome"),
    referenceName: getValue("referenceName"),
    referencePhone: getValue("referencePhone"),
    referenceAddress: getValue("referenceAddress"),
    referenceLength: getValue("referenceLength"),
    referenceJob: getValue("referenceJob"),
    relativeName: getValue("relativeName"),
    relativePhone: getValue("relativePhone"),
    relativeAddress: getValue("relativeAddress"),
    relativeRelation: getValue("relativeRelation"),
    relativeJob: getValue("relativeJob"),
    bankruptcy: getRadio("radio_1", "radio_2"),
    evicted: getRadio("radio_3", "radio_4"),
    refusedRent: getRadio("radio_5", "radio_6"),
    agreement: getRadio("radio_7", "radio_8"),
    signature: getValue("signature"),
    date: getValue("date")
  };
  return data;
}
function getRadio(id1, id2) {
  const r1 = document.getElementById(id1);
  if (r1 && r1.checked) {
    return "Yes";
  }
  const r2 = document.getElementById(id2);
  if (r2 && r2.checked) {
    return "No";
  }
  return "";
}
function getValue(id) {
  const obj = document.getElementById(id);
  if (obj) {
    return obj.value;
  }
  return "";
}
async function submitRentalForm(data) {
  const err = await axios.post("https://gila-valley-rentals-api-production.up.railway.app/api/email", data).then(() => null, (err2) => err2).then(() => {
    alert("Your application has been submitted! You will recieve an email with a copy of your submission.");
    document.location.href = "/index.html";
  });
  console.log(err);
}
