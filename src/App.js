import React, {Component} from 'react';
import './App.css';
import {Informative} from "./Informative";
import UnityOfStyle from "./UnityOfStyle";
import {Eloquence} from "./Eloquence";
import {Emotionality} from "./Emotionality";
class App extends Component {
    state = {
        inf1: 'Доля неречевых звуков и слов-паразитов превышает допустимый порог.',
        inf2: 'Не хватает фактов и деталей для подтерждения высказанных аргументов.',
        inf3: 'Стиль выступления больше подходит под публицистический. ',
        inf4: 'Найдено излишнее количество слов-паразитов.',
        inf5:'Процент ваших эмоций в выступлении.',
        inf6: '66%'
    };
    render() {
        return (

            <div className= "wrapper">
                <div className= "accordion">
                    <div className="item">
                        <div className="title">
                            <h2>Информативность</h2>
                            <span>+</span>
                        </div>
                        <div className="content">
                            <Informative inf ={this.state} />
                        </div>
                    </div>
                    <div className="item">
                        <div className="title">
                            <h2>Единство стиля</h2>
                            <span>+</span>
                        </div>
                        <div className="content">
                            <UnityOfStyle inf ={this.state}/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title">
                            <h2>Красноречивость</h2>
                            <span>+</span>
                        </div>
                        <div className="content">
                            <Eloquence inf ={this.state}/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title">
                            <h2>Эмоциональность</h2>
                            <span>+</span>
                        </div>
                        <div className="content">
                            <Emotionality inf ={this.state}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;


