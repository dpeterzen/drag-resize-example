import PropTypes from "prop-types";
import style from './YoutubeEmbed.module.css'; // Assuming you have a CSS file for styles

const YoutubeEmbed = ({ embedId }) => (
  <div className={style.videoResponsive}>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;