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
    justify-content:flex-end;
    padding-right:20px;
  }
  a{
    text-decoration:none;
    color: ${Colors.best_red};
    font-size: 1.5rem;
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
  border: 1px solid ${Colors.lightGray};
`;

interface IProposal {
    name: string;
    entity: string;
    location: string;
    expertise: string;
    date: string;
    firm: string;
}

interface Props {
    editMode?: boolean;
}

const ProfileProposals: FC<Props> = (props) => {
    const data: IProposal[] = [
        {
            name: 'Operation Ti...',
            entity: 'Renaul Co...',
            location: 'France',
            expertise: '#Tax',
            date: '20/01/2018',
            firm: 'Racine',
        },
        {
            name: 'Op. Prometh...',
            entity: 'Renault HQ',
            location: 'USA',
            expertise: '#M&A',
            date: '20/02/2019',
            firm: 'Clifford chance',
        },
        {
            name: 'Op. Latandre...',
            entity: 'Renault Br...',
            location: 'Italia',
            expertise: '#Social',
            date: '20/02/2019',
            firm: 'SVZ',
        },
    ];
    const emptyRecord = {
        name: '',
        entity: '',
        location: '',
        expertise: '',
        date: '',
        firm: '',
    };

    const [proposals, setProposals] = useState<IProposal[]>(data);
    const [proposalsCopy, setProposalsCopy] = useState<IProposal[]>(data);
    const [proposalRecord, setProposalRecord] = useState<IProposal>({...emptyRecord});

    const inputHandler = (ev: FormEvent<HTMLInputElement>) => {
        const target = ev.target as HTMLInputElement;

        setProposalRecord({
            ...proposalRecord,
            [target.name]: target.value
        });
    };

    const submitHandler = () => {
        setProposals([
            ...proposals,
            proposalRecord
        ]);
        setProposalRecord({...emptyRecord});
    };

    useCustomEventListener(EditMode.EnteredEditMode, () => {
        setProposalsCopy([...proposals]);
    });

    useCustomEventListener(EditMode.Saved, () => {
    });

    useCustomEventListener(EditMode.Discarded, () => {
        setProposals([...proposalsCopy]);
    });

    return (
        <Wrapper>
            <h2>Proposals</h2>
            <Table>
                <thead>
                    <tr className="header">
                        <th>Name</th>
                        <th>Entity</th>
                        <th>Location</th>
                        <th>Expertise</th>
                        <th>Date</th>
                        <th>Firm</th>
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
                                <td>{proposal.firm}</td>
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
                                    <td><Input name='firm' value={proposalRecord.firm} onInput={inputHandler} /></td>
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
                <Link to='#'>See more proposals</Link>
            </div>
        </Wrapper>
    );
}

export default ProfileProposals;
