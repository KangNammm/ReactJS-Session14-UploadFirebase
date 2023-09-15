import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGamQPsUCitTCdVdeNBVid72bF25oC0KM",
  authDomain: "project-module02-7ee24.firebaseapp.com",
  projectId: "project-module02-7ee24",
  storageBucket: "project-module02-7ee24.appspot.com",
  messagingSenderId: "55150247657",
  appId: "1:55150247657:web:d27e53ad21ad79c95b3a78"
};

// Khởi tạo firebase
const app = initializeApp(firebaseConfig);
// tạo tham chiếu đến dịch vụ lưu trữ
// được sử dụng để tham chiếu trong toàn bộ ứng dụng
const storage = getStorage(app);


// export ra bên ngoài để sử dụng
export {storage}