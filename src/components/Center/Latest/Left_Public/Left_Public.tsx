import {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {IPublication} from "../../../../interfaces/IPublication";
import {Font_Size} from '../../../../styled_helpers/Font_Size';
import {Colors} from '../../../../styled_helpers/Colors'

const Wrapper = styled.div`
  display:flex;
  position: relative;
  height: 100%;
  width: 20rem;
  color: ${Colors.white};
`;

const Left_Pub_Img = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background: url("${(props: {thumbnailSrc: string}) => props.thumbnailSrc}");
  background-size: cover;
  z-index: 0;
`;

const Info_Public = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom:1.5rem;
  padding-left: .5rem;
  padding-right: .5rem;
`;

const Title = styled.div`
  font-size: 1.75rem;
  padding-bottom: 1rem;
`;

const More = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  font-size: .75rem;
  height: fit-content;
`;

const Pub_Date = styled.div`
`;

const Pub_Person = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`;

const Small_Img = styled.img`
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

interface PublicationProps {
    className?: string;
    publication: IPublication
}

const Left_Public: FC<PublicationProps> = (props) => {
  return (
    <Wrapper className={props.className}>
      <div>
          <Link to="#">
              <Left_Pub_Img thumbnailSrc={props.publication?.thumbnailUrl} />
          </Link>
      </div>
      <Info_Public>
          <Title >
            <Link to="#" style={{color: 'white', textDecoration: 'none'}}>
              {props.publication?.title}
            </Link>
          </Title>

          <More>

            <Pub_Date>
                {props.publication?.creationDate}
            </Pub_Date>
            
            <Pub_Person>
                <Small_Img src={props.publication?.author.photo.thumbnailUrl} />
                {props.publication?.author.name}
            </Pub_Person>

          </More>
      </Info_Public>
    </Wrapper>
  );
}

export default Left_Public;
