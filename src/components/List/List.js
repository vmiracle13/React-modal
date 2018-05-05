import React, {Component} from 'react';
import Element from "../Element/Element";
import FlatButton from 'material-ui/FlatButton';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {items: props.list || []};
        this.defaultSettings = ["Twin", "Tripple", "Quadro"];
    }

    handleAddItem = () => {
        this.setState(
            Object.assign({
                items: [...this.state.items, {
                    id: this.state.items.length > 0 ? this.state.items[this.state.items.length - 1].id + 1 : 0,
                    currentValue: 1,
                    selectedOption: this.defaultSettings[0]
                }]
            })
        );

        this.props.updateList({
            items: [...this.state.items, {
                id: this.state.items.length > 0 ? this.state.items[this.state.items.length - 1].id + 1 : 0,
                currentValue: 1,
                selectedOption: this.defaultSettings[0]
            }]
        });
    };

    handleDelete = (id) => {
        const updatedList = this.state.items.filter( elem => {
            return elem.id !== id;
        });

        this.setState(Object.assign({items: [...updatedList]}));
        this.props.updateList({items: [...updatedList]});
    };

    onChange = (selectedOption, index) => {
        const arr = JSON.parse(JSON.stringify(this.state.items));

        const result = arr.map( unit => {
            if (unit.id === index) {
                unit.selectedOption = selectedOption;
            }

            return unit;
        });

        this.setState({items: result});
        this.props.updateList({items: result});
    };

    onChangeValue = (value, index) => {
        const arr = JSON.parse(JSON.stringify(this.state.items));

        const result = arr.map( unit => {
            if (unit.id === index) {
                unit.value = value;
            }

            return unit;
        });

        this.setState({items: result});
        this.props.updateList({items: result});
    };

    render() {
        return (
            <div>
                <ul className="list">
                    {this.state.items.map((elem) => {
                        return (
                            <Element
                                key={elem.id + elem.selectedOption}
                                elem={elem}
                                delete={this.handleDelete}
                                change={this.onChange}
                                changeValue={this.onChangeValue} />
                        );
                    })}
                </ul>

                <FlatButton label="Добавить" primary={true} onClick={this.handleAddItem}/>
            </div>
        );
    }
}
