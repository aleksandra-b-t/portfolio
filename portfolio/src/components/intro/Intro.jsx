import "./intro.css"

const Intro = () => {
  return (  
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi! I am Aleksandra</h2>
          <h1 className="i-name">Call me Ola</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Hiker</div>
              <div className="i-title-item">Enetranuor</div>
              <div className="i-title-item">Volonteer</div>
            </div>
          </div>
          <div className="i-desc-box">
            <p className="i-desc">
              A detail-oriented and enthusiastic software 
              engineer with experience in full stack 
              development. With education in psychology of 
              management, I am passionate about applying my 
              nical skills to create impactful projects to 
              make change. I continuously focus on self-improvement 
              and pride myself in being agile, organized 
              and thriving in a team environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Intro;
