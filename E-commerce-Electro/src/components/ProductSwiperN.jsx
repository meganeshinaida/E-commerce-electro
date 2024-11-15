
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/assets.js'
const ProductSwiperN = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
  return (
    <div className="container">
       <Slider {...settings}>
      <div className="card">
        <img src={''} className="w-16"  alt="" />
        <h3>1</h3>
      </div>
      <div className="card">
        <img src="../assets/blender1.jpg " className="w-16"  alt="" />
        <h3>2</h3>
      </div>
      <div className="card">
        <img src="../assets/blender1.jpg " className="w-16"  alt="" />
        <h3>3</h3>
      </div>
      <div className="card">
        <img src="../assets/blender1.jpg " className="w-16"  alt="" />
        <h3>4</h3>
      </div>
      <div className="card">
        <img src="../assets/blender1.jpg " className="w-16"  alt="" />
        <h3>5</h3>
      </div>
      <div className="card">
        <img src="../assets/blender1.jpg " className="w-16"  alt="" />
        <h3>6</h3>
      </div>
    </Slider>
    </div>
  )
}

export default ProductSwiperN
