import {FC, FormEvent, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useCustomEventListener} from "react-custom-events";
import {EditMode} from "../../../../data/ProfileAdditionalInfoData";
import { Colors } from "../../../../styled_helpers/Colors";
import { Font_Size } from "../../../../styled_helpers/Font_Size";

const Wrapper = styled.div`
  padding-left:15px;
  h2{
    font-weight: 500;
    font-size: ${Font_Size[22]};
    margin-bottom:30px;
  }
  .a{
    display:flex;
    margin-top:20px;
    padding-right:20px;
  }
  a{
    text-decoration:none;
    color: ${Colors.black};
    font-size: ${Font_Size[22]}
  }
`;

const Table = styled.table`
  width: 100%;
  & > thead {
    border-bottom: 1px solid ${Colors.lightGray};
  }
  & th {
    text-align: left;
  }
  tr{
      line-height:30px;
  }
  & .header{
      font-size: ${Font_Size[20]};
  }
  & tbody{
    button{
        border:none;
        background-color: ${Colors.white}
    }
  }
`;

const Input = styled.input`
  border: 1px solid lightgrey;
`;

interface IReview {
    name: string;
    entity: string;
    location: string;
    expertise: string;
    date: string;
}

interface Props {
    editMode?: boolean;
}

const ProfileInternalReviews: FC<Props> = (props) => {
    const data: IReview[] = [
        {
            name: 'Operation Ti...',
            entity: 'Renaul Co...',
            location: 'France',
            expertise: '#Tax',
            date: '20/01/2018'
        },
        {
            name: 'Op. Prometh...',
            entity: 'Renault HQ',
            location: 'USA',
            expertise: '#M&A',
            date: '20/02/2019'
        },
        {
            name: 'Op. Latandre...',
            entity: 'Renault Br...',
            location: 'Italia',
            expertise: '#Social',
            date: '20/02/2019'
        }
    ];
    const emptyProposal = {
        name: '',
        entity: '',
        location: '',
        expertise: '',
        date: '',
        firm: '',
    };

    const [proposals, setReview] = useState<IReview[]>(data);
    const [proposalsCopy, setReviewCopy] = useState<IReview[]>(data);
    const [proposalRecord, setReviewRecord] = useState<IReview>({...emptyProposal});

    const inputHandler = (ev: FormEvent<HTMLInputElement>) => {
        const target = ev.target as HTMLInputElement;

        setReviewRecord({
            ...proposalRecord,
            [target.name]: target.value
        });
    };

    const submitHandler = () => {
        setReview([
            ...proposals,
            proposalRecord
        ]);
        setReviewRecord({...emptyProposal});
    };

    useCustomEventListener(EditMode.EnteredEditMode, () => {
        setReviewCopy([...proposals]);
    });

    useCustomEventListener(EditMode.Saved, () => {
    });

    useCustomEventListener(EditMode.Discarded, () => {
        setReview([...proposalsCopy]);
    });

    return (
        <Wrapper>
            <h2>Internal reviews</h2>
            <Table>
                <thead>
                    <tr className="header">
                        <th>Name</th>
                        <th>Entity</th>
                        <th>Location</th>
                        <th>Expertise</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {proposals.map(proposal => {
                        return (
                            <tr>
                                <td>{proposal.name}</td>
                                <td>{proposal.entity}</td>
                                <td>{proposal.location}</td>
                                <td>{proposal.expertise}</td>
                                <td>{proposal.date}</td>
                                <td>                     </td>
                            </tr>
                        );
                    })}
                    {props.editMode &&
                        (
                            <>
                                <tr>
                                    <td><Input name='name' value={proposalRecord.name} onInput={inputHandler} /></td>
                                    <td><Input name='entity' value={proposalRecord.entity} onInput={inputHandler} /></td>
                                    <td><Input name='location' value={proposalRecord.location} onInput={inputHandler} /></td>
                                    <td><Input name='expertise' value={proposalRecord.expertise} onInput={inputHandler} /></td>
                                    <td><Input name='date' value={proposalRecord.date} onInput={inputHandler} /></td>
                                </tr>
                                <tr>
                                    <td colSpan={6}>
                                        <button onClick={submitHandler}>+ Add</button>
                                    </td>
                                </tr>
                            </>
                        )
                    }
                </tbody>
            </Table>
            <div className='a'>
                <Link to='#'>See more Reviews</Link>
            </div>
        </Wrapper>
    );
}
export default ProfileInternalReviews;


