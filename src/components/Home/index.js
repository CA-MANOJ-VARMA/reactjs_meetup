import {Component} from 'react'
import {
  BgContainer,
  Navbar,
  RegisterJoinContainer,
  MeetupContainer,
  Button,
} from '../StyledComponents'

class Home extends Component {
  state = {
    inputName: '',
    errorMsg: false,
  }

  inputNameChange = event => {
    this.setState({inputName: event.target.value})
  }

  optionSelectedChange = event => {
    this.setState({optionSelected: event.target.value})
  }

  registerForm = () => {
    const {history} = this.props
    history.replace('/register')
  }

  render() {
    const {location} = this.props
    // const {params} = match
    console.log(location)
    const {inputName, optionSelected, errorMsg} = this.state
    return (
      <BgContainer>
        <Navbar>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </Navbar>
        <RegisterJoinContainer>
          <MeetupContainer>
            <h1>Welcome to the meetup</h1>
            <p>Please register for the topic</p>
            <Button type="button" onClick={this.registerForm}>
              Register
            </Button>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          </MeetupContainer>
        </RegisterJoinContainer>
      </BgContainer>
    )
  }
}

export default Home
