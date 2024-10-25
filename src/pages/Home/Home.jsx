import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <div className="home-img">
        <img
          src="/_multipages/human.jpg"
          alt=""
          style={{ borderRadius: "50%" }}
        />
        <div>
          <p>66075854 นิติพน อุดมโภชน์</p>
          <p>กำลังศึกษาที่มหาวิทยาลัยศรีปทุม </p>
          <p>สาขาวิทยาการคอมพิวเตอร์</p>
        </div>
      </div>
      <div className="home-text">
        <p> <span className="bi bi-circle-fill"></span> <b>CSI 205 Front End Software Development</b></p>
        <div className="home-text-detail">
        <p><b>Skill :</b> HTML, CSS, JavaScript, React</p>
        <p><b>Github :</b> <a href="https://github.com/Nitiphon-Udomphot" target="_blank" >https://github.com/Nitiphon-Udomphot</a></p>
        <p><b>Email :</b> nitphon.udo@spumail.net</p>
        </div>  
        
      </div>
    </div>
  );
}

export default Home;
