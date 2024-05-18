import "./productcardstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ProductCard = ({ title, image }) => {
  return (
    <>
      <div className="cardContainer">
        <img src={image} alt="bag" className="product-image" />
        <div className="product-details">
          <div className="nameDescription">
            <h3 className="product-name">{title}</h3>
            <div>
              <p className="product-description">
                Sign in or Create account to see pricing
              </p>
              <div>
                <FontAwesomeIcon icon={faHeart} color="black" size="xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;