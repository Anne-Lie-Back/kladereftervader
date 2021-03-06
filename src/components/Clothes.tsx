import React, {CSSProperties, MouseEvent} from 'react'
import WeatherFigure from './WeatherFigure'
import WeatherDescription from './WeatherDescription'
import { WeatherResponse } from '../api-typings'

interface Props {
  isDayMode: boolean,
  weatherContent: WeatherResponse[]
}

interface State {
  whatDay: string,
  todayButton: string,
  tomorrowButton: string,
  dayAfterTomorrowButton: string,
}

export default class Clothes extends React.Component<Props, State>{
  constructor(props:Props){
    super(props)
    this.state = { 
      whatDay: "today",
      todayButton: "#FFF",
      tomorrowButton: "#D3D3D3",
      dayAfterTomorrowButton: "#D3D3D3",
    }
  }

  //Swaps colors on buttons and handle picks
  handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const btnValue = event.currentTarget.value
    this.setState({
      whatDay: btnValue,
    })
    if(btnValue === "today"){
      this.setState({
        todayButton: "#FFF",
        tomorrowButton: "#D3D3D3",
        dayAfterTomorrowButton: "#D3D3D3",
      })
    } else if (btnValue === "tomorrow"){
      this.setState({
        todayButton: "#D3D3D3",
        tomorrowButton: "#FFF",
        dayAfterTomorrowButton: "#D3D3D3",
      })
    } else if (btnValue === "dayAfterTomorrow"){
      this.setState({
        todayButton: "#D3D3D3",
        tomorrowButton: "#D3D3D3",
        dayAfterTomorrowButton: "#FFF",
      })
    }
}
  // Gives weatherOutPut the content of the picked day
  weatherOutPutThisDay(){
    let weatherOutPut
    if(this.state.whatDay === "today"){
      weatherOutPut = this.props.weatherContent[0]
    } else if (this.state.whatDay === "tomorrow"){
      weatherOutPut = this.props.weatherContent[1]
    } else if (this.state.whatDay === "dayAfterTomorrow") {
      weatherOutPut = this.props.weatherContent[2]
    }
    return weatherOutPut
  }

  //Translates dayname to SE
  translateDay(){
    let whatDayIsIt
    if(this.state.whatDay === "today"){
      whatDayIsIt = "Idag"
    } else if (this.state.whatDay === "tomorrow"){
      whatDayIsIt = "Imorgon"
    } else if (this.state.whatDay === "dayAfterTomorrow") {
      whatDayIsIt = "I övermorgon"
    }
    return whatDayIsIt
  }

  render() {
    const weatherOutPut = this.weatherOutPutThisDay()
    const whatDayIsIt = this.translateDay()

    if (!weatherOutPut) {
      return <p>Loading...</p>
    }

    return (
      <div style = {clothesGridItem}>
          <WeatherFigure weatherContent={weatherOutPut} isDayMode={this.props.isDayMode}/>
          <WeatherDescription weatherContent={weatherOutPut} whatDayIsIt={whatDayIsIt}/>
        <div style = {buttonWrapper}>
          <button 
            style = {{...buttonStyle, backgroundColor:this.state.todayButton}}
            type = "button"
            name = "whatDay"
            value = "today"
            onClick = {this.handleClick}
            >Idag
          </button>
          <button 
            style = {{...buttonStyle, backgroundColor:this.state.tomorrowButton}}
            type = "button"
            name = "whatDay"
            value = "tomorrow"
            onClick = {this.handleClick}
            >Imorgon
          </button>
          <button 
            style = {{...buttonStyle, backgroundColor:this.state.dayAfterTomorrowButton}}
            type = "button"
            name = "whatDay"
            value = "dayAfterTomorrow"
            onClick = {this.handleClick}
            >I över-<br/>morgon
          </button>
        </div>
      </div>
    )
  }
}

const clothesGridItem: CSSProperties = {
  gridArea: 'clothes',
  height: '100%',
  maxWidth: '100rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-around'
}

const buttonWrapper:CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10%',
}

const buttonStyle:CSSProperties={
  height: '3rem',
  width: '5rem',
  padding: '0.25rem 0.5rem',
  borderRadius: '25px',
  border: '3px solid black',
  outline: 'none',
  cursor: 'pointer',
  margin: '1em 0.5em 0'
}