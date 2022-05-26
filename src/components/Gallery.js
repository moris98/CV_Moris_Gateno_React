import pic1 from './media/pic1.jpg'
import pic2 from './media/pic2.jpg'
import pic3 from './media/pic3.jpg'
import pic4 from './media/pic4.jpg'
import pic5 from './media/pic5.jpg'
import pic6 from './media/pic6.jpg'
import pic7 from './media/pic7.jpg'
import pic8 from './media/pic8.jpg'

const Gallery= () => {
    return (
        <div id="gallery" class="jumbotron">
            <div class="jumbotron-info">
                <br></br>
                <h1>My Gallery:</h1>
                <div>
                    <div class="row">
                        <div class="col-xs-6 col-md-3">
                            <a class="thumbnail">
                                <img src={pic1} alt="Moris in Portugal" ></img>
                            </a>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <a class="thumbnail">
                                <img src={pic2} ></img>
                            </a>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <a class="thumbnail">
                                <img src={pic3} ></img>
                            </a>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <a class="thumbnail">
                                <img src={pic4} ></img>
                            </a>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <a class="thumbnail">
                                <img src={pic5} ></img>
                            </a>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <a class="thumbnail">
                                <img src={pic6} ></img>
                            </a>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <a class="thumbnail">
                                <img src={pic7} ></img>
                            </a>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <a class="thumbnail">
                                <img src={pic8} ></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Gallery