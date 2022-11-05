import './index.scss';
import ScreenshotImage from '../../../assets/images/screenshot-header.png';

function Header() {
  return (
    <section className="Header">
      <div className="first">
        <h1 className="title">
          내 손 안의
          <br />
          길잡이,
          <br />
          현지야
        </h1>
        <p className="subtitle">
          나에게 딱 맞는 여행지 정보, 편리한 여행 계획표
          <br />
          당신의 여행에 현지야가 함께합니다.
        </p>
      </div>
      <div className="second">
        <img src={ScreenshotImage} alt="screenshot" />
      </div>
    </section>
  );
}

export default Header;
