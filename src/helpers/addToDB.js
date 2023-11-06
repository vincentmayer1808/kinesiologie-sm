const { db } = require("../firebase/firebase");

const addToDB = async (info) => {
    try {
      await db.collection("contact").add(info);

    } catch (err) {
      // console.log(err);
      window.alert(
        "Il y a eu une erreur, veuillez réessayer plus tard!"
      );
    }
  };
  export default addToDB