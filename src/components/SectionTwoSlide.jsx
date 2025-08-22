import Marquee from "react-fast-marquee";
import HoverCard from "./HoverCard";

const SectionTwoSlide = ({ slideData }) => {
  return (
    <Marquee
      pauseOnHover={slideData.action.pause}
      play={slideData.action.play}
      direction={slideData.action.direction}
    >
      {slideData.image.map((cardData, i) => (
        <HoverCard key={i} image={cardData.img} title={cardData.title} />
      ))}
    </Marquee>
  );
};
export default SectionTwoSlide;
