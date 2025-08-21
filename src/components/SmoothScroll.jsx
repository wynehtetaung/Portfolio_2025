import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const options = {
  damping: 0.07,
  thumbMinSize: 50,
  renderByPixels: true,
  alwaysShowTracks: false,
  continuousScrolling: false,
};
const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);
  return null;
};
export default SmoothScroll;
