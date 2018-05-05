import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import List from '../../components/List/List';

export default class Modal extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isOpenPopup: false,
            temp: []
        };
    }

    handleOpenPopup = () => {
        this.setState({isOpenPopup: true});
    };

    handleClosePopup = () => {
        this.setState({isOpenPopup: false});
    };

    updateList = (list) => {
        this.setState({ temp: list.items });
    };

    save = () => {
        this.setState({
            data: this.state.temp,
            isOpenPopup: false,
        });
    };

    render() {
        return (
            <div>
                <RaisedButton
                    className="start-btn"
                    backgroundColor="#00bcd4"
                    labelColor="#fff"
                    label = "Нажми меня!"
                    onClick = {this.handleOpenPopup}
                />
                <Dialog
                    paperClassName="dialog-block"
                    bodyStyle={{overflow: 'auto'}}
                    open={this.state.isOpenPopup}
                    onRequestClose={this.handleClosePopup}
                >
                    <AppBar
                        className="header"
                        title={this.props.title}
                        iconElementLeft={(<div />)}
                        iconElementRight={<IconButton><NavigationClose onClick={this.handleClosePopup}/></IconButton>}
                    />

                    <List list={this.state.data} updateList={this.updateList} />

                    <div className="controls">
                        <FlatButton
                            backgroundColor="#00bcd4"
                            labelStyle={{color: "#fff"}}
                            label="Сохранить"
                            onClick={this.save}
                        />
                        <FlatButton
                            label="Отмена"
                            keyboardFocused={true}
                            onClick={this.handleClosePopup}
                        />
                    </div>
                </Dialog>
            </div>
        );
    }
};
