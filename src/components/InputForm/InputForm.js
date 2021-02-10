import React from 'react';
import './InputForm.css'


class InputForm extends React.Component {
  constructor () {
    super();
    this.onNameChange = this.onNameChange.bind(this);
    this.onBirhtdayChange = this.onBirhtdayChange.bind(this);
    this.onTelChange = this.onTelChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPassNumChange = this.onPassNumChange.bind(this);
    this.onPassDateChange = this.onPassDateChange.bind(this);
    this.onPassOfficeChange = this.onPassOfficeChange.bind(this);
    this.onPassCodeChange = this.onPassCodeChange.bind(this);
    this.onLicenceNumChange = this.onLicenceNumChange.bind(this);
    this.onLicenceDateChange = this.onLicenceDateChange.bind(this);
    this.onNextFormClick = this.onNextFormClick.bind(this);
    };


    


  render() {
        return (
        <>
            <form>
                <div className="input__frame">
                  <div className="input__frame-nav">
                    <span className />
                    <span className="input__frame-step"> Шаг 1 из 3</span>
                    <span className />
                  </div>
                  <h1 className="input__frame-header">Расскажи о себе</h1>
                  <div className="hz">
                    <div className="input__form">
                      <div>
                        <div className="input__form-subheaderinfo">Информация о вас</div>
                        <div className="input__form-title">
                          <div className="input__form-mobile">ФИО</div>
                          <input className="input__form-text" type="text" onChange={this.onNameChange} />
                        </div>
                        <div className="input__form-title">
                          <div className="input__form-mobile">Дата рождения</div>
                          <input type="text" className="input__form-api" onChange={this.onBirhtdayChange} />
                        </div>
                        <div className="input__form-title">
                          <div className="input__form-mobile">Электронная почта</div>
                          <input className="input__form-text" onChange={this.onEmailChange} />
                        </div>
                        <div className="input__form-title">
                          <div className="input__form-mobile">Телефон</div>
                          <input className="input__form-api" onChange={this.onTelChange} />
                        </div>
                      </div>
                      <div>
                        <span className="input__form-subheader">Паспорт</span>
                        <div className="input__form-title">
                          <div className="input__form-mobile">Серия и номер</div>
                          <input className="input__form-api" onChange={this.onPassNumChange} />
                        </div>
                        <div className="input__form-title">
                          <div className="input__form-mobile">Дата выдачи</div>
                          <input className="input__form-api" onChange={this.onPassDateChange}/>
                        </div>
                        <div className="input__form-title">
                          <div className="input__form-mobile">Кем выдан</div>
                          <input className="input__form-text" onChange={this.onPassOfficeChange}/>
                        </div>
                        <div className="input__form-title">
                          <div className="input__form-mobile">Код подразделения</div>
                          <input className="input__form-api" onChange={this.onPassCodeChange} />
                        </div>
                      </div>
                      <div>
                        <span className="input__form-subheader">Водительское удостоверение</span>
                        <div className="input__form-title">
                          <div className="input__form-mobile">Серия и номер</div>
                          <input id className="input__form-api" onChange={this.onLicenceNumChange}/>
                        </div>
                        <div className="input__form-title">
                          <div className="input__form-mobile">Дата выдачи</div>
                          <input id className="input__form-api"  onChange={this.onLicenceDateChange}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="continue">
                <button onClick={this.onNextFormClick}>Продолжить</button>
              </div>
            </form>
          </>

        );
}

onNameChange (e) {
  this.setState({name: e.target.value});
};

onBirhtdayChange (e) { 
  this.setState({birthday: e.target.value});
};

onTelChange (e) {
  this.setState({phone: e.target.value});
};

onEmailChange (e) {
  this.setState({email: e.target.value});
};

onPassNumChange (e) {
  this.setState({passNum: e.target.value});
};

onPassDateChange (e) {
  this.setState({passDate: e.target.value});
};

onPassOfficeChange (e) {
  this.setState({passOffice: e.target.value});
};

onPassCodeChange (e) {
  this.setState({passOfficeCod: e.target.value});
};

onLicenceNumChange (e) {
  this.setState({licenceNom: e.target.value});
};

onLicenceDateChange (e) {
  this.setState({licenceDate: e.target.value});
};


onNextFormClick (e) {
  e.preventDefault()
  console.log (this.state);
  alert('Wait');
};




}


export default InputForm;