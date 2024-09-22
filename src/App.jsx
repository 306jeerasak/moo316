import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);

  // ฟังก์ชันเพิ่มค่า level
  const feed = (amount) => {
    setLevel((prevLevel) => prevLevel + amount);
  };

  // ฟังก์ชันรีเซ็ตค่า level กลับไปที่ 0  
  const reset = () => {
    setLevel(0);
  };

  // เงื่อนไขเปลี่ยนรูปภาพ
  const imageSrc =
    level > 100
      ? "https://hilight.kapook.com/img_cms2/user/pimor/2024/daily/3_379.jpg" 
      : "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/59/88/8857124335059/thumbnail/8857124335059.jpg";

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1 style={{ textAlign: "center" }}>Level {level}</h1>

      {/* แสดงรูปภาพตามค่า level อยู่ตรงกลาง */}
      <img src={imageSrc} alt="หมูเด้ง" height={400 + level} />

      <br />

      {/* ปุ่มที่เพิ่มค่า level เมื่อกด */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={() => feed(5)} style={{ margin: "0 10px" }} aria-label="Feed with watermelon">
          <img
            src="https://image.makewebeasy.net/makeweb/0/K5HN2G4Kq/DefaultData/%E0%B9%81%E0%B8%95%E0%B8%87%E0%B9%82%E0%B8%A1_removebg_preview.png"
            alt="แตงโม"
            height={100}
          />
        </button>
        <button onClick={() => feed(10)} style={{ margin: "0 10px" }} aria-label="Feed with pumpkin">
          <img
            src="https://www.pholfoodmafia.com/wp-content/uploads/2018/08/1000x650Egg-Custard-in-Pumpkin.jpg"
            alt="ฟักทอง"
            height={100}
          />
        </button>
        <button onClick={() => feed(20)} style={{ margin: "0 10px" }} aria-label="Feed with grass">
          <img
            src="https://png.pngtree.com/background/20230526/original/pngtree-grass-plants-in-a-white-ceramic-pot-picture-image_2752490.jpg"
            alt="หญ้า"
            height={100}
          />
        </button>
      </div>

      <br />

      {/* ปุ่มเริ่มต้นใหม่ */}
      <button onClick={reset} style={{ margin: "20px", textAlign: "center" }} aria-label="Start over">
        Start Over
      </button>
    </div>
  );
}
