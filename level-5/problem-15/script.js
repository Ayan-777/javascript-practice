const likbtn = document.getElementById("likebtn");
const unlikbtn = document.getElementById("unlikebtn");
const message = document.getElementById("message");
const messageUn = document.getElementById("messageUn");

let likeCount = 0;
let unlikeCount = 0;

let reaction = "none";

likbtn.addEventListener("click", () => {
  if (reaction === "none") {
    likeCount++;
    reaction = "like";
  } else if (reaction === "like") {
    likeCount--;
    reaction = "none";
  } else if (reaction === "dislike") {
      unlikeCount--;
      likeCount++;
      reaction = "like";
    }
  message.innerHTML = `❤️ Liked ${likeCount}`;
  messageUn.innerHTML = `🤍 Unliked ${unlikeCount}`;
});

unlikbtn.addEventListener("click", () => {
  if (reaction === "none") {
    unlikeCount++;
    reaction = "dislike";
  } else if (reaction === "dislike") {
    unlikeCount--;
    reaction = "none";
  }else if(reaction === 'like'){
    likeCount--;
    unlikeCount++;
    reaction = 'dislike'
  }
  message.innerHTML = `❤️ Liked ${likeCount}`;
  messageUn.innerHTML = `🤍 Unliked ${unlikeCount}`;
});
