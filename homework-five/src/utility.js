export function showToast(message, type = "success") {
  const toast = document.querySelector("#toast");

  //   reset
  toast.innerHTML = "";
  toast.className = "toast";

  let icon;
  if (type === "success") {
    icon = "./src/assets/success.svg";
    toast.classList.add("success");
  } else if (type === "error") {
    icon = "./src/assets/error.svg";
    toast.classList.add("error");
  }

  const toastIcon = document.createElement("img");
  toastIcon.src = icon;
  toast.appendChild(toastIcon);

  const toastMessage = document.createElement("p");
  toastMessage.innerHTML = message;
  toast.appendChild(toastMessage);
}
