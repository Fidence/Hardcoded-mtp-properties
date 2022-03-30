import Search from "../assets/svg/search.svg";
import Rating from "../assets/svg/white_star.svg";
import Price from "../assets/svg/Vector.svg";
import WhiteLocation from "../assets/svg/location-icon.svg";
import House from "../assets/svg/home.svg";
import Img12 from "../assets/images/img12.png";
import Img11 from "../assets/images/img11.png";
import Img10 from "../assets/images/img10.png";
import Img9 from "../assets/images/img9.png";
import Star from "../assets/svg/star-icon.svg";
import Naria from "../assets/svg/Naria.svg";
import Heart from "../assets/svg/bi_heart.svg";
import Dropdown from "../assets/svg/drop-down.svg";

const ViewProperties = () => {
  return (
    <div className="properties">
      <div className="properties__wrapper">
        <div className="available">
          <h2>Available Properties</h2>
          <div className="search">
            <img src={Search} alt="" />
            <input
              type="text"
              placeholder="Search for properties/ Enter property code"
            />
          </div>

          <div className="available__button">
            <p className="fiter">Filter By</p>

            <div className="btn__rating">
              <img src={Rating} alt="" />
              <span className="available_txt">Ratings</span>
            </div>

            <div className="btn__rating">
              <img src={Price} alt="" />
              <span className="available_txt">Price</span>
            </div>

            <div className="btn__location">
              <img src={WhiteLocation} alt="" />
              <span className="available_txt">Location</span>
            </div>

            <div className="btn__house">
              <img src={House} alt="" />
              <span className="house__txt">Type of House</span>
            </div>
          </div>
        </div>

        <div className="houses">
          <div className="houses__main">
            <div className="view">
              <img className="img12" src={Img12} alt="" />
            </div>
            <div className="houselocation">
              <p className="top">Ikeja, lagos</p>
              <h2 className="big">4 Bedroom Bungalow </h2>
              <p className="para">
                A fully furnished 4-bedroom apartment in a secured estate with
                24hours electricity and constant water supply
                <div className="rating">
                  <img src={Star} alt="" />
                  <span>4.7</span>
                </div>
              </p>
            </div>

            <div className="payment">
              <img
                src={Heart}
                width="24px"
                height="24px"
                alt=""
                className="heart"
              />
              <div className="naria">
                <img src={Naria} alt="" />
                <span className="bold">
                  20,000<span className="gray">/monthly</span>
                </span>
              </div>
              <button>View Details</button>
            </div>
          </div>

          {/*  */}

          <div className="houses__main">
            <div className="view">
              <img src={Img9} alt="" />
            </div>
            <div className="houselocatn2">
              <p className="top">Ikeja, lagos</p>
              <h4>Multi-level Terrace </h4>
              <p className="para">
                Multi-terrace building equipped with swimming pool, gym and game
                room
              </p>

              <div className="rating">
                <img src={Star} alt="" />
                <span>4.7</span>
              </div>
            </div>

            <div className="payment">
              <img
                src={Heart}
                width="24px"
                height="24px"
                alt=""
                className="heart"
              />
              <div className="naria">
                <img src={Naria} alt="" />
                <span className="bold">
                  120,000<span className="gray">/monthly</span>
                </span>
              </div>
              <button>View Details</button>
            </div>
          </div>

          {/*  */}

          <div className="houses__main">
            <div className="view">
              <img src={Img11} alt="" />
            </div>
            <div className="houselocatn">
              <p className="top">Ikeja, lagos</p>
              <h5 className="big">Semi-detached Duplex </h5>
              <p className="para">
                Semi-detached duplex found in the comfort of a friendly
                neighbohood with schools, cinema in proximity.{" "}
              </p>
              <div className="rating">
                <img src={Star} alt="" />
                <span>4.7</span>
              </div>
            </div>

            <div className="payment">
              <img
                src={Heart}
                width="24px"
                height="24px"
                alt=""
                className="heart"
              />
              <div className="naria">
                <img src={Naria} alt="" />
                <span className="bold">
                  100,000<span className="gray">/monthly</span>
                </span>
              </div>
              <button>View Details</button>
            </div>
          </div>

          {/*  */}

          <div className="houses__main">
            <div className="view">
              <img src={Img10} alt="" />
            </div>
            <div className="houselocatn">
              <p className="top">Ikeja, lagos</p>
              <h5 className="big">Semi-detached Duplex</h5>
              <p className="para">
                Semi-detached duplex found in the comfort of a friendly
                neighbohood with schools, cinema in proximity.{" "}
              </p>
              <div className="rating">
                <img src={Star} alt="" />
                <span>4.7</span>
              </div>
            </div>

            <div className="payment">
              <img
                src={Heart}
                width="24px"
                height="24px"
                alt=""
                className="heart"
              />
              <div className="naria">
                <img src={Naria} alt="" />
                <span className="bold">
                  100,000<span className="gray">/monthly</span>
                </span>
              </div>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className="load">
          <span>Load more</span>
          <img src={Dropdown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ViewProperties;
