module.exports = getDate;
function getDate() {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let dayInfo = today.toLocaleDateString("us-en", options);
  return dayInfo;
}
