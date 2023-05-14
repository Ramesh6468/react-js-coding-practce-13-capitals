import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  getCapital = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const findCountry = countryAndCapitalsList.find(
      each => each.id === activeId,
    )
    return findCountry.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="title">Countries and Capitals</h1>
          <div className="inputContainer">
            <select
              onChange={this.getCapital}
              value={activeId}
              className="capital"
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id} className="option">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question"> is capital of which country?</p>
          </div>
          <p className="answer">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
