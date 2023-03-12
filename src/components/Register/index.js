import {Component} from 'react'
import {
  BgContainer,
  Navbar,
  RegisterJoinContainer,
  LetusJoinContainer,
  InputContainer,
  InputItself,
  SelectContainer,
  Button,
} from '../StyledComponents'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    inputName: '',
    optionSelected: topicsList[0].displayText,
    errorMsg: false,
  }

  inputNameChange = event => {
    this.setState({inputName: event.target.value})
  }

  optionSelectedChange = event => {
    this.setState({optionSelected: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {inputName, optionSelected} = this.state
    if (inputName === '') {
      this.setState({errorMsg: true})
    } else {
      const {history} = this.props
      history.replace({
        pathname: '/',
        state: {inputName, optionSelected},
      })
    }
  }

  render() {
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
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
          </div>
          <LetusJoinContainer>
            <form onClick={this.submitForm}>
              <InputContainer>
                <label htmlFor="name">NAME</label>
                <InputItself
                  id="name"
                  placeholder="Your Name"
                  value={inputName}
                  onChange={this.inputNameChange}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="topics">TOPICS</label>
                <SelectContainer
                  id="topics"
                  value={optionSelected}
                  onChange={this.optionSelectedChange}
                >
                  {topicsList.map(eachList => (
                    <option key={eachList.id}>{eachList.displayText}</option>
                  ))}
                </SelectContainer>
              </InputContainer>
              <Button type="submit">Register</Button>
            </form>
            {errorMsg && <p>Please enter your name</p>}
          </LetusJoinContainer>
        </RegisterJoinContainer>
      </BgContainer>
    )
  }
}

export default Register
