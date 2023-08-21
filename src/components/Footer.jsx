import { facebook, linkedIn, gitHub, instagram } from "../assets";
import { styles } from "../utils/motion";
const Footer = () => {
  return (
    <>
      <div
        className={`${styles.paddingX} w-full flex flex-wrap justify-around items-center py-5 mt-10 bottom-0 bg-primary`}
      >
        <div>
            <p className="font-bold md:text-lg py-3">Developed by @Rao Rabi</p>
        </div>
        <ul className="flex items-center justify-around md:gap-x-6">
          <li>
            <a href="https://www.facebook.com/rabirao1039/" target="blank">
              <img src={facebook} height={70} width={70} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rao_rabi465/" target="blank">
              <img src={instagram} height={70} width={70} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rao-rabi/" target="blank">
              <img src={linkedIn} height={70} width={70} alt="linkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Rao-Rabi" target="blank">
              <img src={gitHub} height={70} width={70} alt="gitHub" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
