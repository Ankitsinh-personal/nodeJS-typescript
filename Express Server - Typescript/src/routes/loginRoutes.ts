import { NextFunction, Request, Response, Router } from "express";

const router = Router()

interface RequestWithBody extends Request{
    body : {[key:string]: string | undefined}
}

function requireAuth(req:Request, res:Response , next: NextFunction){
  if(req.session && req.session.loggedIn){
    next();
    return
  }
  res.status(403)
  res.send('not permitted')
}
router.get('/login',(req:Request,res:Response)=>{
    res.send(
        `
        <form method="POST">
            <div>
                <label> Email </label>
                <input name="email"/>
            </div>
            <div>
                <label> Password </label>
                <input name="password" type="password"/>
            </div>
            <button>Submit</button>
        </form>
        `
    )
})

router.post('/login',(req:RequestWithBody,res:Response)=>{
    const { email , password } = req.body;

    if(email && password){
        req.session = { loggedIn: true };
        res.redirect('/')
    }
    else{
        console.log('invalid email or password');   
    }
})

router.get('/',(req:RequestWithBody,res:Response)=>{
    const { email , password } = req.body;

    if(req.session && req.session.loggedIn){
        res.send(`
        <div>
            <div> You are loggedIn </div>
            <a href="/logout" >Logout</a>
        </div>
        `)
    }
    else{
        res.send(`
        <div>
            <div> You are not loggedIn </div>
            <a href="/login" >Login</a>
        </div>
        `)        
    }
})


router.get('/logout',(req:RequestWithBody,res:Response)=>{
    req.session = undefined;
    res.redirect('/')
})

router.get('/protected', requireAuth,(req:Request,res:Response)=>{
    res.send('welcome to protected route, logged in user')
})

export { router}