import Marquee from "react-fast-marquee";
import HoverCard from "./HoverCard";
import { useNavigate } from 'react-router-dom';

const ProjectSlider = ({ slideData }) => {
  const navigate = useNavigate();
  return (
    <Marquee
      pauseOnHover={true}
      play={true}
      direction={'right'}
    >
      {slideData.map((cardData, i) => (
        <HoverCard key={i} image={cardData.image} title={cardData.title} action={() => navigate(`/my-work/${cardData.type}/${cardData.id}`)}/>
      ))}
    </Marquee>
  );
};
export default ProjectSlider;
