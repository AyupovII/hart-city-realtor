import style from './Banner.module.scss'
import BannerImg from '../../assets/img/banner-background.png'

const Banner: React.FC = () => {
    return (
        <section>
            <div className={style.banner}>
                <div className={style.banner__content}>
                    <h1 className={style.banner__title}>Кабинет агента <br />
                        «HART»</h1>
                    <p className={style.banner__description}>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами,
                        когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста
                        или продемонстрировать типографику в деле.</p>
                </div>
                <img src={BannerImg} alt="BannerImg" className={style.banner__img} />

            </div>
        </section>
    )
}

export default Banner