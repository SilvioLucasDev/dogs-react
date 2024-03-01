import React from "react";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import PhotoContent from "../Photo/PhotoContent";
import styles from "./FeedModal.module.css";
import { PHOTO_GET } from "../../api";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPoto() {
      const { url, options } = PHOTO_GET(photo.id);
      await request(url, options);
    }
    fetchPoto();
  }, [request, photo]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
