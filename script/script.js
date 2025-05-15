document.getElementById("showBtn").addEventListener("click", () => {
    const frame = document.getElementById("iframe-wrapper");
    frame.style.display = "block";
});
  

// document.querySelectorAll(".showBtn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const targetId = btn.getAttribute("data-target");
//     const frame = document.getElementById(targetId);
//     if (frame) {
//       frame.style.display = "block";
//     }
//   });
// });

  