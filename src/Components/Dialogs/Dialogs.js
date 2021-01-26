import React from 'react'
import AddMassageForm from './AddMassageForm/AddMassageForm'
import DialogItem from './DialogItem/DialogItem'
import './Dialogs.css'
import Massages from './Massages/Massages'
import { reduxForm } from 'redux-form'
import MassagesContainer from './Massages/MassagesContainer'

const Dialogs = props => {

    let addMassage = data => {
        props.sendMassageAC(data.addMassage)
    }
    let AddMassageReduxForm = reduxForm({ form: 'addMassage' })(AddMassageForm)

    return (
        <div className='dialogs'>
            <div className='dialogs-container'>
                {props.dialogPage.dialogsArr.map(item => <DialogItem name={item.name} id={item.id} key={item.id} />)}
            </div>

            <MassagesContainer massagesArr={props.dialogPage.massagesArr}/>

            <AddMassageReduxForm onSubmit={addMassage} />
        </div>
    )
}

export default Dialogs