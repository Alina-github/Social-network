import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/reducers/dialogPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        newMessageBody: state.dialogPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageContent: (newText) => {
            dispatch(updateMessageTextActionCreator(newText))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);//т.е мы говорим:
// объект перерсуйся, если state (dialogPage) изменился.

// коннектом создается контейнерная компонента
// и в нее засовывается нужная презентационная компонента.
// Dialogs с пропсами и методами
export default DialogsContainer;


