import Location from "../assets/svg/location.svg";
import Star from "../assets/svg/star-icon.svg";
import Star2 from "../assets/svg/star-filled.svg";
import Parking from "../assets/svg/parking-space.svg";
import Pets from "../assets/svg/pets-icon.svg";
import Laundry from "../assets/svg/laundry-icon.svg";
import Wifi from "../assets/svg/wifi.svg";
import Generator from "../assets/svg/standby-generator.svg";
import Customer from "../assets/svg/customer-care.svg";
import Water from "../assets/svg/water-icon.svg";
import Maintenance from "../assets/svg/maintenance-icon.svg";
import House from "../assets/svg/cleaner.svg";
import Security from "../assets/svg/security-icon.svg";
import Fumigation from "../assets/svg/fumigation-icon.svg";
import Furnished from "../assets/svg/fully-furnished.svg";
import Calendar from "../assets/svg/calendar.svg";
import Dropdown from "../assets/svg/drop-down.svg";
import Profile1 from "../assets/images/profile1.png";
import Profile2 from "../assets/images/profile2.png";




const ViewApartments = () => {
  return (
    <div className="apartments">
      <div className="apartments__main">
        <div className="apartments__container">
          <div className="bungalow">
            <div className="bungalow__overlay"></div>
          </div>

          <div className="inside__view">
            <div className="grid1"></div>
            <div className="grid2"></div>
            <div className="grid3"></div>
            <div className="grid__overlay">
              <div className="grid__overlaytxt">
                <p>+4</p>
              </div>
            </div>
          </div>
        </div>

        {/* second section */}

        <div className="info__main">
          <div className="apartments__info">
            <div className="houseinfo">
              <div className="roominfo">
                <p>4 Bedroom Bungalow</p>
              </div>

              <div className="priceinfo">
                <p className="txt__opacity">45,000/month</p>
              </div>
            </div>

            <div className="locationinfo">
              <div className="placeinfo">
                <div className="location__icon">
                  <img src={Location} alt="" />
                </div>
                <span className="place">Ikeja, Lagos</span>
              </div>

              <div className="rating">
                <div className="star__icon">
                  <img src={Star} alt="" />
                </div>
                <span className="rate">4.5</span>
              </div>
            </div>

            <div className="feature">
              <div className="feature__list">
                <ul>
                  <span className="listgold">Features</span>
                  <li>Description</li>
                  <li>Reviews</li>
                  <li>Location</li>
                </ul>
              </div>
              <p className="text">Features</p>

              <div className="grid__icons">
                <div className="icon1">
                  <img src={Parking} alt="" />
                  <p>Packing space</p>
                </div>

                <div className="icon1">
                  <img src={Pets} alt="" />
                  <p>Pets allowed</p>
                </div>
                <div className="icon1">
                  <img src={Laundry} alt="" />
                  <p>Laundry services</p>
                </div>
                <div className="icon1">
                  <img src={Wifi} alt="" />
                  <p>Free wifi</p>
                </div>
                <div className="icon1">
                  <img src={Generator} alt="" />
                  <p>Standby generator</p>
                </div>
                <div className="icon1">
                  <img src={Customer} alt="" />
                  <p>
                    Customer <br /> care
                  </p>
                </div>
                <div className="icon1">
                  <img src={Water} alt="" />
                  <p>Water service</p>
                </div>
                <div className="icon1">
                  <img src={Maintenance} alt="" />
                  <p>Maintenance</p>
                </div>
                <div className="icon1">
                  <img src={House} alt="" />
                  <p>House keeping</p>
                </div>
                <div className="icon1">
                  <img src={Security} alt="" />
                  <p>Security</p>
                </div>
                <div className="icon1">
                  <img src={Fumigation} alt="" />
                  <p>Fumigation</p>
                </div>
                <div className="icon1">
                  <img src={Furnished} alt="" />
                  <p>
                    Fully furnished <br /> (Where applicable)
                  </p>
                </div>
              </div>
            </div>
            <hr />

            <div className="description">
              <p className="destxt">Description</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                aliquet natoque in eu. <br /> Auctor potenti amet egestas
                convallis adipiscing id enim. Magna dignissim bibendum <br />{" "}
                pharetra sed iaculis porta adipiscing sed. Eu quam sagittis,
                suscipit tincidunt <br /> scelerisque.
              </p>
            </div>
            <hr />

            <div className="customers">
              <h4>Customer review</h4>
              <div className="customer__rating">
                <div className="customer__1">
                  <div className="customer__img">
                    <img src={Profile1} alt="" />
                  </div>
                  <div className="customer__info">
                    <span className="profile__1a">Eucharia Jen</span>
                    <p className="customer__txt">Uploaded 2 months ago</p>
                  </div>
                </div>

                <div className="customers__rating">
                  <div className="listflex">
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                  </div>

                  <p>5.0</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                aliquet natoque in eu. <br /> Auctor potenti amet egestas
                convallis adipiscing id enim.
              </p>

              {/* second customers profile */}

              <div className="customer__femi">
                <div className="customer__2">
                  <div className="customer__img2">
                    <img src={Profile2} alt="" />
                  </div>
                  <div className="customer__info2">
                    <span className="profile__2">Femi Sylva</span>
                    <p>Uploaded 2 months ago</p>
                  </div>
                </div>

                <div className="customers__rate">
                  <div className="listflex2">
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img className="smallstar" src={Star2} alt="" />
                    </li>
                  </div>

                  <p>4.5</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                aliquet natoque in eu. <br /> Auctor potenti amet egestas
                convallis adipiscing id enim.
              </p>
            </div>
          </div>

          {/* flex */}

          <div className="date__container">
            <div className="dates">
              <div className="start__date">
                <p>Start date</p>

                <div className="dateflex">
                  <div className="dateimg">
                    <img className="calendar" src={Calendar} alt="" />
                    <img className="dropdown" src={Dropdown} alt="" />
                  </div>
                </div>
              </div>

              <div className="end__date">
                <p>End date</p>

                <div className="dateflex">
                  <div className="dateimg">
                    <img className="calendar" src={Calendar} alt="" />
                    <img className="dropdown" src={Dropdown} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <hr className="linehr" />

            <div className="extraservices">
              <h5>Add extra services</h5>
              <div className="extrservices1">
                <div className="circle"></div>
                <span className="extra1">Rent</span>
                <span className="extra45">45,000/month</span>
              </div>

              <div className="extrservices1">
                <div className="circle"></div>

                <span className="extra1">Caution Deposite</span>
                <span className="extra12">1,200/month</span>
              </div>

              <div className="extrservices1">
                <div className="circle"></div>
                <span className="extra1">Service Charge</span>
                <span className="extra5">5,000/month</span>
              </div>

              <div className="extrservices__tax">
                <span className="tax">Tax</span>
                <span className="tax__amt">3,800</span>
              </div>

              <div className="extrservices__total">
                <span className="total">Total</span>
                <span className="total__amt">55,000/month</span>
              </div>

              <div className="btnn">
                <button>Reserve Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewApartments;
