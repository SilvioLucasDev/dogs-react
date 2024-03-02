import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../Helpers/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPoto() {
      const { url, options } = PHOTO_GET(id);
      await request(url, options);
    }
    fetchPoto();
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  return null;
};

export default Photo;
