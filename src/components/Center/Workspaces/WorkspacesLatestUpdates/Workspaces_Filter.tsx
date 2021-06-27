import React, {FC} from "react";
import styled from "styled-components";
import {Building, FileEarmarkRichtext, HddStack, People} from "react-bootstrap-icons";
import { Colors } from "../../../../styled_helpers/Colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 14px;
  border-radius: 2px;
  color: ${Colors.black};
  background-color: ${(props: { color: string }) => props.color};
  svg {
    margin-right: 5px;
  }
`;

interface Props {
    name: string;
    iconName?: string;
    color: string;
    onClick?: (event: React.MouseEvent, name: string) => void;
}

const WorkspacesFilterButton: FC<Props> = (props) => {
    const handleClick = (event: React.MouseEvent) => {
        if (props.onClick) {
            props.onClick(event, props.name);
        }
    }

    const getIcon = () => {
        switch (props.iconName) {
            case 'building':
                return (<Building />);
            case 'people':
                return (<People />);
            case 'file':
                return (<FileEarmarkRichtext />);
            case 'questionnaire':
                return (<HddStack />);
            default:
                return (<></>);
        }
    }

    return (
        <Wrapper color={props.color} onClick={handleClick}>
            {getIcon()}
            {props.name}
        </Wrapper>
    );
}
export default WorkspacesFilterButton;