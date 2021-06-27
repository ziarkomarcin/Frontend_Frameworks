import {FC, FormEvent, useState} from "react";
import styled from "styled-components";
import {Chat, FileRichtext, Person, Plus} from "react-bootstrap-icons";
import {useCustomEventListener} from "react-custom-events";
import {EditMode} from "../../../../data/ProfileAdditionalInfoData";
import UsersDropdown from "./UserDropDown/UserDropdown";
import {ISingleUser} from "../../../../interfaces/IUsers";
import AttachmentForm from "./AttachmentForm";
import { Colors } from "../../../../styled_helpers/Colors";
import { Font_Size } from "../../../../styled_helpers/Font_Size";

const Wrapper = styled.div`
  padding: 10px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.div`
  color: ${Colors.gray};
  font-size: ${Font_Size[16]};
`;

const SectionBody = styled.div`
  font-size: ${Font_Size[14]};
`;

const Attachment = styled.div`
  background: ${Colors.lightGray};
  padding: 5px 8px;
  margin: 5px 0;
`;

const AttachmentBody = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 2px;
`;

const Correspondent = styled(Attachment)`
  margin-left: 2px;
  button{
      border:none;
      background-color: ${Colors.lightGray};
  }
`;

const CorrespondentBody = styled.div`
  display: flex;
  align-items: center;
`;

const CorrespondentImage = styled.img`
  height: 25px;
  border-radius: 50%;
`;

const CorrespondentFullName = styled.div`
  margin-left: 5px;
`;

const Button = styled.button`
  width: fit-content;
  display: flex;
  gap: 7px;
  align-items: center;
  margin-left: 40px;
`;

interface ICorrespondent {
    id: number;
    name: string;
    photoUrl: string;
}

interface IData {
    hourlyFee: number;
    attachments: string[];
    correspondents: ICorrespondent[];
}

interface Props {
    editMode: boolean;
}

const HourlyFeeInput = styled.input`
  border: 1px solid ${Colors.lightGray};
`;

const ProfileInformations: FC<Props> = (props) => {
    const [data, setData] = useState<IData>({
        hourlyFee: 610,
        attachments: [
            'the_one_to_rule_them_all.pdf'
        ],
        correspondents: [
            {
                id: 5,
                name: 'Firstname Lastname',
                photoUrl: './images/sas.jpg'
            },
            {
                id: 6,
                name: 'Firstname Lastname',
                photoUrl: './images/sas.jpg'
            }
        ]
    });
    const [dataCopy, setDataCopy] = useState<IData>({...data});

    useCustomEventListener(EditMode.EnteredEditMode, () => {
        setDataCopy({...data});
    });

    useCustomEventListener(EditMode.Saved, () => {
    });

    useCustomEventListener(EditMode.Discarded, () => {
        setData({...dataCopy});
    });

    const handleHourlyFeeInput = (ev: FormEvent<HTMLInputElement>) => setData({...data, hourlyFee: +(ev.target as HTMLInputElement).value});

    const onAttachmentAdd = (name: string) => {
        setData({
            ...data,
            attachments: [
                ...data.attachments,
                name
            ]
        })
    };

    const onCorrespondentAdd = (user: ISingleUser) => {
        setData({
            ...data,
            correspondents: [
                ...data.correspondents,
                {
                    id: user.id,
                    name: user.name,
                    photoUrl: user.photo.thumbnailUrl
                }
            ]
        })
    };

    return (
        <Wrapper>
            <h2>Panel informations</h2>
            <br></br>
            <Section>
                <SectionTitle>Hourly fee</SectionTitle>
                <SectionBody>
                    {props.editMode ?
                        (<HourlyFeeInput value={data.hourlyFee} onInput={handleHourlyFeeInput} />) :
                        data.hourlyFee
                    } €/hour (Negociated)
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Terms & conditions</SectionTitle>
                <SectionBody>Monthly 10k€ retainer - see with Jeanny Smith</SectionBody>
                {data.attachments.map(attachment => {
                    return (
                        <Attachment>
                            <AttachmentBody>
                                <FileRichtext />
                                {attachment}
                            </AttachmentBody>
                        </Attachment>
                    );
                })}
                {props.editMode &&
                    (<AttachmentForm onAdd={onAttachmentAdd} />)
                }
            </Section>
            <Section>
                <h3>Services & projects</h3>
                <SectionBody>Corporate M&A and international acquisitions</SectionBody>
            </Section>
            <Section>
                <h3>Internal correspondents</h3>
                <SectionBody>
                    {data.correspondents.map(correspondent => {
                        return (
                            <Correspondent>
                                <CorrespondentBody>
                                    <CorrespondentImage src={correspondent.photoUrl} alt="userphoto"/>
                                    <CorrespondentFullName>
                                        {`${correspondent.name}`}
                                    </CorrespondentFullName>
                                    <Button>
                                        <Chat />
                                        Message
                                    </Button>
                                    <Button>
                                        <Person/>
                                        Profile
                                    </Button>
                                </CorrespondentBody>
                            </Correspondent>
                        )
                    })

                    }
                    {props.editMode &&
                        (<UsersDropdown onAdd={onCorrespondentAdd} />)
                    }
                </SectionBody>
            </Section>
        </Wrapper>
    );
}

export default ProfileInformations;
