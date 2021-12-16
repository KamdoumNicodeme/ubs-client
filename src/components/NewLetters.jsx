import {AiOutlineSend} from "react-icons/all";

function NewLetters() {

    return (

        //container
        <div style={{height:`${60}vh`}} className="bg-gray-50 flex items-center justify-center flex-col mb-5">

            {/*ttile*/}
            <h1 className="text-8xl">

                Newletter
            </h1>

            {/*    description*/}

            <p className="m-10 mx-auto text-2xl font-medium tracking-wider font-light mb-5 ">
                get timely updates from your favorite products.
            </p>
            {/*input container*/}
            <di  className="h-10 w-3/6 bg-white flex justify-between " >
                <input type="email" placeholder="Enter your email address" className="border-none px-9" style={{flex:`${8}`}}/>
                <button className="bg-blue-500 flex-1 border-none text-white" >
                    <AiOutlineSend className="h-10 w-10 ml-10"/>
                </button>

            </di>

        </div>
    );

}

export default NewLetters;