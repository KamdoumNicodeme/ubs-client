import {useState} from "react";
import {Navigate} from "react-router-dom";

function Register() {

    const [redirect, setRedirect] = useState(false);

    const submit = () => {
        setRedirect(true);
        if (redirect) {
            return <Navigate to="/"/>
        }

    }

    return (
        <div style={{
            width: `${100}vw`,
            height: `${100}vh`,
            background: `linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)) ,url(${"https://i.ibb.co/1ZKPH3x/9-Freida-Pinto.jpg"})`,

        }} className="flex items-center justify-center bg-cover">
            {/*    Wrapper*/}
            <div className="p-20px w-4/12 bg-gray-100">
                <h1 className="text-3xl font-sans mx-4 ">CREATE AN ACCOUNT</h1>
                <form className="flex flex-wrap" onSubmit={submit}>
                    <input type="text" placeholder="name" className="flex-1 min-w-3/10 m-4 p-2 "/>
                    <input type="text" placeholder="last name" className="flex-1 min-w-3/10 m-4 p-2"/>
                    <input type="email" placeholder="email" className="flex-1 min-w-3/10 m-4 p-2"/>
                    <input type="text" placeholder="username" className="flex-1 min-w-3/10 m-4 p-2"/>
                    <input type="password" placeholder="password" className="flex-1 min-w-3/10 m-4 p-2"/>
                    <input type="password" placeholder=" confirm password" className="flex-1 min-w-3/10 m-4 p-2"/>
                    {/*    agreesement*/}
                    <span className="text-base m-4">
                        <p>   By creating and account, I consent to processing of my personal data in accordance with the<b>PRIVACY POLICY</b>
</p>
                        </span>
                    <button type="submit" className="border-none bg-blue-400 text-white cursor-pointer w-4/12 mx-4"
                            style={{padding: `${15}px ${20}px`}}>CREATE
                    </button>
                </form>
            </div>

        </div>
    );

}

export default Register;