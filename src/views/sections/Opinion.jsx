import { Section, SectionTitle, SectionDesc } from '../components/Section';
import { FeatureItem, FeatureList } from '../components/FeatureList';

import screenshot from '../../assets/images/screenshot-opinion.png';
import cameraIcon from '../../assets/images/icon-camera.png';
import shopIcon from '../../assets/images/icon-shop.png';
import bulbIcon from '../../assets/images/icon-bulb.png';

function Opinion() {
  return (
    <Section className="Opinion">
      <div>
        <img src={screenshot} alt="screenshot" />
      </div>
      <div>
        <SectionTitle>여행 장소 공유</SectionTitle>
        <SectionDesc>
          현지인만 아는 숨겨진 공간이 있다면, 마음에 드는 여행지를 발견했다면 다른 유저들과
          공유해보세요.
        </SectionDesc>
        <FeatureList>
          <FeatureItem icon={cameraIcon}>
            생생한
            <br />
            사진후기
          </FeatureItem>
          <FeatureItem icon={shopIcon}>
            먹어봐야 하는
            <br />
            맛집 메뉴
          </FeatureItem>
          <FeatureItem icon={bulbIcon}>
            다녀온 사람만
            <br />
            아는 꿀팁정보
          </FeatureItem>
        </FeatureList>
      </div>
    </Section>
  );
}

export default Opinion;
