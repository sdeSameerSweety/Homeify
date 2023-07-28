 import React from 'react';

 import {FooterBox, FooterFirstHalf, UsefulLinks,Corporate, NeedHelp, DownloadApp, FooterSecondHalf, PopularCategories, PopularBrands, Cities, FooterThirdHalf, FooterLeft, FooterRight, FooterFourthHalf} from './footer1Css';
const Footer1 = () => {
  return (
    <>
      <FooterBox>
        <FooterFirstHalf>
          <Corporate>
            <ul>
              <li className="footer--headings">corporate us</li>
              <li>About Us</li>
              <li>Corporate Governance</li>
              <li>Pepperfry In the News</li>
              <li>Careers</li>
              <li>Pepperfry In the News</li>
            </ul>
          </Corporate>
          <UsefulLinks>
            <ul>
              <li className="footer--headings">Usefuk Links</li>
              <li>Explore Gift Cards</li>
              <li>Buy in Bulk</li>
              <li>Discover Our Brands</li>
              <li>Check Out Bonhomie, Our Blog</li>
              <li>Find a Studio</li>
            </ul>
          </UsefulLinks>
          <NeedHelp>
            <ul>
              <li className="footer--headings">Need Help?</li>
              <li>FAQs</li>
              <li>Policies</li>
              <li>Contact us</li>
            </ul>
          </NeedHelp>
          <DownloadApp>
              <h2>Download App</h2>
              <img src='./assets/images/apple.png'alt={"AppStore"} /><br/>
              <img src='./assets/images/google.png' alt={"GooglePlay"} />
          </DownloadApp>
        </FooterFirstHalf>
        <FooterSecondHalf>
          <PopularCategories>
            <h1 className="titles">Popular Categories</h1>
            <p>Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets, Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book Shelves, TV Unit, Wardrobes, Outdoor Furniture, Bar Cabinets, Wall Shelves, Photo Frames, Bed Sheets, Mattresses, Table Cloth, Living Room Furniture, Study Tables, Dining Room Furniture, Office Furniture, Bed Room Furniture, Dining Table, Beds, Sofas, Sofa Set, Trundle Bed</p>
          </PopularCategories>
          <PopularBrands>
            <h1 className="titles">Popular Brands</h1>
            <p>Mintwud, Woodsworth, CasaCraft, Amberville, Mudramark, Bohemiana, Mollycoddle, Mangiamo, Clouddio, Spacewood, Durian, Star India, Adiko Systems, Crystal Furnitech, Springtek, Story@Home, Parin, Furnitech, Trevi Furniture, Peachtree, Durfi, Muebles Casa, Duroflex</p>
          </PopularBrands>
          <Cities>
            <h1 className="titles">Cities we deliver to</h1>
            <p>Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai, Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore, Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh, Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal, Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur, Aurangabad and many more</p>
          </Cities>
        </FooterSecondHalf>
        <hr />
        <FooterThirdHalf>
          <FooterLeft>
            <h1 className="titles">We accept</h1>
            <div className='new' >
              <img src='./assets/images/visa.png'alt={"VisaLogo"} />
              <img src='./assets/images/mastercard.png' alt={"MasterCardLogo"} />
              <img src='./assets/images/footer-amexcard-logo.png' alt={"AmericanExpressLogo"} />
              <img src='./assets/images/footer-rupay-logo.png' alt={"RupayLogo"} />
            </div>
          </FooterLeft>
          <FooterRight>
          <h1 className="titles">Like what you see? You'll like us even more here</h1>
            <div className='social' >
              <img src='./assets/images/footer-facebook-logo.png' alt={"FacebookLogo"} />
              <img src='./assets/images/twitter.png' alt={"TwitterLogo"} />
              <img src='./assets/images/footer-youtube-logo.png' alt={"YoutubeLogo"} />
              <img src='./assets/images/footer-instagram-logo.png' alt={"InstagramLogo"} />
              <img src='./assets/images/footer-linkedin-logo.png' alt={"LinkedinLogo"} />
              {/* <img src={Pinterest} alt={"PinterestLogo"} /> */}
            </div>
          </FooterRight>
        </FooterThirdHalf>
        <hr />
        <FooterFourthHalf>
          <div className="leftside">
            <h3>Buy In Bulk</h3>
            <h3>Write A Testimonial</h3>
          </div>
          <div className="rightside">
            <h3>Whitehat</h3>
            <h3>Site Map</h3>
            <h3>Terms Of Use</h3>
            <h3>Privacy Policy</h3>
            <h3>Your Data & Security</h3>
            <h3>Grievance Redressal</h3>
          </div>
        </FooterFourthHalf>
      </FooterBox>
    </>
  )
}

export default Footer1