import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      <FeedPhotos setModalPhoto={setModalPhoto} />
      {modalPhoto && <FeedModal photo={modalPhoto} />}
    </div>
  );
};

export default Feed;
