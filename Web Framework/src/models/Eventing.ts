type Callback = () => void

export class Eventing{
    events : { [key: string]: Callback [] } = {};   // initialize event


     // only register event , not trigger event
     on = (eventName: string , callback : Callback): void => {
        // this.events[eventName]  // callback[] or undefined
        const handlers = this.events[eventName] || [];
        handlers.push(callback);    // push callback into on method
        this.events[eventName] = handlers;  // send back to this object
    }

    // trigger event
    trigger = (eventName: string):void => {
        const handlers = this.events[eventName]
        if(!handlers || handlers.length == 0)
        {
            return ;
        }
        handlers.forEach( callback => {
            callback();
        });
    }

}