import profileinage from './media/pic2.jpg'
const AboutMe= () => {
    return (
        <div id="aboutMe" class="jumbotron">
            <div class="jumbotron-info">
                <div class="container-fluid">
                    <div class="row">
                        <div id="personal-info" class="col-md-8">
                            {/* <br></br> */}
                            <h1>Hi, I'm Moris Gateno</h1>
                            <p>
                                Currently studying towards my Computer Science degree at Reichman university and working at
                                Behalf, a Fintech Israeli startup.<br></br>
                                I have a big passion for coding and always seek to enrich my abilities in this field.<br></br>
                                I am determined to learn and find ways to gain knowledge and experience through everything
                                in life.<br></br>
                                Furthermore, my colleagues and managers will testify that I am a quick learner, dedicated
                                team player with an ability to handle complex challenges, individually and collectively.
                            </p>
                        </div>
                        <div class="col-md-4">
                            <a id="profile-img" class="thumbnail">
                                <img src={profileinage}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutMe