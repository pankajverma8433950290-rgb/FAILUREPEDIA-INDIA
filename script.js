function submitStory() {
  let title = document.getElementById("title").value;
  let story = document.getElementById("story").value;

  if (title === "" || story === "") {
    document.getElementById("msg").innerText = "Please fill all fields";
    return;
  }

  document.getElementById("msg").innerText =
    "Story submitted! (Future version will save it)";

  document.getElementById("title").value = "";
  document.getElementById("story").value = "";
}
