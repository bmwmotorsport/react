import axios from "axios";
import { useEffect, useState } from "react";

function Random_Img() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const fetchImage = () => {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((res) => {
          setImgUrl(res.data.message);
          console.log(res.data.message);
        })
        .catch((err) => {
          console.error("Error fetching image:", err);
        });
    };

    // Initial image fetch
    fetchImage();

    // Start interval for fetching image every 5 seconds
    const intervalId = setInterval(fetchImage, 2000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Random Dog Image (Changes every 2 seconds)</h2>
      {imgUrl && <img src={imgUrl} alt="Random Dog" width={300} />}
    </div>
  );
}

export default Random_Img;
