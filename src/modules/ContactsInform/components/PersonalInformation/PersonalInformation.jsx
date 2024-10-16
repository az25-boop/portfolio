import style from './PersonalInformation.module.scss';
import { imagesPhoto } from 'shared/images';

const PersonalInformation = () => {
  return (
    <div className={style.personalInform}>
      <div className={style.avatarBox}>
        <picture>
          <source
            media="(min-width: 1440px )"
            srcSet={`${imagesPhoto.photo} 1x, ${imagesPhoto.photo2x} 2x`}
          />
          <img
            className={style.photo}
            src={imagesPhoto.photo}
            alt="Man"
            width="80"
          />
        </picture>
      </div>
      <div>
        <h2 className={style.name}>Melnik Pavle</h2>
        <p className={style.position}>FrontEnd developer</p>
        <a
          className={`${style.downloadCV} ${style.position}`}
          href="https://drive.google.com/file/d/1HBBnaEL5FbLeacvf1CgyYIOTKzxszK4Y/view?usp=sharing" //https://drive.google.com/
          target="_blank"
        >
          Download_CV
        </a>
      </div>
    </div>
  );
};

export default PersonalInformation;
