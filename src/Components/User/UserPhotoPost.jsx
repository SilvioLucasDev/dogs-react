import React from "react";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import styles from "./UserPhotoPost.module.css";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import { PHOTO_POST } from "../../api";
import { useNavigate } from "react-router-dom";
import Head from "../Helpers/Head";

const UserPhotoPost = () => {
  const [img, setImg] = React.useState({});
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (nome.validate() && peso.validate() && idade.validate()) {
      const formData = new FormData();
      formData.append("img", img.raw);
      formData.append("nome", nome.value);
      formData.append("peso", peso.value);
      formData.append("idade", idade.value);

      const token = window.localStorage.getItem("token");

      const { url, options } = PHOTO_POST(formData, token);
      await request(url, options);
    }
  }

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
