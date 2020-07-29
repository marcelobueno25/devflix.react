import React, { useState } from 'react';
import PageDefault from '../../../components/template/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute("name"),
      infosDoEvento.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([...categorias, values]);
        setValues(valoresIniciais);
      }}>


        <div>
          <label>
            Nome da Categoria:
        <input
              type="text"
              name="nome"
              value={values.nome}
              placeholder="Nome"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
        <textarea
              type='text'
              name='descricao'
              value={values.descricao}
              placeholder="Descrição"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
        <input
              type='color'
              name='cor'
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={index}>{categoria.nome} {categoria.descricao} {categoria.cor}</li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault >
  )
}

export default CadastroCategoria;
