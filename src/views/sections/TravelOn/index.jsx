import './index.scss';
import ScreenshotImage from '../../../assets/images/screenshot-travelon.png';

function TravelOn() {
  return (
    <section className="TravelOn">
      <div className="first">
        <h1 className="title">여행 On</h1>
        <p className="subtitle">
          어떤 여행을 가고 싶은지 포스팅하고, 장소를 추천받으세요!
          <br />
          전국 방방곡곡의 현지인들이 답변해드려요.
        </p>
      </div>
      <div className="second">
        <img src={ScreenshotImage} alt="screenshot" />
      </div>
    </section>
  );
}

export default TravelOn;
