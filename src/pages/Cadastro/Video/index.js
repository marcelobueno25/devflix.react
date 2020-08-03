import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/template/PageDefault';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, serCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll().then((resp) => {
        serCategorias(resp);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Nome do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button as="button" type="submit" style={{ marginRight: '20px' }}>
          Cadastrar
        </Button>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
