 function updateClock() {
      let now = new Date();
  

      // Time
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let ampm = hours >= 12 ? "PM" : "AM";
  

      hours = hours % 12;
      hours = hours ? hours : 12; // 0 ko 12 banane ke liye
  

      hours = String(hours).padStart(2, "0");
      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");
  

      document.getElementById("clock").innerText =
        `${hours}:${minutes}:${seconds} ${ampm}`;
  

      // Date
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      let todayDate = now.toLocaleDateString("en-US", options);
  

      document.getElementById("date").innerText = todayDate;
    }

    setInterval(updateClock, 1000);

    updateClock(); 
