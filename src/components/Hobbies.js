import arsenallogo from './media/arsenal-logo.svg'
import wsllogo from './media/wsl2.png'

const Hobbies= () => {
    return (
        <div id="hobbies" className="jumbotron">
            <div className="jumbotron-info">
                <br></br>
                <h1>Hobbies:</h1>
                <p>
                    <br></br>
                    <b>Football</b><br></br>
                    Arsenal F.C.
                    <br></br><a href="https://www.arsenal.com/"><img className="logos" id="logo-arsenal"
                            src={arsenallogo}></img></a>
                <ul>
                    <li>Since I was little I have been an Arsenal fan. it all started thanks to my brother that has alwyas
                        been a big supporter.</li>
                    <li>My passion to Arsenal is something that is really hard to explain, but if I would describe it in one
                        sentence, I would say that each time Arsenal wins I feel like it's the best day of my life,
                        but on the other hand, when Arsenal loses, I feel my day or even my week is ruined.</li>
                </ul>
                </p>
                <br></br>
                <p>
                    <b>Surfing</b><br></br>
                    <a href="https://www.worldsurfleague.com/"><img className="logos" id="wsl-logo"
                            src={wsllogo}></img></a><br></br>
                <ul>
                    <li>I started surfing when I was 15 years old, and since then surfing became a huge part of my life.
                    </li>
                    <li>I surf every time I have the opportunity and I love watching professional surfers compete</li>
                    <li>I will quote a paragraph that descrides exactly what is surfing for me:</li>
                    <li>"Surfing feels like you have a free ride from Nature. Feels like you have harnessed the power and
                        are enjoying it, like you forget everything else in the world except the waves and you.</li>
                    <li>Feels like peace, quite if your waiting for the waves. Feels like Sun and Salt water are good for
                        you and helping you feel better.</li>
                    <li>Feels like you want to get another wave after you get one good one. Your adrenilne pumps up after a
                        good waves, All your akas and pains go away for a couple of minutes.</li>
                    <li>Your smiling when you go in even if you didnt catch a good wave. You tried it and enjoyed every
                        second of the session."</li>
                    <li><a href="https://qr.ae/pGzWje">credit to James Monty Smith</a></li>
                </ul>
                </p>
            </div>
        </div>
    );
}
export default Hobbies