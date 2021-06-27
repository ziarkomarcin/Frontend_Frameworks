import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import Filter from "./Filter";
import _ from "lodash";
import {FC, FormEvent, useEffect, useState} from "react";
import { Colors} from "../../../styled_helpers/Colors";
import { Font_Size } from "../../../styled_helpers/Font_Size";
import { getPhoto } from "../../../api/photoAPI";
import { IEntity } from "../../../interfaces/IEntity";
import { IFilter } from "../../../interfaces/IFilter"

const Wrapper = styled.div``;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    button{
        outline: none;
        border: none;
        border-radius: .5rem;
        background-color: ${Colors.best_dark};
        color: ${Colors.best_red};
        font-family: 'Raleway';
        font-size: 1rem;
        padding: .5rem;
        margin-bottom: 1rem;
        cursor:pointer;

        :hover{
            transform: scale(.9);
        }
    };
    .title{
        font-family: 'Raleway';
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: ${(props: {watchMode: number}) => props.watchMode == 0 ? 'repeat(4, 1fr)' : '1fr'};
    gap: 10px;
`;

const Card = styled.div`
    display:flex;
    border-radius: .5rem;
    background-color: ${Colors.pastel};
    .txt{
        margin-left:.5rem;
    };
    .name{
        font-size: ${Font_Size[20]};
        font-family: 'Raleway';
        color: ${Colors.best_dark};
        font-weight: bold;
        margin-top: 1rem;
        margin-bottom: 3rem;
    };
    .address{
        color: ${Colors.best_red};
    };
`;

const Filters = styled.div`
    .filt{
        margin-top:10px;
        display:flex;
        margin-bottom: 10px;
    };
    button{
        margin-right: .5rem;
        font-family: 'Raleway';
        font-size: 1rem;
        border: none;
        outline: none;
        background-color: ${Colors.clean};
        color: ${Colors.best_dark};
        border-radius: .5rem;
        padding: 1rem;
        cursor:pointer;

        :hover{
            transform: scale(.9);
        }
    }
`;

const TitleFilter = styled.input`
    background: ${Colors.white} url("/icons/search.png") no-repeat;
    background-position-x: calc(100% - 10px);
    background-position-y: center;
    background-size: 14px 14px;
    padding: 5px 30px 5px 10px;
    border: none;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    outline: none;
    width: 15rem;
    color: ${Colors.best_dark};
    font-size: 1.2rem;
    display:flex;
    flex-direction: column;
    height: auto;
    &:focus {
        background-color: ${Colors.pastel};
    };
`;

const Entities: FC = () => {

    const companyName = ["Subsid Corp ltd", "World Company SAS", "CodeMasters"];
    const streetName = ["Caracas 1050", "Krakowska 16"];
    const cityName = ["Distrio Capital", "Cracow", "London"];
    const countryName = ["Venezuela", "Poland", "United Kingdom"];

    const [sort, doSorting] = useState("AZ");
    const [init, doInit] = useState(false);
    const [watchMode, enableWatchMode] = useState<number>(0);
    const [filterEvent, doEvent] = useState(false);
    const [titleFilter, setTitleFilter] = useState('');
    const [filterRef, filtersOpen, toggleFilters] = useDropdown();
    const [ent, doEntities] = useState<IEntity[]>([]);
    const [options, setOptions] = useState<IFilter[]>([]);
    const [genEnt, doGenEnt] = useState<IEntity[]>([]);

    useEffect(() => {
        const fillEntities = async () => {
            const e: IEntity[] = [];
            for (let i = 1; i <= 24; i++) {
                const entity: IEntity = {
                    name: `${_.sample(companyName)}`,
                    address: `${_.sample(streetName)}, ${_.sample(cityName)}, ${_.sample(countryName)}`,
                    photo: await getPhoto(i),
                };
                e.push(entity);
            }
            const x = (a: IEntity, b: IEntity) => {
                if (a.name[0] < b.name[0]) return -1;
                if (a.name[0] > b.name[0]) return 1;
                return 0;
            }
            e.sort(x);
            doEntities(e);
            doGenEnt(e);
            doInit(true);
        }

        if (!init) {
            fillEntities();
        }

        if (filterEvent) {
            enableFiltrs();
            doEvent(false);
        }
    });

    const linkCopied = () => {
        navigator.clipboard.writeText(window.location.href);
    }

    const togglerForSort = () => {
        doSorting(sort == 'AZ' ? 'ZA' : 'AZ');
        doEvent(true);
    };
    const getter = (ev: FormEvent) => {
        const target = ev.target as HTMLInputElement;
        setTitleFilter(target.value);
        doEvent(true);
    };
   
    const enableFiltrs = () => {
        let generated = [...genEnt];
        if(titleFilter.length > 0) {
            generated = generated.filter(entity => entity.name.toLowerCase().includes(titleFilter.toLowerCase()));
        }
        if(sort == 'ZA') {
            generated = generated.reverse();
        }
        doEntities([...generated]);
    };

    return (
        <Wrapper>
            <Header>
                <div className='title'>Entities</div>
                <div>
                    <p>
                    <button onClick={() => enableWatchMode(0)}> {watchMode == 0 ? 'Mosaic' : 'Mosaic'}</button> 
                    <button onClick={() => enableWatchMode(1)}> {watchMode == 1 ? 'List' : 'List'}</button>
                    </p>
                </div>
            </Header>

            <Filters>
                <div>
                    <button onClick={togglerForSort} >{sort == 'AZ' ? (<div/>) : (<div/>)} Sort</button>
                    <button  onClick={toggleFilters}>Filter</button>
                    <button onClick={linkCopied}>Share</button>
                </div>

                <div className="filt">
                    <div> {filtersOpen && <Filter options={options} setOptions={setOptions} />}</div>
                    <TitleFilter onInput={getter} placeholder='Search...' />
                </div>
            </Filters>

            <Content watchMode={watchMode}>
                {ent.map(entity => (
                    <Card>
                        <img className='img' src={entity.photo.thumbnailUrl} />
                        <div className="txt">
                            <div className="name">{entity.name}</div>
                            <div className="address">{entity.address}</div>
                        </div>
                    </Card>
                ))}
            </Content>
        </Wrapper>
    );
}
export default Entities;
