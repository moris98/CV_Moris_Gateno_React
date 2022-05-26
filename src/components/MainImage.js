import mainimage from './media/nelson-ndongala-mgYMwDUwcls-unsplash.jpg'
const MainImage= () => {
    return (
        <div>
            <img id="main-img" src={mainimage} class="img-fluid" alt="Responsive image"></img>
        </div>
    );
}
export default MainImage