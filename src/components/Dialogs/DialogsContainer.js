import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/reducers/dialogPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        newMessageBody: state.dialogPage.newMessageBody,
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

// объект перерсуйся, если state (dialogPage) изменился.

// коннектом создается контейнерная компонента
// и в нее засовывается нужная презентационная компонента.
// Dialogs с пропсами и методами
export default compose(withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);


