<<<<<<< HEAD
export function generateToken(userId, roomId, userName) {
    return fetch(
      `https://choui-prebuilt.herokuapp.com/access_token?userId=${userId}&userName=${userName}&roomId=${roomId}&expired_ts=7200`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
  }
  
  export function randomID(len) {
    let result = "";
    if (result) return result;
    var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }
  
  export function getRandomName() {
    const names = [
      "Oliver",
      "Jake",
      "Noah",
      "James",
      "Jack",
      "Connor",
      "Liam",
      "John",
      "Harry",
      "Callum",
      "Mason",
      "Robert",
      "Jacob",
      "Jacob",
      "Jacob",
      "Michael",
      "Charlie",
      "Kyle",
      "William",
      "William",
      "Thomas",
      "Joe",
      "Ethan",
      "David",
      "George",
      "Reece",
      "Michael",
      "Richard",
      "Oscar",
      "Rhys",
      "Alexander",
      "Joseph",
      "James",
      "Charlie",
      "James",
      "Charles",
      "William",
      "Damian",
      "Daniel",
      "Thomas",
    ];
  
    return names[Math.round(Math.random() * names.length)];
  }
=======
export function generateToken(userId,roomId,userName){
    return fetch(`https://choui-prebuilt.herokuapp.com/access_token?userId=${userId}&userName=${userName}&roomId=${roomId}&expired_ts=7200`).then((res)=>res.json());

}

export function randomId(len){
    let result = "";
    if(result) return result;
    var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCXASDQWERTYHGFUIOLKJP";
    var maxPos = chars.length;
    len = len || 5;
    for (let i=0; i<len; i++){
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }

    return result;
}

export function getRandomName(){
    const names = [
        "Mohamed",
        "Bahir",
        "Hussain",
        "Yousuf",
        "Zakariya",
        "Younus",
        "Yahya",
        "Saaliha",
        "Hajar"
    ]

    return names[Math.round(Math.random()*names.length)];
}
>>>>>>> 9e83a1a (First Commit)
