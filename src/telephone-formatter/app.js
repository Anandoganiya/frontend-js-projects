const phone = document.getElementById("phone");

phone.addEventListener("input", () => {
  phone.value = formatStr(phone.value);
});

const getStrWithNumOnly = (str) =>
  [...str].filter((s) => Number.isInteger(+s) && s !== " ").join("");

function formatStr(str) {
  const numStr = getStrWithNumOnly(str);
  const formatedString =
    numStr.length > 3
      ? `+(${numStr.substring(0, 3)}) - ${numStr.substring(3)}`
      : numStr;
  return formatedString;
}
