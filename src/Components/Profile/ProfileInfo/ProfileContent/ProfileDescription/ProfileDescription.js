import React from 'react'

class ProfileDescription extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode() {
        this.setState(state => ({
            editMode: !state.editMode
        }))
        if(this.state.editMode) {
            this.props.updateStatus(this.state.status)
        }
    }
    changeHandler(e) {
        this.setState(({
            status: e.currentTarget.value
        }))
    }
    componentDidUpdate(prevProps) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div className="profile-description">

                <div className='profile-fullName'>
                    {this.props.fullName}
                </div>
                <div className='profile-aboutMe'>
                    {!this.state.editMode &&
                        <div>
                            <span onClick={this.toggleEditMode.bind(this)}>{this.props.status ? this.props.status : 'Статус не указан'}</span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div>
                            <input
                                autoFocus={true} 
                                onBlur={this.toggleEditMode.bind(this)} 
                                value={this.state.status} 
                                onChange={this.changeHandler.bind(this)}/>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default ProfileDescription