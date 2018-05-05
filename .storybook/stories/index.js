import React from 'react';
import { storiesOf } from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Modal from './../../src/components/Modal/Modal';
import './../../src/App.css';

storiesOf('Material-UI', module)
    .addDecorator(muiTheme())
    .add('FlatButton Cancel', () => (
        <FlatButton
            label="Отмена"
            keyboardFocused={true}
            onClick={this.handleClosePopup}
        />
    ))
    .add('FlatButton Save', () => (
        <FlatButton
            backgroundColor="#00bcd4"
            labelStyle={{color: "#fff"}}
            label="Сохранить"
            onClick={this.save}
        />
    ))
    .add('Raised Button', () => (
        <RaisedButton
            backgroundColor="#00bcd4"
            labelColor="#fff"
            label = "Нажми меня!"
            onClick = {this.handleOpenPopup}
        />
    ))
    .add('Modal component', () => (<Modal title="Структура номеров"/>));
