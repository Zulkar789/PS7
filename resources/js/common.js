function mapSelect(data, text, value, targetId, defaultOpt) {
  data.forEach(function (itm) {
    $("<option>")
      .val(itm[value])
      .text(itm[text])
      .appendTo("#" + targetId);
  });
  if (defaultOpt)
    $("#" + targetId + '>option[value="' + defaultOpt + '"]').attr(
      "selected",
      true,
    );
}
function removeSelect(targetId, defaultOption) {
  $("#" + targetId + " option").remove();
  if (defaultOption)
    $("<option>")
      .text(defaultOption)
      .appendTo("#" + targetId);
}
function onEnterKey(ev, fn) {
  if (ev.keyCode == 13) {
    fn();
  }
  return true;
}
function getFirstDayOfMonth() {
  var curDate = new Date();
  curDate.setTime(now.valueOf());
  curDate.setDate(1);
  curDate.setHours(0, 0, 0, 0);
  return curDate;
}
function getLastDayOfMonth() {
  var curDate = getFirstDayOfMonth();
  curDate.setMonth(curDate.getMonth() + 1);
  curDate.setTime(curDate.getTime() - 1);
  return curDate;
}
function get30DaysDateFromNow() {
  var curDate = new Date(now.getTime());
  curDate.setDate(curDate.getDate() - 29);
  return curDate;
}
