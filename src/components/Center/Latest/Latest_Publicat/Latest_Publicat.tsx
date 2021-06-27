import {FC} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {IPublication} from "../../../../interfaces/IPublication";
import {Font_Size} from '../../../../styled_helpers/Font_Size';
import {Colors} from '../../../../styled_helpers/Colors'

const Wrapper = styled.div`
  display:flex;
  height:90px;
  margin-bottom: 1px;
`;

const PublicationImage = styled.div`
  height: 100%;
  width: 90px;
  background: url("${(props: {thumbnailSrc: string}) => props.thumbnailSrc}");
  background-size: cover;
`;

const PublicationContent = styled.div`
`;

const Title = styled.h3`
  font-size: ${Font_Size[20]};
  padding-bottom: 35px;
  color:${Colors.white};
  text-decoration: none;

`;

const WhoAndWhen = styled.div`
  display: flex;
  font-size: ${Font_Size[16]};
  align-items: center;
  height: fit-content;
`;

const CreationDate = styled.div`
  color: ${Colors.black};
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const ProfileImage = styled.img`
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

interface PublicationProps {
    className?: string;
    publication: IPublication
}

const Publication: FC<PublicationProps> = (props) => {

  return (
      <Wrapper>
          <div>
              <Link to="#">
                  <PublicationImage thumbnailSrc={props.publication?.thumbnailUrl} />
              </Link>
          </div>
          <PublicationContent>
              <Title>
                  <Link to='#' style={{ color: 'black', textDecoration: 'none'}}>
                      {props.publication?.title}
                  </Link>
              </Title>
              <WhoAndWhen>
                  <CreationDate>
                      {props.publication?.creationDate}
                  </CreationDate>
                  <Profile>
                      <ProfileImage src={props.publication?.author.photo.thumbnailUrl} />
                      {props.publication?.author.name}
                  </Profile>
              </WhoAndWhen>
          </PublicationContent>
      </Wrapper>
  );
}

export default Publication;
