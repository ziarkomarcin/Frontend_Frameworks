import {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Publication from "./Latest_Publicat/Latest_Publicat";
import Left_Public from "./Left_Public/Left_Public";
import {Font_Size} from '../../../styled_helpers/Font_Size';
import {Colors} from '../../../styled_helpers/Colors'
import {useSelector} from "react-redux";
import {IState} from "../../../reducers";
import {IPublicationsReducer} from "../../../reducers/publicationsReducers";

const Wrapper = styled.div`
  display:flex;
  background: ${Colors.white};
  width: 100%;
  height: auto;
  font-family: 'Raleway';
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-bottom: 20px;
  background-color: ${Colors.pastel};

`;

const Left = styled.div`
`;

const Publications = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem;
  h2{
      font-size: 2rem;
      padding-bottom: .5rem;
      font-weight: bold;
  }
`;

const LatestPublications: FC = () => {
    const { latestPublications } = useSelector<IState, IPublicationsReducer>(state => ({
        ...state.publications
    }));

    return (
        <Wrapper id='latest-publications-wrapper'>
            <Left>
                <Left_Public publication={latestPublications[0]}/>
            </Left>
            <Publications>
                <h2>Latest publications</h2>
                <div>
                    {latestPublications.slice(1, 4).map((publication) => {
                        return (
                            <Publication publication={publication}/>
                        );
                    })}
                </div>
                <Link to="/publications" id="link" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', padding: '.5rem',}}>...See more publications...</Link>
            </Publications>
        </Wrapper>
    );
}

export default LatestPublications;
