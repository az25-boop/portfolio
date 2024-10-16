import style from './ContactsInformation.module.scss';
import { icons as sprite } from 'shared/icons/index';

const ContactsInformation = () => {
  return (
    <div>
      <div className={style.separatorLine}></div>
      <ul className={style.contactList}>
        <li className={style.contactItem}>
          <div className={style.thumbIcon}>
            <svg className={`${style.iconContact}`} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-mail`} />
            </svg>
          </div>
          <div>
            <h2 className={style.titleContact}>Email</h2>
            <a
              href="mailto:orendapoltava@gmail.com"
              className={style.contactInform}
            >
              bratrostislav@gmail.com
            </a>
          </div>
        </li>

        <li className={style.contactItem}>
          <div className={style.thumbIcon}>
            <svg className={`${style.iconContact}`} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-smartphone`} />
            </svg>
          </div>
          <div>
            <h2 className={style.titleContact}>Phone</h2>
            <a href="tel:+38097*******" className={style.contactInform}>
              +38 (097) ***-**-**
            </a>
          </div>
        </li>

        <li className={style.contactItem}>
          <div className={style.thumbIcon}>
            <svg className={`${style.iconContact}`} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-calendar`} />
            </svg>
          </div>
          <div>
            <h2 className={style.titleContact}>Birthday</h2>
            <p className={style.contactInform}>December 25, 1978</p>
          </div>
        </li>

        <li className={style.contactItem}>
          <div className={style.thumbIcon}>
            <svg className={`${style.iconContact}`} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-geo`} />
            </svg>
          </div>
          <div>
            <h2 className={style.titleContact}>Location</h2>
            <p className={style.contactInform}>Poltava, Ukraine</p>
          </div>
        </li>
      </ul>
      <div className={style.separatorLine}></div>
    </div>
  );
};

export default ContactsInformation;
