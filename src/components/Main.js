import ProTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../style.scss';


function Main({ coverImg, title, id }) {
  const Main = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    margin-bottom: 30px;
    padding: 30px;
    background-color: #000;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 15px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.03);
    backface-visibility: hidden;

    img {
      width: 100%;
    }
    h2 {
      font-size: 20px;
      text-align: center;
    }
    a {
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #FF004F;
      }
    }
  `;

  return (
    <Main
      onMouseEnter={() => {
        document.querySelector('.movies-wrap').style.animationPlayState = 'paused';
      }}
      onMouseLeave={() => {
        document.querySelector('.movies-wrap').style.animationPlayState = 'running';
      }}
    >
      <img src={coverImg} />
      <div className='text'>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
      </div>
    </Main>
  );
}

Main.ProTypes = {
  coverImg: ProTypes.string.isRequired,
  title: ProTypes.string.isRequired,
};

export default Main;