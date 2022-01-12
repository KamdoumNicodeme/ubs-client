import {Link, Navigate} from "react-router-dom";
import {useState} from "react";

function Login()  {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submit = async (e) => {

        e.preventDefault();
        console.log({
            username,
            password
        });
        await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({
                username,
                password
            })


        });
        setRedirect(true);

    }
    if (redirect) {
        return <Navigate to="/cart"/>
    }


        return (
            <div style={{
                width: `${100}vw`,
                height: `${100}vh`,
                background: `linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)) ,url(${"https://i.ibb.co/hB9QyFR/wallpapersden-com-lily-collins-stunning-cover-for-shape-magazine-2560x1440.jpg"})`,

            }} className="flex items-center justify-center bg-cover md:flex">
                {/*    Wrapper*/}
                <div className="p-20px w-3/12 bg-gray-100">
                    <h1 className="text-3xl font-sans mx-4 ">SIGN IN </h1>
                    <form className="flex flex-col" onSubmit={submit}>

                        <input type="text" placeholder="username" className="flex-1 min-w-3/10 m-4 p-2" onChange={e =>setUserName(e.target.value)}/>
                        <input type="password" placeholder="password" className="flex-1 min-w-3/10 m-4 p-2" onChange={e  =>setPassword(e.target.value)}/>


                        <button type="submit" className="border-none bg-blue-400 text-white cursor-pointer   m-2 p-2 w-1/2 mx-4 mb-2" style={{padding:`${15}px ${20}px`}}>LOGIN</button>
                        <Link to="#" className="m-2 hover:text-purple-500 mx-4 underline cursor-pointer" >DO  NOT YOU REMEMBER THE PASSWORD ? </Link>
                        <Link to="/register" className="m-2 hover:text-purple-500 mx-4 underline cursor-pointer">CREATE A NEW ACCOUNT </Link>
                    </form>
                </div>

            </div>
        );

}

export default Login;