import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helpers/Error";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RECOVERY } from "../../api";
import Head from "../Helpers/Head";

const LoginPasswordRecovery = () => {
  const login = useForm();

  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_RECOVERY({
        login: login.value,
        url: window.location.href.replace("recuperar", "resetar"),
      });
      await request(url, options);
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default LoginPasswordRecovery;
