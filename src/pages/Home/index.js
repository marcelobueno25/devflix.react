import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/template/PageDefault';
import animationData from '../../lotties/20556-coffee-like.json';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((resp) => {
        setDadosIniciais(resp);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
          />
          <span style={{ color: '#f9d69f', fontSize: '22px' }}>loading...</span>
        </div>
      )}

      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription="O que é Front-end? Trabalhando na área os termos HTML,CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a vanessa!"
          />

          {
            dadosIniciais.map((event, index) => (
              <Carousel
                key={dadosIniciais[index].titulo}
                ignoreFirstVideo
                category={dadosIniciais[index]}
              />
            ))
          }
        </>
      )}

    </PageDefault>
  );
}

export default Home;
