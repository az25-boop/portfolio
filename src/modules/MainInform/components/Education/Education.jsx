import { icons as sprite } from 'shared/icons/index';
import style from './Education.module.scss';

const Education = () => {
  return (
    <div className={style.timeline}>
      <div className={style.educationWrapper}>
        <div className={style.iconBox}>
          <svg className={style.iconBook} width="16" height="16">
            <use xlinkHref={`${sprite}#icon-book`} />
          </svg>
        </div>
        <h3 className={style.educationTitle}>Education</h3>
      </div>

      <ul className={style.timelineList}>
        <li className={style.timelineItem}>
          <h4 className={style.timelineItemTitle}>
            GoIT - start your career in IT
          </h4>
          <span className={style.timelineItemYear}>2024-2025</span>
          <p className={style.timelineItemPosition}>Full Stack Developer</p>
        </li>

        <li className={style.timelineItem}>
          <h4 className={style.timelineItemTitle}>
            Poltava V.G. Korolenko National Pedagogical University
          </h4>
          <span className={style.timelineItemYear}>1996-2001</span>
          <p className={style.timelineItemPosition}>
            Faculty of Natural Sciences and Management
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Education;
