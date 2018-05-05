import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DeleteBtn from "../DeleteBtn/DeleteBtn";

export default class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.elem.selectedOption || "Twin",
            value: props.elem.value || 1
        };
    }

    handleChange = (event, index, selectedOption) => {
        this.setState({ selectedOption: selectedOption});
        this.props.change(selectedOption, this.props.elem.id);
    };

    handleDelete = () => {
        this.props.delete(this.props.elem.id);
    };

    changeValue = (event) => {
        this.setState({value: event.target.value});
        this.props.changeValue(event.target.value, this.props.elem.id);
    };

    render() {
        return (
        <li className="unit">
            <SelectField value={this.state.selectedOption} onChange={this.handleChange}>
                <MenuItem value="Twin" primaryText="Twin" />
                <MenuItem value="Tripple" primaryText="Tripple" />
                <MenuItem value="Quadro" primaryText="Quadro" />
            </SelectField>

            <input
                className="input-number"
                type="number"
                step="1"
                defaultValue={this.state.value}
                onChange={this.changeValue}
                />

            <DeleteBtn delete={this.handleDelete} />
        </li>
        );
    }
}
