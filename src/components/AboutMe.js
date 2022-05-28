import profileimage from "./media/pic2.jpg";
const AboutMe = () => {
  return (
    <div id="aboutMe" class="jumbotron">
      <div class="jumbotron-info">
        <div class="container-fluid">
          <div class="row">
            <div id="personal-info" class="col-md-8">
              <h1>Hi, I'm Moris Gateno</h1>
              <p>
                <ul>
                  <li>
                    A 2nd year Computer Science student at Reichman university
                    (Dean's List).
                  </li>

                  <li>
                    Currently working in Behalf, a Fintech Israeli company.
                  </li>

                  <li>
                    I have always had a big passion for coding and always seek
                    to enrich my abilities in this field.
                  </li>

                  <li>
                    I am determined to learn and find ways to gain knowledge and
                    experience through everything in life.
                  </li>

                  <li>Looking for my next adventure.</li>
                </ul>
              </p>
            </div>
            <div class="col-md-4">
              <a id="profile-img" class="thumbnail">
                <img src={profileimage} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
