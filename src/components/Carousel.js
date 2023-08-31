import Carousel from "react-material-ui-carousel";
import { Typography } from "@mui/material";

function Carousel() {
    const stepFourCarousel = [
        {
          title: "1",
          url: 'https://img.seoul.co.kr//img/upload/2023/07/24/SSC_20230724120003.jpg',
          desc: [
            "안전한 화장품을 위한 아로마티카의 시작",
            "No, 미네랄오일 & 실리콘 - 아로마테라피롤온, 마사지 오일 출시",
            "Free 파라벤 & 실리콘 - 로즈 스킨케어 라인 출시",
          ],
        },
        {
            title: "2",
            url: 'https://img.tvreportcdn.de/cms-content/uploads/2023/07/27/9ea38bbc-df63-4e31-9022-c6578c9d3133.jpg',
            desc: [
              "안전한 화장품을 위한 아로마티카의 시작",
              "No, 미네랄오일 & 실리콘 - 아로마테라피롤온, 마사지 오일 출시",
              "Free 파라벤 & 실리콘 - 로즈 스킨케어 라인 출시",
            ],
          },
          {
            title: "3",
            url: 'https://img.seoul.co.kr//img/upload/2023/07/24/SSC_20230724120003.jpg',
            desc: [
              "안전한 화장품을 위한 아로마티카의 시작",
              "No, 미네랄오일 & 실리콘 - 아로마테라피롤온, 마사지 오일 출시",
              "Free 파라벤 & 실리콘 - 로즈 스킨케어 라인 출시",
            ],
          },
          {
            title: "4",
            url: 'https://img.tvreportcdn.de/cms-content/uploads/2023/07/27/9ea38bbc-df63-4e31-9022-c6578c9d3133.jpg',
            desc: [
              "안전한 화장품을 위한 아로마티카의 시작",
              "No, 미네랄오일 & 실리콘 - 아로마테라피롤온, 마사지 오일 출시",
              "Free 파라벤 & 실리콘 - 로즈 스킨케어 라인 출시",
            ],
          },
      ];
      
      return (
        <Carousel cycleNavigation={true} navButtonsAlwaysVisible={true} height={600} animation="slide">
        {stepFourCarousel.map((content) => (
          <>
            <img src={content.url} />
            <Typography variant="h3" color="red">
              {content.title}
            </Typography>
            {content.desc.map((description) => (
              <li>{description}</li>
            ))}
          </>
        ))}
      </Carousel>
      )
}

export default Carousel;