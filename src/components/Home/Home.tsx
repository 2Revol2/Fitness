import { SelectedPage } from "../../shared/types";
import { ActionButton } from "../../shared/ActionButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import HomePageText from "../../assets/HomePageText.webp";
import HomePageGraphic from "../../assets/HomePageGraphic.webp";
import SponsorForbes from "../../assets/SponsorForbes.webp";
import SponsorFortune from "../../assets/SponsorFortune.webp";
import SponsorRedBull from "../../assets/SponsorRedBull.webp";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md: pb-0">
      {/* Image and main header */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="w-full sm:w-[100%] md:w-3/5 mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* Action */}
          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* image */}
        <div>
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>
      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img src={SponsorRedBull} alt="red-bull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
