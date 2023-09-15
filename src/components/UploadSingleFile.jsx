import React, { useEffect, useState } from 'react'
import { storage } from '../fisebase/configFirebase'
import { getDownloadURL, uploadBytes, ref, listAll } from 'firebase/storage';
import ReactPlayer from "react-player";

export default function UploadSingleFile() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);


    // tạo 1 tham chiếu đến thư mục chứa ảnh trên firebase
    const imageListRef = ref(storage, "images/");

    // hàm upload đc file lên firebase
    const uploadFiles = (files) => {
        // phải xử lí đc tác vụ thêm nhiều file => bất đồng bộ => sử dụng Promise
        Promise.all(
            files.map(file => {
                // tạo 1 tham chiếu <=> tạo folder trên firebase
                const imageRef = ref(storage, `image/${file.name}`);
                return uploadBytes(imageRef, file).then((snapshot) => {
                    return getDownloadURL(snapshot.ref);
                });
            })
        ).then((urls) => {
            // trả về danh sácnh các urls
            setImageUrls((prev) => [...prev, urls]);
        })
    }

    const handleSelectFiles = (e) => {
        // lấy tất cả các giá trị trong ô input có type="file"
        const files = Array.from(e.target.files);
        setImageUpload(files);
    }


    // khi click vào but upload thì tiến hành upload lên firebase 
    const handleUpload = (e) => {
        if (!imageUpload) {
            return;
        } else {
            uploadFiles(imageUpload);
        }
    }

    // lấy url trên firebase
    useEffect(() => {
        listAll(imageListRef).then(response => {
            // response trả về là 1 mảng danh sách các url
            response.items.forEach(item => {
                getDownloadURL(item).then(url => {
                    // danh sách url
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        })
    },[])

  return (
      <div>
          <h1>Danh sách hình ảnh</h1>
          <div>
              {imageUrls.map((url) => (
                  <ReactPlayer url={url} controls={true} />
                //   <img src={url} alt='ảnh' key={url} height={200} width={200} />
              ))}
          </div>
          <input type="file" onChange={handleSelectFiles} multiple={true} />
          <button onClick={handleUpload}>Upload</button>
    </div>
  )
}
