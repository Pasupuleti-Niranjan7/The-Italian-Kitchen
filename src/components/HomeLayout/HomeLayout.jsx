
import HomeAboutUs from "./HomeAboutUs";
import HomeBanner from "./HomeBanner"
import HomeContact from "./HomeContact";
import HomeEndingbBanner from "./HomeEndingBanner";
import HomeMenu from "./HomeMenu";
import HomeOverlay from "./HomeOverlay";
import HomeSeconOverlay from "./HomeSecondOverlay";
import HomeServices from "./HomeServices";
import HomeTestimonials from "./HomeTestimonials";

let HomeLayout = () => {
        return (
          <>
            <main className="overflow-hidden">
              <HomeBanner />
              <HomeAboutUs />
              <HomeOverlay />
              <HomeMenu />
              <HomeServices />
              <HomeSeconOverlay />
              <HomeTestimonials />
              <HomeContact />
              <HomeEndingbBanner />
            </main>
          </>
        );
}

export default HomeLayout