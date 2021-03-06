import React, {CSSProperties} from 'react'
import {Link} from 'react-router-dom'

interface Props {
    id:string,
    name: string,
    isDayMode: boolean,
    onViewSelected: (id: string) => void,
    activeView: string
}

export default class NavItem extends React.Component<Props>{ 
    stylesButton(){
        let buttonStyle
        if(this.props.activeView === this.props.id){
            this.props.isDayMode?buttonStyle = buttonActiveDay:buttonStyle = buttonActiveNight
        }
        else{
            buttonStyle = buttonUnActive 
        }
        return buttonStyle
    }

    render(){
        const buttonStyle = this.stylesButton()
        const handleOnclick = () => this.props.onViewSelected(this.props.id)
        
        return (
            <Link 
                to = {this.props.id} style = {{...navItemStyle, ...buttonStyle}} onClick = {handleOnclick}>
                {this.props.name}
            </Link>
        )
    }
}

const navItemStyle: CSSProperties = {
    padding: '1rem 0',
    cursor: 'pointer',
    display: 'flex',
    flexGrow: 1,
    textDecoration: 'none',
    justifyContent: 'center',    
    borderBottomLeftRadius: '25px',
    borderBottomRightRadius: '25px'
}

const buttonActiveDay:CSSProperties = {
    backgroundColor: '#b3d9ff',
    borderTop: 0,
    borderRight: '3px solid black',
    borderBottom: '3px solid black',
    borderLeft: '3px solid black',
    color: 'black'
}

const buttonActiveNight:CSSProperties = {
    backgroundColor: '#000033',
    borderTop: 0,
    borderRight: '3px solid black',
    borderBottom: '3px solid black',
    borderLeft: '3px solid black',
    color: '#ffffcc',
}

const buttonUnActive:CSSProperties = {
    border: '3px solid black',
    backgroundColor: '#5f8bb8',
    color: 'black'
}

