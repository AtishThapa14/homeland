import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";
import { db } from "../utils/firebase";
function User() {
  const userColRef = collection(db, "users");
  const handleAddUser = () => {
    try {
      addDoc(userColRef, {
        name: "Ram",
        age: 20,
        email: "test@gmail.com",
        timestamp: serverTimestamp(),
        address: "usa",
      });
      alert("user added successfully");
    } catch (e) {
      alert("Error in addin user");
      console.log("error : ", e);
    }
  };
  return (
    <>
      <h1>User Page</h1>
      <button onClick={handleAddUser}>Add User</button>
    </>
  );
}

export default User;
