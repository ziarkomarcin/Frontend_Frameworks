import {FC} from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import Window from './Slider_Elem/Slider_Elem';
import WorkspaceData from "../../../data/WorkspacesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    margin-top: 1rem;
    display:flex;
    flex-direction:column;
    margin-bottom: 1rem;
`;

const Good_Slider: FC = () => {
    const workspaceData = WorkspaceData;

    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
        <Wrapper>
            <Slider {...settings}>
                {workspaceData.map((workspace) => {
                    return (
                        <Window workspaceData={workspace}  key={workspace.id} />
                    );
                })}
            </Slider>
        </Wrapper>
    );
}
export default Good_Slider;