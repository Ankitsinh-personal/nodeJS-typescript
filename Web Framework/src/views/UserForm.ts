import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps>{

    // constructor(public parent : Element, public model:User){
    //   this.bindModel()
    // }

    // bindModel():void{
    //     this.model.on('change',()=>{
    //         this.render()
    //     })
    // }

    eventsMap() : { [key:string]: () => void}{
        return{
            // 'click:button':this.onButtonClick,
            // 'mouseenter:h1':this.onHeaderHover,
            'click: .set-age':this.onSetAgeClick,
            'click: .set-name':this.onSetNameClick,
            'click: .save-model':this.onSaveClick
        }
    }
    // onButtonClick():void{
    //     console.log('Hello world');
        
    // }
    // onHeaderHover():void{
    //     console.log('hover on h1');
        
    // }

    onSetAgeClick = () :void => {
    this.model.setRandomAge()        
    }

    onSetNameClick=(): void => {
        const input = this.parent.querySelector('input');
        if(input){
            const name = input.value
            this.model.set({name})
        }
    }

    onSaveClick = () : void =>{
        this.model.save()
    }

    template(): string{
        return `
        <div>
            
            <input placeholder="${this.model.get('name')}"/>
            <button class='set-name'>Change Name</button>
            <button class='set-age'>Set Rendom age</button>
            <button class='save-model'>Save Model</button>
        </div>
        `
    }

    // bindEvents(fragment: DocumentFragment):void{
    //     const eventsMap = this.eventsMap()

    //     for(let eventKey in eventsMap){
    //         const [eventName , selector] = eventKey.split(':');

    //         fragment.querySelectorAll(selector).forEach((element)=>{
    //             element.addEventListener(eventName, eventsMap[eventKey]);
    //         })
    //         // eventName // click
    //         // selector // button
    //     }
    // }
    // render():void{
    //     this.parent.innerHTML = '';
    //     const templateElement = document.createElement('template')
    //     templateElement.innerHTML = this.template();
     
    //     this.bindEvents(templateElement.content)
    //     this.parent.append(templateElement.content)
    // }
}